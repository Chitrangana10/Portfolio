import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Check,
  Copy,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  Phone,
} from "@phosphor-icons/react";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const channels = [
  {
    id: "email",
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: EnvelopeSimple,
    copyable: true,
  },
  {
    id: "phone",
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    Icon: Phone,
    copyable: true,
  },
  {
    id: "github",
    label: "GitHub",
    value: profile.githubHandle,
    href: profile.github,
    Icon: GithubLogo,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: profile.linkedinHandle,
    href: profile.linkedin,
    Icon: LinkedinLogo,
  },
];

function Field({ id, label, hint, error, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="label text-graphite-700">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="font-mono text-[11px] text-clay">
          {error}
        </p>
      ) : hint ? (
        <p className="font-mono text-[11px] text-graphite-400">{hint}</p>
      ) : null}
    </div>
  );
}

const inputClass =
  "w-full rounded-nest border border-rule-soft bg-paper px-4 py-3 text-sm text-graphite-950 shadow-well outline-none transition-all duration-500 ease-fluid placeholder:text-graphite-300 focus:border-pine/40 focus:bg-paper-raised focus:ring-4 focus:ring-pine/10";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [copied, setCopied] = useState("");

  const update = (key) => (event) => {
    setForm((current) => ({ ...current, [key]: event.target.value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (form.name.trim().length < 2) next.name = "Tell me who you are — two characters minimum.";
    if (!EMAIL_PATTERN.test(form.email.trim()))
      next.email = "That address does not look reachable.";
    if (form.message.trim().length < 12)
      next.message = "A little more context, please — at least 12 characters.";
    return next;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name.trim()}`);
    const body = encodeURIComponent(`${form.message.trim()}\n\n— ${form.name.trim()}\n${form.email.trim()}`);

    window.setTimeout(() => {
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
    }, 550);
  };

  const copy = async (id, value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(id);
      window.setTimeout(() => setCopied(""), 1800);
    } catch {
      setCopied("");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <SectionHeading
        index="06"
        label="Contact"
        title="Open to backend and AI/ML internships."
        note="Fastest route is email. The form below composes it in your own mail client — nothing is stored on this site."
      />

      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="ruled border-y border-rule">
          {channels.map(({ id, label, value, href, Icon, copyable }) => (
            <div key={id} className="group flex items-center gap-4 py-5">
              <Icon size={17} weight="duotone" className="shrink-0 text-pine" />
              <div className="min-w-0 flex-1">
                <p className="label">{label}</p>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="mt-1 block truncate font-mono text-sm text-graphite-950 underline decoration-rule underline-offset-4 transition-colors duration-500 ease-fluid hover:text-pine hover:decoration-pine"
                >
                  {value}
                </a>
              </div>
              {copyable ? (
                <button
                  type="button"
                  onClick={() => copy(id, value)}
                  aria-label={`Copy ${label.toLowerCase()}`}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-rule-soft bg-paper-raised text-graphite-500 shadow-inset transition-all duration-500 ease-fluid hover:border-rule hover:text-graphite-950 active:scale-[0.94]"
                >
                  {copied === id ? (
                    <Check size={13} weight="bold" className="text-pine" />
                  ) : (
                    <Copy size={13} weight="bold" />
                  )}
                </button>
              ) : (
                <ArrowUpRight size={14} weight="bold" className="shrink-0 text-graphite-300 transition-transform duration-500 ease-fluid group-hover:-translate-y-px group-hover:translate-x-px" />
              )}
            </div>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          onSubmit={handleSubmit}
          noValidate
          className="shell"
        >
          <div className="flex flex-col gap-5 rounded-core border border-white/70 bg-paper-raised p-6 shadow-core md:p-8">
          <Field id="name" label="Name" error={errors.name}>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={update("name")}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              placeholder="Your name"
              className={inputClass}
            />
          </Field>

          <Field id="email" label="Email" error={errors.email}>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={update("email")}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              placeholder="you@company.com"
              className={inputClass}
            />
          </Field>

          <Field
            id="message"
            label="Message"
            error={errors.message}
            hint={
              form.message.trim().length === 0
                ? "Role, team, timeline — whatever is useful."
                : `${form.message.trim().length} characters`
            }
          >
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={update("message")}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              placeholder="What are you building?"
              className={`${inputClass} resize-none`}
            />
          </Field>

          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-solid btn-nib-host mt-1 w-full justify-between pr-1.5 disabled:cursor-wait"
          >
            {status === "sending" ? (
              <span className="flex flex-1 items-center justify-center gap-2 py-1.5">
                <span className="h-1.5 w-1.5 animate-breathe rounded-full bg-paper" />
                Opening your mail client
              </span>
            ) : status === "sent" ? (
              <span className="flex flex-1 items-center justify-center gap-2 py-1.5">
                <Check size={15} weight="bold" />
                Draft ready
              </span>
            ) : (
              <>
                Compose email
                <span className="btn-nib" aria-hidden="true">
                  <ArrowUpRight size={14} weight="bold" />
                </span>
              </>
            )}
          </button>

          {status === "sent" ? (
            <p role="status" className="text-center font-mono text-[11px] text-graphite-500">
              Nothing came through? Write to{" "}
              <a href={`mailto:${profile.email}`} className="text-pine underline underline-offset-4">
                {profile.email}
              </a>
            </p>
          ) : null}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
