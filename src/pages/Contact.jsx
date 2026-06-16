import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import PageWrapper from "../components/ui/PageWrapper.jsx";
import Section from "../components/ui/Section.jsx";
import Card from "../components/ui/Card.jsx";
import Field from "../components/ui/Field.jsx";
import Button from "../components/ui/Button.jsx";
import { submitContact } from "../api/contact.js";
import { profile } from "../data/profile.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = ({ name, email, message }) => {
  const errors = {};
  if (name.trim().length < 2) errors.name = "Name must be at least 2 characters.";
  if (!EMAIL_RE.test(email.trim())) errors.email = "Enter a valid email address.";
  if (message.trim().length < 10) errors.message = "Message must be at least 10 characters.";
  return errors;
};

const Contact = () => {
  const [values, setValues] = useState({ name: "", email: "", message: "", website: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [formError, setFormError] = useState(null);

  const update = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus("submitting");
    try {
      await submitContact({
        name: values.name.trim(),
        email: values.email.trim(),
        message: values.message.trim(),
        website: values.website, // honeypot
      });
      setStatus("success");
      setValues({ name: "", email: "", message: "", website: "" });
    } catch (err) {
      setStatus("error");
      if (err.fields) setErrors(err.fields);
      setFormError(
        err.status === 429
          ? "You’ve sent a few messages already — please wait a little and try again."
          : err.message || "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <PageWrapper
      title="Contact — Md. Limon"
      description="Get in touch with Md. Limon for freelance work, collaboration, or full-time opportunities."
    >
      <Section id="contact">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left: intro + details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              Let’s connect
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight text-surface-900 dark:text-white sm:text-4xl">
              Contact Me
            </h1>
            <p className="mt-4 max-w-md text-surface-600 dark:text-surface-300">
              I’d love to hear about your project. Send a message and I’ll get back to you as soon
              as I can.
            </p>
            <ul className="mt-6 space-y-3 text-surface-700 dark:text-surface-300">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-brand-600 dark:text-brand-400" aria-hidden="true" />
                <a href={`mailto:${profile.email}`} className="hover:underline">{profile.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-brand-600 dark:text-brand-400" aria-hidden="true" />
                {profile.location}
              </li>
            </ul>
          </motion.div>

          {/* Right: form */}
          <Card className="p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center py-8 text-center">
                <FaCheckCircle className="mb-4 text-5xl text-green-500" aria-hidden="true" />
                <h2 className="text-xl font-bold text-surface-900 dark:text-white">Message sent!</h2>
                <p className="mt-2 text-surface-600 dark:text-surface-300">
                  Thanks for reaching out — I’ll reply soon.
                </p>
                <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
                  Send another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  value={values.website}
                  onChange={update("website")}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <Field
                  label="Name"
                  value={values.name}
                  onChange={update("name")}
                  placeholder="Your name"
                  error={errors.name}
                  required
                />
                <Field
                  label="Email"
                  type="email"
                  value={values.email}
                  onChange={update("email")}
                  placeholder="you@example.com"
                  error={errors.email}
                  required
                />
                <Field
                  label="Message"
                  as="textarea"
                  rows={4}
                  value={values.message}
                  onChange={update("message")}
                  placeholder="Tell me about your project…"
                  error={errors.message}
                  required
                />
                {formError && (
                  <p className="text-sm text-red-600 dark:text-red-400" role="alert">{formError}</p>
                )}
                <Button type="submit" size="lg" className="w-full" loading={status === "submitting"}>
                  {status === "submitting" ? "Sending…" : "Send Message"}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </Section>
    </PageWrapper>
  );
};

export default Contact;
