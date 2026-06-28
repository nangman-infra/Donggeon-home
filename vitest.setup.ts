import "@testing-library/jest-dom/vitest";
import React from "react";
import { vi } from "vitest";

vi.mock("framer-motion", () => {
  const cache = new Map<string, unknown>();

  const createMotionComponent = (tag: string) => {
    const MotionComponent = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
      ({ children, ...props }, ref) => {
        const domProps = { ...props } as React.HTMLAttributes<HTMLElement> & Record<string, unknown>;
        delete domProps.animate;
        delete domProps.initial;
        delete domProps.transition;
        delete domProps.variants;
        delete domProps.viewport;
        delete domProps.whileInView;

        return React.createElement(tag, { ...domProps, ref }, children);
      }
    );
    MotionComponent.displayName = `MockMotion(${tag})`;
    return MotionComponent;
  };

  return {
    motion: new Proxy(
      {},
      {
        get: (_, tag) => {
          const key = String(tag);
          if (!cache.has(key)) cache.set(key, createMotionComponent(key));
          return cache.get(key);
        },
      }
    ),
    useScroll: () => ({ scrollYProgress: 0 }),
    useTransform: (_value: unknown, _input: unknown, output: unknown[]) => output[0],
    useReducedMotion: () => false,
  };
});

vi.mock("next/image", () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => React.createElement("img", props),
}));

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; children: React.ReactNode }) =>
    React.createElement("a", { href, ...props }, children),
}));

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

vi.mock("@emailjs/browser", () => ({
  default: {
    send: vi.fn().mockResolvedValue({ status: 200 }),
  },
}));
