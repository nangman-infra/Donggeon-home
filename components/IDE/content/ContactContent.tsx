"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
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
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="font-mono text-sm">
      <div className="flex items-center gap-2 text-muted-foreground mb-6">
        <span className="line-numbers">1</span>
        <span className="text-accent">//</span>
        <span>contact.tsx</span>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="code-block">
          <div className="text-accent text-xs mb-2">EMAIL</div>
          <a href="mailto:gunni6112@gmail.com" className="text-primary hover:underline">
            gunni6112@gmail.com
          </a>
        </div>
        <div className="code-block">
          <div className="text-accent text-xs mb-2">GITHUB</div>
          <a
            href="https://github.com/whitejbb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            github.com/whitejbb
          </a>
        </div>
        <div className="code-block">
          <div className="text-accent text-xs mb-2">LINKEDIN</div>
          <a
            href="https://www.linkedin.com/in/%EB%8F%99%EA%B1%B4-%EC%9E%84-a574ab386/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Connect with me
          </a>
        </div>
        <div className="code-block">
          <div className="text-accent text-xs mb-2">BLOG</div>
          <a
            href="https://exit0.tistory.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            exit0.tistory.com
          </a>
        </div>
      </div>

      <div className="border border-border rounded p-4">
        <div className="text-accent text-xs mb-4">$ send-message</div>
        
        {status === "success" && (
          <div className="mb-4 p-3 bg-accent/10 border border-accent rounded text-accent text-xs">
            ✓ Message sent successfully!
          </div>
        )}
        
        {status === "error" && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500 rounded text-red-500 text-xs">
            ✗ Failed to send message. Please try again.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs text-muted-foreground mb-2">NAME</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-3 py-2 bg-muted border border-border rounded focus:outline-none focus:border-primary transition-colors"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label className="block text-xs text-muted-foreground mb-2">EMAIL</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-3 py-2 bg-muted border border-border rounded focus:outline-none focus:border-primary transition-colors"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label className="block text-xs text-muted-foreground mb-2">MESSAGE</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={4}
              className="w-full px-3 py-2 bg-muted border border-border rounded focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Your message..."
            />
          </div>
          
          <button
            type="submit"
            disabled={status === "sending"}
            className="terminal-button w-full"
          >
            {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
          </button>
        </form>
      </div>
    </div>
  );
}
