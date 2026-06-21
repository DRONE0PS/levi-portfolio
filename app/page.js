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
        .ghost-name {
          font-family: var(--font-pixel);
          position: absolute;
          font-weight: 700;
          color: transparent;
          -webkit-text-stroke: 2px rgba(20,20,26,0.18);
          line-height: 0.85;
          z-index: 0;
          user-select: none;
          pointer-events: none;
          white-space: nowrap;
        }
        .float-slow {
          animation: floatY 6s ease-in-out infinite;
        }
        .float-slow-delay {
          animation: floatY 7s ease-in-out infinite;
          animation-delay: 1.2s;
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        .social-rail {
          position: fixed;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 50;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        @media (max-width: 760px) {
          .social-rail { display: none; }
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

      {/* SOCIAL RAIL */}
      <div className="social-rail">
        {["in", "gh", "tw"].map((tag) => (
          <a
            key={tag}
            href="#contact"
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.1)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.02em",
              color: "var(--ink)",
            }}
          >
            {tag}
          </a>
        ))}
      </div>

      {/* HERO */}
      <section
        id="home"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "120px 24px 60px",
          overflow: "hidden",
        }}
      >
        <span
          className="ghost-name"
          style={{
            top: "18%",
            left: "2%",
            fontSize: "min(26vw, 220px)",
          }}
        >
          LEVI
        </span>
        <span
          className="ghost-name"
          style={{
            bottom: "4%",
            right: "2%",
            fontSize: "min(20vw, 170px)",
          }}
        >
          ADOLPHUS
        </span>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 1100,
            margin: "0 auto",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              borderRadius: 999,
              background: "var(--orange-soft)",
              marginBottom: 24,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--orange)" }} />
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#a8430f",
                fontFamily: "var(--font-body)",
              }}
            >
              Frontend Developer · UI Designer · Creative Problem Solver
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "min(13vw, 92px)",
              lineHeight: 0.98,
              letterSpacing: "-0.01em",
              margin: 0,
              color: "var(--ink)",
            }}
          >
            BUILDING<br />
            DIGITAL<br />
            SOLUTIONS<br />
            <span style={{ color: "var(--orange)" }}>THAT LAST</span>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              color: "var(--ink-soft)",
              maxWidth: 460,
              marginTop: 28,
              lineHeight: 1.6,
            }}
          >
            I design and build clean, functional web products — from idea to
            deployed app — with a focus on real-world problem solving.
          </p>

          <div style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap" }}>
            <a
              href="#projects"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "#fff",
                background: "var(--ink)",
                padding: "16px 28px",
                borderRadius: 999,
              }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "var(--ink)",
                background: "transparent",
                border: "1.5px solid rgba(20,20,26,0.2)",
                padding: "16px 28px",
                borderRadius: 999,
              }}
            >
              Hire Me
            </a>
          </div>

          {/* STAT CARD */}
          <div
            style={{
              marginTop: 56,
              display: "inline-flex",
              alignItems: "center",
              gap: 20,
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: 20,
              padding: "18px 24px",
              boxShadow: "0 12px 32px rgba(0,0,0,0.06)",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 32,
                  fontWeight: 700,
                  color: "var(--orange)",
                  lineHeight: 1,
                }}
              >
                2+
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--ink-soft)",
                  marginTop: 2,
                }}
              >
                Projects
              </div>
            </div>
            <div style={{ width: 1, height: 36, background: "rgba(0,0,0,0.1)" }} />
            <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ink)", lineHeight: 1.5 }}>
              Drone Battery Management System<br />
              PASSMASTER
            </div>

          </div>

          {/* FLOATING WORKSPACE - EDITOR CARD */}
          <div
            className="float-slow"
            style={{
              maxWidth: 380,
              width: "100%",
              margin: "64px auto 0",
              background: "#1c1c22",
              borderRadius: 18,
              padding: 0,
              boxShadow: "0 24px 48px rgba(0,0,0,0.18)",
              transform: "rotate(-3deg)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 16px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f56" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#27c93f" }} />
              <span
                style={{
                  marginLeft: 8,
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.02em",
                }}
              >
                index.js
              </span>
            </div>
            <div style={{ padding: "16px 18px", fontFamily: "monospace", fontSize: 12, overflowWrap: "break-word", whiteSpace: "pre-wrap", lineHeight: 1.9 }}>
              <div><span style={{ color: "#c586c0" }}>const</span> <span style={{ color: "#9cdcfe" }}>fleet</span> = <span style={{ color: "#c586c0" }}>new</span> <span style={{ color: "#4ec9b0" }}>DroneFleet</span>();</div>
              <div><span style={{ color: "#c586c0" }}>function</span> <span style={{ color: "#dcdcaa" }}>deploy</span>() {`{`}</div>
              <div style={{ paddingLeft: 16 }}><span style={{ color: "#c586c0" }}>return</span> <span style={{ color: "#ce9178" }}>"ready"</span>;</div>
              <div>{`}`}</div>
              <div style={{ color: "rgba(255,255,255,0.25)" }}>// shipped 🚀</div>
            </div>
          </div>
        </div>
      </section>

      {/* placeholder for next sections */}
      <section id="about" style={{ minHeight: "40vh" }} />
      <section id="skills" style={{ minHeight: "40vh" }} />
      <section id="projects" style={{ minHeight: "40vh" }} />
      <section id="contact" style={{ minHeight: "40vh" }} />
    </main>
  );
}
