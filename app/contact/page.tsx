"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

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
          to_name: "동건",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );

      if (result.status === 200) {
        setSubmitStatus({
          type: "success",
          message: "메시지가 성공적으로 전송되었습니다! 곧 연락드리겠습니다.",
        });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus({
        type: "error",
        message: "메시지 전송에 실패했습니다. 다시 시도해주세요.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-accent font-mono">$</span> contact
          </h1>
          <p className="text-xl text-muted-foreground mb-12">Get in touch</p>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <a
              href="mailto:gunni6112@gmail.com"
              className="p-6 bg-muted/30 border border-border rounded-xl hover:border-primary transition-colors group"
            >
              <div className="text-2xl mb-3">✉️</div>
              <div className="text-xs text-muted-foreground font-mono mb-2">EMAIL</div>
              <div className="text-sm font-mono group-hover:text-primary transition-colors">
                gunni6112@gmail.com
              </div>
            </a>

            <a
              href="https://github.com/whitejbb"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-muted/30 border border-border rounded-xl hover:border-primary transition-colors group"
            >
              <div className="text-2xl mb-3">💻</div>
              <div className="text-xs text-muted-foreground font-mono mb-2">GITHUB</div>
              <div className="text-sm font-mono group-hover:text-primary transition-colors">
                github.com/whitejbb
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/%EB%8F%99%EA%B1%B4-%EC%9E%84-a574ab386/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-muted/30 border border-border rounded-xl hover:border-primary transition-colors group"
            >
              <div className="text-2xl mb-3">🔗</div>
              <div className="text-xs text-muted-foreground font-mono mb-2">LINKEDIN</div>
              <div className="text-sm font-mono group-hover:text-primary transition-colors">
                Connect with me
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="p-8 bg-muted/30 border border-border rounded-xl">
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-accent font-mono">$</span> send_message
            </h2>

            {submitStatus.type && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-500/10 border border-green-500/50 text-green-500"
                    : "bg-red-500/10 border border-red-500/50 text-red-500"
                }`}
              >
                <p className="font-mono text-sm">{submitStatus.message}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-muted-foreground mb-2">
                  name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors disabled:opacity-50 font-mono text-sm"
                  placeholder="홍길동"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-mono text-muted-foreground mb-2">
                  email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors disabled:opacity-50 font-mono text-sm"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-mono text-muted-foreground mb-2">
                  message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none disabled:opacity-50 font-mono text-sm"
                  placeholder="메시지를 입력하세요..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-mono text-sm"
              >
                {isSubmitting ? "sending..." : "send"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
