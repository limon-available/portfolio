import mongoose from "mongoose";
import { Rating } from "../models/Rating.js";
import { voterKeyFromReq } from "../utils/voterKey.js";

/** Compute average + count for a project. */
async function summarize(projectSlug) {
  const [agg] = await Rating.aggregate([
    { $match: { projectSlug } },
    { $group: { _id: null, average: { $avg: "$value" }, count: { $sum: 1 } } },
  ]);
  return {
    average: agg ? Number(agg.average.toFixed(2)) : 0,
    count: agg ? agg.count : 0,
  };
}

export async function getRating(req, res, next) {
  try {
    const { slug } = req.params;
    const voterKey = voterKeyFromReq(req);
    const [summary, mine] = await Promise.all([
      summarize(slug),
      Rating.findOne({ projectSlug: slug, voterKey }).select("value").lean(),
    ]);
    res.json({
      data: { ...summary, yourRating: mine ? mine.value : null },
      error: null,
    });
  } catch (err) {
    next(err);
  }
}

export async function setRating(req, res, next) {
  try {
    const { slug } = req.params;
    const { value } = req.body;
    const voterKey = voterKeyFromReq(req);

    // Upsert: one vote per voter per project; re-rating overwrites.
    await Rating.updateOne(
      { projectSlug: slug, voterKey },
      { $set: { value } },
      { upsert: true },
    );

    const summary = await summarize(slug);
    res.json({ data: { ...summary, yourRating: value }, error: null });
  } catch (err) {
    // Concurrent first-vote upserts can race the unique index — treat as success.
    if (err instanceof mongoose.mongo.MongoServerError && err.code === 11000) {
      try {
        const summary = await summarize(req.params.slug);
        return res.json({ data: { ...summary, yourRating: req.body.value }, error: null });
      } catch (e) {
        return next(e);
      }
    }
    next(err);
  }
}
