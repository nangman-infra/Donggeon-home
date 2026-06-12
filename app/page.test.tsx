import React from "react";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import emailjs from "@emailjs/browser";

import AboutPage from "@/app/about/page";
import BlogPage from "@/app/blog/page";
import ContactPage from "@/app/contact/page";
import Home from "@/app/page";
import ProjectsPage from "@/app/projects/page";
import ResumePage from "@/app/resume/page";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

const getRequiredElement = <T extends Element>(container: HTMLElement, selector: string): T => {
  const element = container.querySelector<T>(selector);

  if (element === null) {
    throw new Error(`Expected element matching selector "${selector}" to exist.`);
  }

  return element;
};

describe("portfolio pages", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
    vi.unstubAllGlobals();
  });

  it("renders the home page case studies and core calls to action", () => {
    render(React.createElement(Home));

    expect(screen.getAllByText("Orbit").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Enterprise RAG Platform").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("K8s Survival Camp").length).toBeGreaterThanOrEqual(1);
    expect(document.querySelector('a[href="#systems"]')).not.toBeNull();
    expect(document.querySelector('a[href="mailto:gunni6112@gmail.com"]')).not.toBeNull();
  });

  it("renders about and resume evidence sections", () => {
    const { rerender } = render(React.createElement(AboutPage));

    expect(screen.getByText("AI Product")).toBeInTheDocument();
    expect(screen.getByText("Infrastructure")).toBeInTheDocument();
    expect(screen.getAllByText("Model Evaluation").length).toBeGreaterThanOrEqual(1);

    rerender(React.createElement(ResumePage));

    expect(screen.getByText("Technical Skills")).toBeInTheDocument();
    expect(screen.getByText("AWS Certified Cloud Practitioner")).toBeInTheDocument();
    expect(screen.getByText("NAVER Cloud Platform Certified Associate")).toBeInTheDocument();
  });

  it("renders the full projects index", () => {
    render(React.createElement(ProjectsPage));

    expect(screen.getAllByText("Orbit").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("Enterprise RAG Platform")).toBeInTheDocument();
    expect(screen.getByText("K8s Survival Camp")).toBeInTheDocument();
    expect(screen.getAllByText("Qdrant").length).toBeGreaterThanOrEqual(1);
  });

  it("submits the contact form successfully", async () => {
    vi.mocked(emailjs.send).mockResolvedValueOnce({ status: 200 });

    const { container } = render(React.createElement(ContactPage));

    const name = getRequiredElement<HTMLInputElement>(container, 'input[name="name"]');
    const email = getRequiredElement<HTMLInputElement>(container, 'input[name="email"]');
    const message = getRequiredElement<HTMLTextAreaElement>(container, 'textarea[name="message"]');
    const submitButton = getRequiredElement<HTMLButtonElement>(container, 'button[type="submit"]');

    fireEvent.change(name, { target: { value: "Donggeon" } });
    fireEvent.change(email, { target: { value: "donggeon@example.com" } });
    fireEvent.change(message, { target: { value: "hello" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(name).toHaveValue("");
      expect(email).toHaveValue("");
      expect(message).toHaveValue("");
    });
  });

  it("renders the contact form error state", async () => {
    vi.mocked(emailjs.send).mockRejectedValueOnce(new Error("mail failed"));

    const { container } = render(React.createElement(ContactPage));
    const name = getRequiredElement<HTMLInputElement>(container, 'input[name="name"]');
    const email = getRequiredElement<HTMLInputElement>(container, 'input[name="email"]');
    const message = getRequiredElement<HTMLTextAreaElement>(container, 'textarea[name="message"]');
    const submitButton = getRequiredElement<HTMLButtonElement>(container, 'button[type="submit"]');

    fireEvent.change(name, { target: { value: "Donggeon" } });
    fireEvent.change(email, { target: { value: "donggeon@example.com" } });
    fireEvent.change(message, { target: { value: "hello" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(container.querySelector(".form-status--error")).not.toBeNull();
    });
  });

  it("renders blog, header, and footer navigation surfaces", () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ status: "ok", items: [] }),
      }),
    );

    const blogRender = render(React.createElement(BlogPage));

    expect(screen.getByRole("link", { name: /Tistory/i })).toHaveAttribute("href", "https://exit0.tistory.com");

    blogRender.unmount();
    const { container } = render(React.createElement(Header));
    expect(container.querySelector('a[href="/"]')).not.toBeNull();
    fireEvent.click(getRequiredElement<HTMLButtonElement>(container, "button"));
    expect(container.querySelectorAll('a[href="/#systems"]').length).toBeGreaterThanOrEqual(1);

    cleanup();
    render(React.createElement(Footer));
    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
  });
});
