import { about, sectionHeaders } from "@/content/portfolio";
import { Section } from "./Shell";

export function About() {
  return (
    <Section id="about" labelledby="about-label" band wide>
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="eyebrow" id="about-label">
            {sectionHeaders.about.eyebrow}
          </p>
          <h2 className="mt-5 whitespace-pre-line text-2xl font-semibold leading-snug tracking-tight text-slate-900 sm:text-3xl">
            {about.heading}
          </h2>
        </div>
        <div className="lg:pt-2">
          <p className="text-base font-light leading-relaxed text-slate-600 sm:text-lg">{about.body}</p>

          <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-2">
            {about.capabilities.map((cap) => (
              <li key={cap.title} className="bg-white p-6 transition-colors duration-200 hover:bg-gray-50">
                <p className="font-mono text-sm font-semibold text-slate-900">{cap.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{cap.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
