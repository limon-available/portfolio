import { Comment } from "../models/Comment.js";

const MAX_LIMIT = 50;

export async function listComments(req, res, next) {
  try {
    const { slug } = req.params;
    const limit = Math.min(Number(req.query.limit) || 20, MAX_LIMIT);

    // Cursor pagination: pass ?before=<ISO date> to page back through history.
    const filter = { projectSlug: slug };
    if (req.query.before) {
      const before = new Date(req.query.before);
      if (!Number.isNaN(before.getTime())) filter.createdAt = { $lt: before };
    }

    const comments = await Comment.find(filter)
      .sort({ createdAt: -1 })
      .limit(limit)
      .select("author body createdAt")
      .lean();

    res.json({ data: { comments }, error: null });
  } catch (err) {
    next(err);
  }
}

export async function createComment(req, res, next) {
  try {
    const { slug } = req.params;
    const { author, body } = req.body;
    const doc = await Comment.create({
      projectSlug: slug,
      author,
      body,
      meta: { ip: req.ip },
    });

    res.status(201).json({
      data: {
        comment: {
          _id: doc._id,
          author: doc.author,
          body: doc.body,
          createdAt: doc.createdAt,
        },
      },
      error: null,
    });
  } catch (err) {
    next(err);
  }
}
