import emailjs from "@emailjs/browser";
import { BriefcaseBusiness, GitBranch, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

const contactLinks = (profile) => [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: BriefcaseBusiness, label: "LinkedIn", href: profile.links.linkedin },
  { icon: GitBranch, label: "GitHub", href: profile.links.github },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone}` },
];

function Contact({ profile }) {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("Add your EmailJS keys in .env to enable direct sending.");
      return;
    }

    setSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      form.reset();
      setStatus("Message sent. Thank you for reaching out.");
    } catch {
      setStatus("Message could not be sent. Please email me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div>
        <p className="section-kicker">Contact</p>
        <h2>Let&apos;s build something useful.</h2>
        <p>
          Reach out for internships, full-time roles, freelance work, or
          collaboration on React and backend projects.
        </p>

        <div className="contact-links">
          {contactLinks(profile).map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
              <item.icon size={19} />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="from_name" type="text" placeholder="Your name" required />
        </label>
        <label>
          Email
          <input
            name="reply_to"
            type="email"
            placeholder="you@example.com"
            required
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            rows="5"
            placeholder="Tell me about the opportunity"
            required
          />
        </label>
        <button className="btn primary" type="submit" disabled={sending}>
          <Send size={18} />
          {sending ? "Sending..." : "Send message"}
        </button>
        {status && <p className="form-status">{status}</p>}
      </form>
    </section>
  );
}

export default Contact;
