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

describe("portfolio pages", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
    vi.unstubAllGlobals();
  });

  it("renders the home page case studies and core calls to action", () => {
    render(React.createElement(Home));

    expect(screen.getAllByText("Budgetly").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Federated Learning").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Dev Card Hunter").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("GitHub").length).toBeGreaterThanOrEqual(3);
    expect(screen.getAllByText("AWS EC2").length).toBeGreaterThanOrEqual(1);
  });

  it("renders about and resume evidence sections", () => {
    const { rerender } = render(React.createElement(AboutPage));

    expect(screen.getByText("Cloud Platforms")).toBeInTheDocument();
    expect(screen.getByText("Container & DevOps")).toBeInTheDocument();
    expect(screen.getAllByText("Model Evaluation").length).toBeGreaterThanOrEqual(1);

    rerender(React.createElement(ResumePage));

    expect(screen.getByText("Technical Skills")).toBeInTheDocument();
    expect(screen.getByText("AWS Certified Cloud Practitioner")).toBeInTheDocument();
    expect(screen.getByText("NAVER Cloud Platform Certified Associate")).toBeInTheDocument();
  });

  it("renders the full projects index", () => {
    render(React.createElement(ProjectsPage));

    expect(screen.getAllByText("Budgetly").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("Drone Delivery System")).toBeInTheDocument();
    expect(screen.getByText("Heterogeneous Federated Learning Testbed")).toBeInTheDocument();
    expect(screen.getAllByText("Parrot Olympe SDK").length).toBeGreaterThanOrEqual(1);
  });

  it("submits the contact form successfully", async () => {
    vi.mocked(emailjs.send).mockResolvedValueOnce({ status: 200 });

    const { container } = render(React.createElement(ContactPage));

    const name = container.querySelector<HTMLInputElement>('input[name="name"]');
    const email = container.querySelector<HTMLInputElement>('input[name="email"]');
    const message = container.querySelector<HTMLTextAreaElement>('textarea[name="message"]');

    expect(name).not.toBeNull();
    expect(email).not.toBeNull();
    expect(message).not.toBeNull();

    fireEvent.change(name!, { target: { value: "Donggeon" } });
    fireEvent.change(email!, { target: { value: "donggeon@example.com" } });
    fireEvent.change(message!, { target: { value: "hello" } });
    fireEvent.click(container.querySelector<HTMLButtonElement>('button[type="submit"]')!);

    await waitFor(() => {
      expect(name).toHaveValue("");
      expect(email).toHaveValue("");
      expect(message).toHaveValue("");
    });
  });

  it("renders the contact form error state", async () => {
    vi.mocked(emailjs.send).mockRejectedValueOnce(new Error("mail failed"));

    const { container } = render(React.createElement(ContactPage));
    const name = container.querySelector<HTMLInputElement>('input[name="name"]');
    const email = container.querySelector<HTMLInputElement>('input[name="email"]');
    const message = container.querySelector<HTMLTextAreaElement>('textarea[name="message"]');

    fireEvent.change(name!, { target: { value: "Donggeon" } });
    fireEvent.change(email!, { target: { value: "donggeon@example.com" } });
    fireEvent.change(message!, { target: { value: "hello" } });
    fireEvent.click(container.querySelector<HTMLButtonElement>('button[type="submit"]')!);

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
    fireEvent.click(container.querySelector("button")!);
    expect(container.querySelectorAll('a[href="/projects"]').length).toBeGreaterThanOrEqual(1);

    cleanup();
    render(React.createElement(Footer));
    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
  });
});
