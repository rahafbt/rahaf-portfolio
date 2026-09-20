export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-24 pb-8 overflow-hidden">
      {/* Glow behind CTA */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "600px",
          height: "200px",
          background: "radial-gradient(ellipse, rgba(244,114,182,0.07) 0%, rgba(251,191,36,0.04) 40%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2
          className="font-['Fraunces'] font-semibold mb-4"
          style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "var(--foreground)" }}
        >
          Let's build something great together.
        </h2>
        <p
          className="text-sm leading-relaxed mb-10 max-w-lg mx-auto"
          style={{ color: "var(--muted-foreground)" }}
        >
          I'm always open to new opportunities, collaborations, and interesting projects.
        </p>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <a
            href="https://www.linkedin.com/in/rahaf-bin-taleb-b4792028b/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.04)",
              color: "var(--foreground)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>

          <a
            href="mailto:Rahaf.BinTaleb@gmail.com"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200"
            style={{
              background: "rgba(244,114,182,0.12)",
              color: "var(--pink)",
              border: "1px solid rgba(244,114,182,0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(244,114,182,0.22)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(244,114,182,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(244,114,182,0.12)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Email Me
          </a>
        </div>

        {/* Bottom meta row */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
            © 2026 Rahaf Bin Taleb
          </p>
          <button
            onClick={scrollToTop}
            className="text-xs flex items-center gap-1.5 transition-colors duration-200"
            style={{ color: "var(--muted-foreground)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--pink)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
