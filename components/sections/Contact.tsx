"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { contact } from "@/content/portfolio";
import { SectionHeader } from "./Shell";

const contactLinks = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}`, external: false },
  { label: "GitHub", value: contact.githubLabel, href: contact.github, external: true },
  { label: "Website", value: contact.websiteLabel, href: contact.website, external: true },
  { label: "Location", value: contact.location, href: undefined, external: false },
];

const fieldClass =
  "mt-2 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand disabled:opacity-60";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "임동건",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
      );

      if (result.status === 200) {
        setSubmitStatus({ type: "success", message: "메시지가 전송되었습니다. 확인 후 연락드리겠습니다." });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus({ type: "error", message: "메시지 전송에 실패했습니다. 이메일로 직접 연락해 주세요." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-5xl px-6 py-24 sm:px-8 sm:py-32" aria-labelledby="contact-title">
      <SectionHeader
        eyebrow="Contact"
        title="함께 만들 것이 있다면"
        titleId="contact-title"
        desc="채용, 협업, 기술 자문 모두 환영합니다. 맥락과 기대하는 결과를 함께 보내주세요."
      />

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <ul className="grid h-fit gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200">
          {contactLinks.map((item) => (
            <li
              key={item.label}
              className="flex items-baseline justify-between gap-4 bg-white px-6 py-5"
            >
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
                {item.label}
              </span>
              {item.href ? (
                <a
                  href={item.href}
                  className="break-all text-right text-sm font-medium text-slate-900 transition-colors hover:text-brand"
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-right text-sm font-medium text-slate-900">{item.value}</span>
              )}
            </li>
          ))}
        </ul>

        <form onSubmit={handleSubmit} className="card p-7 sm:p-8">
          {submitStatus.type && (
            <div
              role="status"
              className={`mb-5 rounded-lg border px-4 py-3 text-sm form-status form-status--${submitStatus.type} ${
                submitStatus.type === "success"
                  ? "border-brand/30 bg-brand-soft text-slate-700"
                  : "border-red-200 bg-red-50 text-red-700"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <label className="block text-sm font-semibold text-slate-800">
            이름
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              placeholder="성함 또는 회사명"
              className={fieldClass}
            />
          </label>

          <label className="mt-5 block text-sm font-semibold text-slate-800">
            이메일
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              placeholder="example@email.com"
              className={fieldClass}
            />
          </label>

          <label className="mt-5 block text-sm font-semibold text-slate-800">
            메시지
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              rows={6}
              placeholder="역할, 프로젝트 주제, 궁금한 점을 남겨주세요."
              className={`${fieldClass} resize-y`}
            />
          </label>

          <button type="submit" disabled={isSubmitting} className="btn-primary mt-6 w-full disabled:opacity-60">
            {isSubmitting ? "전송 중" : "메시지 보내기"}
          </button>
        </form>
      </div>
    </section>
  );
}
