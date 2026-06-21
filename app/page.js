"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <main style={{ position: "relative" }}>
      <style>{`
        .nav-links-desktop { display: flex; }
        .nav-burger { display: none; }
        @media (max-width: 760px) {
          .nav-links-desktop { display: none !important; flex: 0 !important; }
          .nav-burger { display: flex; }
          .nav-hire-desktop { display: none; }
        }
      `}</style>

      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: scrolled ? 12 : 20,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
          width: "calc(100% - 32px)",
          maxWidth: 760,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
          padding: "10px 10px 10px 18px",
          borderRadius: 999,
          background: "linear-gradient(180deg, #e9e9e7 0%, #d8d8d5 100%)",
          border: "1px solid rgba(0,0,0,0.15)",
          boxShadow:
            "0 1px 0 rgba(255,255,255,0.8) inset, 0 -1px 0 rgba(0,0,0,0.08) inset, 0 8px 24px rgba(0,0,0,0.12)",
          transition: "top 0.3s ease",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, paddingRight: 16, borderRight: "1px solid rgba(0,0,0,0.12)" }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#ff6a1f",
              boxShadow: "0 0 6px #ff6a1f, 0 0 2px #ff6a1f",
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 14,
              letterSpacing: "0.04em",
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            LA
          </span>
        </div>

        <div className="nav-links-desktop" style={{ gap: 2, flex: 1, justifyContent: "center" }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 600,
                color: "#3a3a3a",
                padding: "8px 14px",
                borderRadius: 999,
                whiteSpace: "nowrap",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="nav-hire-desktop"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 12,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            fontWeight: 700,
            color: "#fff",
            background: "#14141a",
            padding: "10px 18px",
            borderRadius: 999,
            marginLeft: 8,
            whiteSpace: "nowrap",
          }}
        >
          Hire Me
        </a>

        <button
          className="nav-burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            flexDirection: "column",
            gap: 4,
            padding: "10px 12px",
            borderRadius: 999,
            background: menuOpen ? "#14141a" : "transparent",
          }}
        >
          <span style={{ width: 18, height: 2, background: menuOpen ? "#fff" : "#14141a", borderRadius: 2 }} />
          <span style={{ width: 18, height: 2, background: menuOpen ? "#fff" : "#14141a", borderRadius: 2 }} />
          <span style={{ width: 12, height: 2, background: menuOpen ? "#fff" : "#14141a", borderRadius: 2, alignSelf: "flex-end" }} />
        </button>
      </nav>

      {/* MOBILE MENU PANEL */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 76,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 99,
            width: "calc(100% - 32px)",
            maxWidth: 760,
            background: "linear-gradient(180deg, #e9e9e7 0%, #d8d8d5 100%)",
            border: "1px solid rgba(0,0,0,0.15)",
            borderRadius: 24,
            boxShadow: "0 12px 32px rgba(0,0,0,0.18)",
            padding: 12,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 13,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontWeight: 600,
                color: "#3a3a3a",
                padding: "12px 16px",
                borderRadius: 14,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: "#fff",
              background: "#14141a",
              padding: "12px 16px",
              borderRadius: 14,
              textAlign: "center",
              marginTop: 4,
            }}
          >
            Hire Me
          </a>
        </div>
      )}

      {/* HERO PLACEHOLDER - next step */}
      <section
        id="home"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 16px",
        }}
      >
        <p style={{ fontFamily: "var(--font-body)", color: "var(--ink-soft)", textAlign: "center" }}>
          Hero section goes here — step 2
        </p>
      </section>
    </main>
  );
}
