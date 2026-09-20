import { useEffect, useRef } from "react";
import { experiences } from "../data/portfolio";

function ExperienceCard({ exp, delay }: { exp: typeof experiences[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="scroll-reveal group relative rounded-2xl p-6 md:p-8 transition-all duration-300"
      style={{
        transitionDelay: `${delay}ms`,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(12px)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.05)";
        e.currentTarget.style.borderColor = "rgba(244,114,182,0.15)";
        e.currentTarget.style.boxShadow = "0 4px 32px rgba(244,114,182,0.06)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.03)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Pink left accent bar */}
      <div
        className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full"
        style={{ background: "linear-gradient(to bottom, var(--pink), rgba(244,114,182,0.1))" }}
      />

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
        <div>
          <h3
            className="font-['Fraunces'] font-semibold mb-1"
            style={{ fontSize: "1.15rem", color: "var(--foreground)" }}
          >
            {exp.title}
          </h3>
          <p
            className="text-sm font-medium"
            style={{ color: "var(--pink)" }}
          >
            {exp.company}
          </p>
          {/* Duration on mobile */}
          <p
            className="md:hidden text-xs mt-1"
            style={{ color: "var(--muted-foreground)" }}
          >
            {exp.duration}
          </p>
        </div>
        {/* Duration on desktop */}
        <span
          className="hidden md:inline-flex items-center px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap self-start"
          style={{
            background: "rgba(251,191,36,0.08)",
            color: "rgba(251,191,36,0.7)",
            border: "1px solid rgba(251,191,36,0.12)",
          }}
        >
          {exp.duration}
        </span>
      </div>

      <ul className="flex flex-col gap-2">
        {exp.responsibilities.map((r, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
            <span
              className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: "rgba(244,114,182,0.5)" }}
            />
            {r}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ExperienceSection() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" className="py-8 md:py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={titleRef} className="scroll-reveal mb-14 text-center">
          <h2
            className="font-['Fraunces'] font-semibold mb-3"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "var(--foreground)" }}
          >
            Experience
          </h2>
          <div
            className="h-0.5 w-12 rounded-full mx-auto"
            style={{ background: "linear-gradient(to right, var(--pink), var(--yellow))" }}
          />
        </div>

        <div className="flex flex-col gap-6">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
