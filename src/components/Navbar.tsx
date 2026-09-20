import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(14,16,21,0.85)"
          : "rgba(14,16,21,0.4)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a
          href="#home"
          onClick={(e) => handleNav(e, "#home")}
          className="font-['Fraunces'] text-lg font-semibold tracking-tight"
        >
          <span style={{ color: "var(--pink)" }}>R</span>
          <span style={{ color: "var(--foreground)" }}>.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: "var(--muted-foreground)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--foreground)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--muted-foreground)")
              }
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:Rahaf.BinTaleb@gmail.com"
            className="text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-200"
            style={{
              background: "rgba(244,114,182,0.12)",
              color: "var(--pink)",
              border: "1px solid rgba(244,114,182,0.25)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(244,114,182,0.22)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(244,114,182,0.12)";
            }}
          >
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className="block h-0.5 w-6 rounded transition-all duration-300"
            style={{
              background: "var(--foreground)",
              transform: open ? "rotate(45deg) translateY(8px)" : "",
            }}
          />
          <span
            className="block h-0.5 w-6 rounded transition-all duration-300"
            style={{
              background: "var(--foreground)",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block h-0.5 w-6 rounded transition-all duration-300"
            style={{
              background: "var(--foreground)",
              transform: open ? "rotate(-45deg) translateY(-8px)" : "",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "260px" : "0" }}
      >
        <div
          className="px-6 pb-4 flex flex-col gap-1"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="py-3 text-sm font-medium"
              style={{
                color: "var(--muted-foreground)",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:rahaf@example.com"
            className="mt-2 text-center text-sm font-medium py-2.5 rounded-full"
            style={{
              background: "rgba(244,114,182,0.12)",
              color: "var(--pink)",
              border: "1px solid rgba(244,114,182,0.25)",
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
