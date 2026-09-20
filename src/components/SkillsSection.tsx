import { useEffect, useRef } from "react";
import { skillRows } from "../data/portfolio";

function SkillPill({ name, accent }: { name: string; accent?: "pink" | "yellow" }) {
  const pinkStyle = {
    background: "rgba(244,114,182,0.1)",
    color: "rgba(244,114,182,0.85)",
    border: "1px solid rgba(244,114,182,0.15)",
  };
  const yellowStyle = {
    background: "rgba(251,191,36,0.08)",
    color: "rgba(251,191,36,0.75)",
    border: "1px solid rgba(251,191,36,0.12)",
  };
  const defaultStyle = {
    background: "rgba(255,255,255,0.04)",
    color: "rgba(255,255,255,0.5)",
    border: "1px solid rgba(255,255,255,0.07)",
  };

  const style = accent === "pink" ? pinkStyle : accent === "yellow" ? yellowStyle : defaultStyle;

  return (
    <span
      className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap flex-shrink-0"
      style={style}
    >
      {name}
    </span>
  );
}

function SkillRow({ skills, direction, speed = 30 }: {
  skills: typeof skillRows[0];
  direction: "left" | "right";
  speed?: number;
}) {
  const enabled = skills.filter((s) => s.enabled);
  const repeatCount = enabled.length < 7 ? 5 : 3;
  const repeated = Array.from({ length: repeatCount }, () => enabled).flat();

  return (
    <div className="overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}>
      <div
        className={direction === "left" ? "marquee-left" : "marquee-right"}
        style={{
          display: "flex",
          gap: "10px",
          width: "max-content",
          animationDuration: `${speed}s`,
        }}
      >
        {repeated.map((skill, i) => (
          <SkillPill key={`${skill.name}-${i}`} name={skill.name} accent={skill.accent} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const speeds = [32, 28, 34, 26, 30, 36];

  return (
    <section id="skills" className="py-8 md:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-14">
        <div ref={titleRef} className="scroll-reveal">
          <h2
            className="font-['Fraunces'] font-semibold mb-2 text-center"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "var(--foreground)" }}
          >
            Skills & Tools
          </h2>
          <p className="text-sm mb-3 text-center" style={{ color: "var(--muted-foreground)" }}>
            Tools and technologies I work with.
          </p>
          <div
            className="h-0.5 w-12 rounded-full mx-auto"
            style={{ background: "linear-gradient(to right, var(--pink), var(--yellow))" }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {skillRows.map((row, i) => (
          <SkillRow
            key={i}
            skills={row}
            direction={i % 2 === 0 ? "left" : "right"}
            speed={speeds[i]}
          />
        ))}
      </div>
    </section>
  );
}
