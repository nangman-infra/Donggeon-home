"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactLinks = [
  {
    label: "Email",
    value: "gunni6112@gmail.com",
    href: "mailto:gunni6112@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/whitejbb",
    href: "https://github.com/whitejbb",
  },
  {
    label: "LinkedIn",
    value: "프로필 보기",
    href: "https://www.linkedin.com/in/%EB%8F%99%EA%B1%B4-%EC%9E%84-a574ab386/",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
        setSubmitStatus({
          type: "success",
          message: "메시지가 전송되었습니다. 확인 후 연락드리겠습니다.",
        });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus({
        type: "error",
        message: "메시지 전송에 실패했습니다. 이메일로 직접 연락해 주세요.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="subpage-shell">
      <section className="subpage-hero">
        <p className="section-kicker">Contact</p>
        <h1>AI 제품과 운영 문제를 함께 다루는 팀과 이야기하고 싶습니다.</h1>
        <p>
          Applied AI, FDE, AX, AI Product Engineering 역할에 관심이 있습니다. 프로젝트 협업, 채용, 기술
          대화 모두 편하게 연락 주세요.
        </p>
      </section>

      <section className="contact-layout">
        <div className="contact-links">
          {contactLinks.map((item) => (
            <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="contact-card">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </a>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="section-heading">
            <p className="section-kicker">Message</p>
            <h2>짧게 남겨주시면 됩니다.</h2>
          </div>

          {submitStatus.type && (
            <div className={`form-status form-status--${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}

          <label>
            이름
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              placeholder="성함 또는 회사명"
            />
          </label>

          <label>
            이메일
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              placeholder="example@email.com"
            />
          </label>

          <label>
            메시지
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              rows={6}
              placeholder="역할, 협업 주제, 궁금한 점을 남겨주세요."
            />
          </label>

          <button type="submit" disabled={isSubmitting} className="button-primary">
            {isSubmitting ? "전송 중" : "메시지 보내기"}
          </button>
        </form>
      </section>
    </div>
  );
}
