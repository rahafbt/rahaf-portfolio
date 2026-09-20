export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "5rem" }}
    >
      {/* Background glow blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "10%",
          left: "-10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(244,114,182,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "10%",
          right: "-5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(251,191,36,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-16 w-full py-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Text block */}
          <div className="flex-1 flex flex-col gap-6">
            <div
              className="fade-in-up fade-in-up-delay-1 inline-flex items-center gap-2 self-start px-3 py-1 rounded-full text-xs font-medium tracking-wide"
              style={{
                background: "rgba(244,114,182,0.1)",
                color: "var(--pink)",
                border: "1px solid rgba(244,114,182,0.2)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--pink)" }}
              />
              Available for opportunities
            </div>

            <h1
              className="fade-in-up fade-in-up-delay-2 font-['Fraunces'] font-semibold leading-tight"
              style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", color: "var(--foreground)" }}
            >
              Rahaf{" "}
              <span style={{ color: "var(--pink)" }}>Bin Taleb</span>
            </h1>

            <p
              className="fade-in-up fade-in-up-delay-3 font-['Outfit'] font-light leading-relaxed max-w-xl"
              style={{ color: "var(--muted-foreground)", fontSize: "1rem" }}
            >
              Software Engineer with First-Class Honors, passionate about product management, 
              business analysis, and front-end development. I enjoy turning ideas and user 
              needs into clear, practical digital solutions.
            </p>

            <div className="fade-in-up fade-in-up-delay-4 flex flex-wrap gap-3">
              <a
                href="mailto:rahaf.binTaleb@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-200"
                style={{
                  background: "var(--pink)",
                  color: "#0e1015",
                  boxShadow: "0 0 20px rgba(244,114,182,0.25)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 32px rgba(244,114,182,0.45)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(244,114,182,0.25)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Contact Me
              </a>
              <a
                href="/assets/cv/Rahaf Bin Taleb_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  color: "var(--foreground)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.09)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                View CV
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Abstract illustration */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="float-anim fade-in-up fade-in-up-delay-2" style={{ width: "min(420px, 90vw)" }}>
              <HeroIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroIllustration() {
  return (
    <svg viewBox="0 0 440 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <defs>
        <filter id="glow-a-pink" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="glow-a-yellow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── Background subtle dot grid ── */}
      {[0,1,2,3,4,5].map(row => [0,1,2,3,4,5,6].map(col => (
        <circle key={`${row}-${col}`} cx={10 + col*60} cy={20 + row*60} r="1" fill="rgba(255,255,255,0.04)" />
      )))}

      {/* ── Thin connecting lines (background layer) ── */}
      {/* Flow path: lower-left → center → upper-right */}
      <path d="M 80 310 Q 180 260 260 180" stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="5 4" />
      {/* Control handle tether lines */}
      <line x1="130" y1="100" x2="165" y2="130" stroke="rgba(244,114,182,0.2)" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="358" y1="282" x2="338" y2="258" stroke="rgba(244,114,182,0.2)" strokeWidth="1" strokeDasharray="3 3" />
      {/* Flowchart connectors */}
      <line x1="54" y1="195" x2="54" y2="218" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <line x1="54" y1="238" x2="54" y2="258" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <line x1="54" y1="278" x2="54" y2="298" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <line x1="72" y1="268" x2="88" y2="268" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

      {/* ── MAIN PRODUCT SCREEN ── */}
      <rect x="160" y="80" width="220" height="190" rx="14" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      {/* Top chrome bar */}
      <rect x="160" y="80" width="220" height="28" rx="14" fill="rgba(255,255,255,0.03)" />
      <rect x="160" y="94" width="220" height="14" rx="0" fill="rgba(255,255,255,0.03)" />
      <circle cx="178" cy="94" r="4" fill="rgba(244,114,182,0.5)" />
      <circle cx="192" cy="94" r="4" fill="rgba(251,191,36,0.35)" />
      <circle cx="206" cy="94" r="4" fill="rgba(255,255,255,0.12)" />
      {/* URL bar */}
      <rect x="222" y="87" width="120" height="14" rx="7" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <rect x="230" y="92" width="48" height="3" rx="1.5" fill="rgba(244,114,182,0.3)" />
      {/* Nav strip */}
      <rect x="168" y="116" width="204" height="20" rx="0" fill="rgba(255,255,255,0.02)" />
      <rect x="176" y="122" width="28" height="4" rx="2" fill="rgba(244,114,182,0.45)" />
      <rect x="212" y="122" width="22" height="4" rx="2" fill="rgba(255,255,255,0.12)" />
      <rect x="242" y="122" width="28" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
      <rect x="278" y="122" width="22" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
      <rect x="340" y="119" width="18" height="10" rx="5" fill="rgba(244,114,182,0.2)" stroke="rgba(244,114,182,0.3)" strokeWidth="0.5" />
      {/* Hero content area */}
      <rect x="168" y="142" width="100" height="10" rx="5" fill="rgba(255,255,255,0.18)" />
      <rect x="168" y="158" width="74" height="6" rx="3" fill="rgba(255,255,255,0.09)" />
      <rect x="168" y="170" width="86" height="6" rx="3" fill="rgba(255,255,255,0.07)" />
      <rect x="168" y="182" width="60" height="6" rx="3" fill="rgba(255,255,255,0.05)" />
      <rect x="168" y="196" width="48" height="18" rx="9" fill="rgba(244,114,182,0.2)" stroke="rgba(244,114,182,0.35)" strokeWidth="1" />
      <rect x="175" y="202" width="28" height="4" rx="2" fill="rgba(244,114,182,0.6)" />
      <rect x="224" y="196" width="40" height="18" rx="9" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <rect x="231" y="202" width="24" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
      {/* Right side image placeholder */}
      <rect x="280" y="142" width="92" height="82" rx="8" fill="rgba(251,191,36,0.04)" stroke="rgba(251,191,36,0.1)" strokeWidth="1" />
      {/* Abstract shape inside */}
      <circle cx="326" cy="174" r="18" fill="rgba(251,191,36,0.07)" stroke="rgba(251,191,36,0.15)" strokeWidth="1" />
      <circle cx="326" cy="174" r="10" fill="rgba(251,191,36,0.1)" />
      <circle cx="326" cy="174" r="4" fill="rgba(251,191,36,0.4)" />
      {/* Bottom stat strip */}
      <rect x="168" y="232" width="204" height="28" rx="0" fill="rgba(255,255,255,0.02)" />
      <rect x="176" y="239" width="32" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
      <rect x="176" y="247" width="20" height="3" rx="1.5" fill="rgba(244,114,182,0.3)" />
      <rect x="228" y="239" width="32" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
      <rect x="228" y="247" width="24" height="3" rx="1.5" fill="rgba(251,191,36,0.3)" />
      <rect x="280" y="239" width="32" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
      <rect x="280" y="247" width="18" height="3" rx="1.5" fill="rgba(255,255,255,0.15)" />

      {/* ── CONTROL HANDLES (selection handles) ── */}
      {/* Top-left handle */}
      <circle cx="160" cy="80" r="7" fill="rgba(14,16,21,0.95)" stroke="rgba(244,114,182,0.7)" strokeWidth="1.5" filter="url(#glow-a-pink)" />
      <circle cx="160" cy="80" r="3" fill="rgba(244,114,182,0.8)" />
      {/* Bottom-right handle */}
      <circle cx="380" cy="270" r="7" fill="rgba(14,16,21,0.95)" stroke="rgba(244,114,182,0.7)" strokeWidth="1.5" filter="url(#glow-a-pink)" />
      <circle cx="380" cy="270" r="3" fill="rgba(244,114,182,0.8)" />
      {/* Dashed selection border */}
      <rect x="152" y="72" width="236" height="206" rx="16" fill="none" stroke="rgba(244,114,182,0.2)" strokeWidth="1" strokeDasharray="6 4" />

      {/* ── CODE CARD (upper-left) ── */}
      <rect x="18" y="48" width="130" height="120" rx="12" fill="rgba(14,16,21,0.88)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      {/* code card header */}
      <rect x="18" y="48" width="130" height="22" rx="12" fill="rgba(255,255,255,0.03)" />
      <rect x="18" y="58" width="130" height="12" rx="0" fill="rgba(255,255,255,0.03)" />
      <circle cx="30" cy="59" r="3.5" fill="rgba(244,114,182,0.45)" />
      <circle cx="40" cy="59" r="3.5" fill="rgba(251,191,36,0.3)" />
      <circle cx="50" cy="59" r="3.5" fill="rgba(255,255,255,0.1)" />
      <rect x="62" y="56" width="76" height="8" rx="4" fill="rgba(255,255,255,0.04)" />
      <rect x="66" y="59" width="32" height="2.5" rx="1.5" fill="rgba(255,255,255,0.12)" />
      {/* code lines */}
      <text x="26" y="88" fontFamily="monospace" fontSize="8" fill="rgba(251,191,36,0.6)">{"<section>"}</text>
      <text x="32" y="100" fontFamily="monospace" fontSize="8" fill="rgba(255,255,255,0.3)">{"  <div>"}</text>
      <text x="38" y="111" fontFamily="monospace" fontSize="7.5" fill="rgba(244,114,182,0.55)">{"    <button>"}</text>
      <text x="38" y="122" fontFamily="monospace" fontSize="7.5" fill="rgba(255,255,255,0.2)">{"    </>"}</text>
      <text x="32" y="133" fontFamily="monospace" fontSize="8" fill="rgba(255,255,255,0.15)">{"  </div>"}</text>
      <text x="26" y="144" fontFamily="monospace" fontSize="8" fill="rgba(251,191,36,0.35)">{"</section>"}</text>
      {/* cursor blink rect */}
      <rect x="74" y="138" width="5" height="8" rx="1" fill="rgba(244,114,182,0.5)" />

      {/* ── WIREFRAME CARD (lower-right) ── */}
      <rect x="310" y="298" width="122" height="88" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
      <rect x="320" y="308" width="60" height="5" rx="2.5" fill="rgba(255,255,255,0.14)" />
      <rect x="318" y="320" width="104" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3 2" />
      {/* wireframe nav */}
      <rect x="324" y="326" width="20" height="3" rx="1.5" fill="rgba(244,114,182,0.35)" />
      <rect x="350" y="326" width="16" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />
      <rect x="372" y="326" width="18" height="3" rx="1.5" fill="rgba(255,255,255,0.08)" />
      {/* wireframe body lines */}
      <rect x="324" y="334" width="72" height="3" rx="1.5" fill="rgba(255,255,255,0.07)" />
      <rect x="324" y="340" width="54" height="3" rx="1.5" fill="rgba(255,255,255,0.05)" />
      <rect x="318" y="360" width="46" height="18" rx="9" fill="rgba(251,191,36,0.08)" stroke="rgba(251,191,36,0.18)" strokeWidth="1" />
      <rect x="324" y="366" width="28" height="4" rx="2" fill="rgba(251,191,36,0.4)" />
      <rect x="372" y="362" width="42" height="14" rx="7" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <rect x="378" y="366" width="26" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />

      {/* ── FLOW NODES (diagonal) ── */}
      {/* Node 1 */}
      <circle cx="74" cy="310" r="12" fill="rgba(244,114,182,0.1)" stroke="rgba(244,114,182,0.4)" strokeWidth="1.5" />
      <circle cx="74" cy="310" r="5" fill="rgba(244,114,182,0.7)" filter="url(#glow-a-pink)" />
      {/* Node 2 */}
      <circle cx="186" cy="352" r="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
      <circle cx="186" cy="352" r="5" fill="rgba(255,255,255,0.35)" />
      <line x1="86" y1="316" x2="174" y2="346" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="4 3" />
      {/* Node 3 */}
      <circle cx="296" cy="330" r="12" fill="rgba(251,191,36,0.08)" stroke="rgba(251,191,36,0.35)" strokeWidth="1.5" />
      <circle cx="296" cy="330" r="5" fill="rgba(251,191,36,0.6)" filter="url(#glow-a-yellow)" />
      <line x1="198" y1="348" x2="284" y2="334" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="4 3" />

      {/* ── ABSTRACT FLOWCHART (left side) ── */}
      {/* Start node */}
      <circle cx="54" cy="185" r="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
      <circle cx="54" cy="185" r="4" fill="rgba(255,255,255,0.2)" />
      {/* Process rect */}
      <rect x="40" y="218" width="28" height="20" rx="5" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <rect x="46" y="224" width="16" height="2.5" rx="1.5" fill="rgba(255,255,255,0.15)" />
      <rect x="46" y="230" width="10" height="2.5" rx="1.5" fill="rgba(255,255,255,0.1)" />
      {/* Decision diamond */}
      <polygon points="54,258 64,268 54,278 44,268" fill="rgba(244,114,182,0.06)" stroke="rgba(244,114,182,0.25)" strokeWidth="1" />
      {/* End / output node */}
      <rect x="72" y="262" width="28" height="12" rx="6" fill="rgba(251,191,36,0.08)" stroke="rgba(251,191,36,0.2)" strokeWidth="1" />
      <rect x="78" y="266" width="16" height="3" rx="1.5" fill="rgba(251,191,36,0.3)" />
      {/* Terminal node */}
      <rect x="40" y="298" width="28" height="14" rx="7" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <circle cx="54" cy="305" r="3" fill="rgba(255,255,255,0.15)" />

      {/* ── Floating code symbols ── */}
      <text x="340" y="68" fontFamily="monospace" fontSize="11" fill="rgba(244,114,182,0.25)" fontWeight="600">{"{ }"}</text>
      <text x="100" y="180" fontFamily="monospace" fontSize="10" fill="rgba(251,191,36,0.2)">{"< >"}</text>
      <text x="400" y="180" fontFamily="monospace" fontSize="10" fill="rgba(255,255,255,0.1)">{"/"}</text>

    </svg>
  );
}
