"use client";

import { useState, useEffect } from "react";
import { Code2, LayoutGrid, Lightbulb } from "lucide-react";

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
        .float-slow {
          animation: floatY 6s ease-in-out infinite;
        }
        .float-slow-delay {
          animation: floatY 7s ease-in-out infinite;
          animation-delay: 1.2s;
        }
        .float-slow-delay2 {
          animation: floatY 5.5s ease-in-out infinite;
          animation-delay: 0.6s;
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        .blink-cursor {
          animation: blink 1s steps(1) infinite;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          50.01%, 100% { opacity: 0; }
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
        .chip-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 20px;
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

          {/* FLOATING WORKSPACE - TERMINAL CARD */}
          <div
            className="float-slow-delay"
            style={{
              maxWidth: 380,
              width: "100%",
              margin: "20px auto 0",
              background: "#0e0e12",
              borderRadius: 18,
              boxShadow: "0 24px 48px rgba(0,0,0,0.18)",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 16px",
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
                }}
              >
                terminal
              </span>
            </div>
            <div style={{ padding: "16px 18px", fontFamily: "monospace", fontSize: 12, lineHeight: 1.9, color: "#a3e6a3" }}>
              <div>$ git checkout -b feature/fleet-sync</div>
              <div style={{ color: "rgba(255,255,255,0.5)" }}>Switched to a new branch</div>
              <div>$ npm run build</div>
              <div style={{ color: "rgba(255,255,255,0.5)" }}>✓ Compiled successfully</div>
              <div>
                $ git push origin main<span className="blink-cursor" style={{ color: "#fff" }}>▍</span>
              </div>
            </div>
          </div>

          {/* CHIP BADGES */}
          <div className="chip-row">
            {[
              { label: "HTML", color: "#e34c26", delay: "float-slow" },
              { label: "CSS", color: "#2965f1", delay: "float-slow-delay" },
              { label: "JS", color: "#f0db4f", delay: "float-slow-delay2" },
              { label: "⎇ main", color: "#1c1c22", delay: "float-slow" },
            ].map((chip) => (
              <span
                key={chip.label}
                className={chip.delay}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "8px 16px",
                  borderRadius: 999,
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "var(--ink)",
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: chip.color }} />
                {chip.label}
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* ABOUT */}
      <section
        id="about"
        style={{
          padding: "100px 24px",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              borderRadius: 999,
              background: "var(--orange-soft)",
              marginBottom: 20,
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
              About Me
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "min(9vw, 56px)",
              lineHeight: 1.05,
              margin: 0,
              maxWidth: 700,
              color: "var(--ink)",
            }}
          >
            I turn ideas into interfaces people actually enjoy using.
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              color: "var(--ink-soft)",
              maxWidth: 640,
              marginTop: 24,
              lineHeight: 1.7,
            }}
          >
            My path into development started with formal schooling and grew through
            self-taught, hands-on work — building real, deployed products rather than
            just following tutorials. Im a frontend developer and UI designer at
            heart, focused on React, clean design systems, and interfaces that feel
            considered rather than generic. I care about the details most people
            scroll past: spacing, motion, and the small moments that make a product
            feel premium.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 16,
              marginTop: 48,
            }}
          >
            {[
              { title: "Frontend Development", desc: "React, Next.js, responsive interfaces built to last.", Icon: Code2 },
              { title: "UI / Design Systems", desc: "Consistent, scalable design language across products.", Icon: LayoutGrid },
              { title: "Problem Solving", desc: "Real-world constraints, real working solutions.", Icon: Lightbulb },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: 18,
                  padding: "20px",
                  boxShadow: "0 12px 28px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "var(--orange-soft)",
                    marginBottom: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <item.Icon size={18} color="var(--orange)" strokeWidth={2.2} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 15,
                    fontWeight: 700,
                    color: "var(--ink)",
                    margin: 0,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    color: "var(--ink-soft)",
                    marginTop: 8,
                    lineHeight: 1.5,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        style={{
          padding: "100px 24px",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              borderRadius: 999,
              background: "var(--orange-soft)",
              marginBottom: 20,
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
              Skills
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "min(9vw, 56px)",
              lineHeight: 1.05,
              margin: 0,
              maxWidth: 700,
              color: "var(--ink)",
            }}
          >
            Tools I build with.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
              marginTop: 48,
            }}
          >
            {[
              { name: "React", level: 60 },
              { name: "Next.js", level: 50 },
              { name: "JavaScript", level: 70 },
              { name: "HTML / CSS", level: 92 },
              { name: "Supabase", level: 48 },
              { name: "Git", level: 50 },
              { name: "Vercel", level: 76 },
              { name: "Tailwind", level: 50 },
            ].map((skill) => (
              <div
                key={skill.name}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: 18,
                  padding: "20px",
                  boxShadow: "0 12px 28px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: 12,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 15,
                      fontWeight: 700,
                      color: "var(--ink)",
                    }}
                  >
                    {skill.name}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "var(--orange)",
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: 6,
                    borderRadius: 999,
                    background: "rgba(0,0,0,0.06)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${skill.level}%`,
                      height: "100%",
                      borderRadius: 999,
                      background: "linear-gradient(90deg, #ff6a1f, #ff9357)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* placeholder for next sections */}
      <section id="projects" style={{ minHeight: "40vh" }} />
      <section id="contact" style={{ minHeight: "40vh" }} />
    </main>
  );
}
