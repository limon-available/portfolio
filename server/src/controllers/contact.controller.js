import { Contact } from "../models/Contact.js";
import { sendContactNotification } from "../utils/mailer.js";

export async function createContact(req, res, next) {
  try {
    const { name, email, message } = req.body;
    const doc = await Contact.create({
      name,
      email,
      message,
      meta: { ip: req.ip, userAgent: req.get("user-agent") },
    });

    // Fire-and-forget — don't block the response on email delivery.
    sendContactNotification({ name, email, message });

    res.status(201).json({ data: { id: doc._id }, error: null });
  } catch (err) {
    next(err);
  }
}
