import { useState, useEffect, useRef } from "react";
import { projects } from "../data/portfolio";

type Category = "web" | "ux" | "pm";

const CATEGORIES: { key: Category; label: string }[] = [
  { key: "web", label: "Web & Mobile Development" },
  { key: "ux", label: "UX / UI Design" },
  { key: "pm", label: "Product Management & Business Analysis" },
];

const PAGE_SIZE = 3;

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(12px)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 12px 40px rgba(244,114,182,0.1)" : "none",
        borderColor: hovered ? "rgba(244,114,182,0.18)" : "rgba(255,255,255,0.07)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image area */}
        <div className="h-[180px] overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500"
            />
          ) : (
            <div
              className="w-full h-full"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,105,180,0.12), rgba(255,210,80,0.08))",
              }}
            />
          )}
        </div>

      <div className="flex flex-col gap-3 p-6 flex-1">
        <div>
          <h3
            className="font-['Fraunces'] font-semibold text-base mb-1"
            style={{ color: "var(--foreground)" }}
          >
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="text-xs font-medium" style={{ color: "var(--pink)" }}>
              {project.subtitle}
            </p>
          )}
        </div>

        {project.description && (
          <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted-foreground)" }}>
            {project.description}
          </p>
        )}

        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-full text-xs"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  color: "var(--muted-foreground)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium mt-auto pt-1 transition-colors duration-200"
            style={{ color: "var(--muted-foreground)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--pink)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.09.682-.216.682-.482 0-.237-.009-.868-.014-1.703-2.782.603-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.912.832.09-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .269.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            GitHub
            <span
              className="transition-transform duration-200"
              style={{ transform: hovered ? "translateX(2px)" : "translateX(0)" }}
            >
              →
            </span>
          </a>
        )}
      </div>
    </div>
  );
}

function ComingSoon() {
  return (
    <div
      className="col-span-full flex flex-col items-center justify-center py-20 rounded-2xl"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px dashed rgba(255,255,255,0.1)",
      }}
    >
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
        style={{ background: "rgba(244,114,182,0.1)" }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(244,114,182,0.7)" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <p className="font-['Fraunces'] text-base mb-1" style={{ color: "var(--foreground)" }}>
        Coming Soon
      </p>
      <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
        More projects are on the way. Stay tuned!
      </p>
    </div>
  );
}

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("web");
  const [page, setPage] = useState(0);
  const [animKey, setAnimKey] = useState(0);
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

  const filtered = projects.filter((p) => p.enabled && p.category === activeCategory);
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  const switchCategory = (cat: Category) => {
    setActiveCategory(cat);
    setPage(0);
    setAnimKey((k) => k + 1);
  };

  const goPage = (dir: -1 | 1) => {
    setPage((p) => Math.max(0, Math.min(totalPages - 1, p + dir)));
    setAnimKey((k) => k + 1);
  };

  return (
    <section id="projects" className="py-8 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="scroll-reveal mb-14">
          <h2
            className="font-['Fraunces'] font-semibold mb-3 text-center"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "var(--foreground)" }}
          >
            Projects
          </h2>
          <div
            className="h-0.5 w-12 rounded-full mx-auto"
            style={{ background: "linear-gradient(to right, var(--pink), var(--yellow))" }}
          />
        </div>

        {/* Category filter */}
        <div
          className="flex flex-col md:flex-row w-fit max-w-full mx-auto rounded-xl p-1 mb-10"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => switchCategory(cat.key)}
              className="w-full md:w-auto px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                background: activeCategory === cat.key ? "rgba(244,114,182,0.15)" : "transparent",
                color: activeCategory === cat.key ? "var(--pink)" : "var(--muted-foreground)",
                border: activeCategory === cat.key ? "1px solid rgba(244,114,182,0.2)" : "1px solid transparent",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div
          key={animKey}
          className="category-in grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(min(300px, 100%), 1fr))",
            justifyContent: paginated.length < 3 ? "center" : "start",
          }}
        >
          {paginated.length === 0 ? (
            <ComingSoon />
          ) : (
            paginated.map((project, i) => (
              <ProjectCard key={`${project.title}-${i}`} project={project} />
            ))
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => goPage(-1)}
              disabled={page === 0}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: page === 0 ? "rgba(255,255,255,0.2)" : "var(--foreground)",
                cursor: page === 0 ? "not-allowed" : "pointer",
              }}
            >
              ←
            </button>
            <button
              onClick={() => goPage(1)}
              disabled={page >= totalPages - 1}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: page >= totalPages - 1 ? "rgba(255,255,255,0.2)" : "var(--foreground)",
                cursor: page >= totalPages - 1 ? "not-allowed" : "pointer",
              }}
            >
              →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
