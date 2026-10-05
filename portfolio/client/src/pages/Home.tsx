import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronRight,
  Github,
  Menu,
  Monitor,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const links = {
  github: "https://github.com/nexuss0781",
  neural: "https://github.com/nexuss0781/Nexuss-Neural-Cognition",
  archive: "https://github.com/nexuss0781?tab=repositories",
};

const featuredProjects = [
  {
    id: "01",
    name: "Walia",
    type: "Persistent computation",
    image: "/assets/walia.webp",
    glyph: "",
    material: "runtime chassis",
    description:
      "A durable runtime built around persistent program state, register execution, and vector-first structures.",
    href: "https://github.com/nexuss0781/Walia",
    theme: "brass",
  },
  {
    id: "02",
    name: "EthioBBPE",
    type: "Ethiopian text technology",
    image: "",
    glyph: "ኢ",
    material: "script corpus",
    description:
      "A tokenizer for Amharic, Ge’ez, and biblical texts, designed for efficient delivery and faithful reconstruction.",
    href: "https://github.com/nexuss0781/Ethio_BBPE",
    theme: "verdigris",
  },
  {
    id: "03",
    name: "Paradox-DB",
    type: "Local-first data system",
    image: "",
    glyph: "",
    material: "encrypted ledger",
    description:
      "Encrypted local storage, versioned snapshots, and synchronized data without making the cloud the centre of gravity.",
    href: "https://github.com/nexuss0781/Paradox-DB",
    theme: "slate",
  },
];

const systems = [
  ["Terminal-kit", "Remote control plane", "https://github.com/nexuss0781/Terminal-kit"],
  ["browser-kit", "Agent runtime", "https://github.com/nexuss0781/browser-kit"],
  ["NexussOS", "Operating system", "https://github.com/nexuss0781/NexussOS"],
  ["Digital-Edu", "Learning environment", "https://github.com/nexuss0781/Digital-Edu"],
  ["Trusted-Pay", "Payment verification", "https://github.com/nexuss0781/Trusted-Pay"],
  ["Nexuss-Transformer", "Model foundations", "https://github.com/nexuss0781/Nexuss-Transformer"],
];

const sections = [
  ["Origin", "origin"],
  ["Flagship", "flagship"],
  ["Systems", "systems"],
  ["Impact", "impact"],
  ["Archive", "archive"],
] as const;

export default function Home() {
  const [activeSection, setActiveSection] = useState("origin");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { preference, setPreference, switchable } = useTheme();

  useEffect(() => {
    const media = window.matchMedia("(max-width: 900px)");
    const updateLayout = () => {
      setIsCompact(media.matches);
      if (!media.matches) setMenuOpen(false);
    };
    updateLayout();
    media.addEventListener("change", updateLayout);
    return () => media.removeEventListener("change", updateLayout);
  }, []);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 20);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    const targets = sections
      .map(([, id]) => document.getElementById(id))
      .filter((target): target is HTMLElement => target !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const selectSection = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
  };

  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className={`topbar${scrolled ? " topbar-scrolled" : ""}`}>
        <div className="header-inner">
          <a className="brand" href="#origin" onClick={() => selectSection("origin")} aria-label="Nexuss Field Studio, return to origin">
            <span className="brand-seal"><img src="/assets/nexuss-mark.jpg" alt="" /></span>
            <span className="brand-wordmark"><b>NEXUSS</b><i>FIELD STUDIO</i></span>
          </a>

          <nav
            className={`section-nav${menuOpen ? " section-nav-open" : ""}`}
            id="site-navigation"
            aria-label="Portfolio sections"
            aria-hidden={isCompact && !menuOpen ? true : undefined}
            inert={isCompact && !menuOpen}
          >
            {sections.map(([label, id], index) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={activeSection === id ? "location" : undefined}
                onClick={() => selectSection(id)}
              >
                <span className="nav-number">0{index + 1}</span>{label}
              </a>
            ))}
            {switchable && (
              <div className="theme-control" role="group" aria-label="Color theme">
                <button type="button" className="theme-option" aria-label="Follow system color scheme" title="Follow system color scheme" aria-pressed={preference === "system"} onClick={() => setPreference("system")}>
                  <Monitor size={14} aria-hidden="true" /><span>Auto</span>
                </button>
                <button type="button" className="theme-option" aria-label="Use light color theme" title="Use light color theme" aria-pressed={preference === "light"} onClick={() => setPreference("light")}>
                  <Sun size={14} aria-hidden="true" /><span>Light</span>
                </button>
                <button type="button" className="theme-option" aria-label="Use dark color theme" title="Use dark color theme" aria-pressed={preference === "dark"} onClick={() => setPreference("dark")}>
                  <Moon size={14} aria-hidden="true" /><span>Dark</span>
                </button>
              </div>
            )}
          </nav>

          <a className="nav-github" href={links.github} target="_blank" rel="noreferrer">
            <Github size={16} aria-hidden="true" /> <span>GitHub</span><ArrowUpRight size={13} aria-hidden="true" />
          </a>

          <button
            className="mobile-menu"
            type="button"
            aria-label={menuOpen ? "Close site navigation" : "Open site navigation"}
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            ref={menuButtonRef}
          >
            {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
          </button>
        </div>
      </header>

      <main id="main-content">
        <section id="origin" className="hero-section" aria-labelledby="hero-title">
          <figure className="hero-scene page-frame">
            <picture className="hero-photo">
              <source
                media="(max-width: 720px)"
                type="image/avif"
                srcSet="/assets/nexuss-hero-mobile-960.avif 960w"
                sizes="100vw"
              />
              <source
                media="(max-width: 720px)"
                type="image/webp"
                srcSet="/assets/nexuss-hero-mobile-960.webp 960w"
                sizes="100vw"
              />
              <source
                type="image/avif"
                srcSet="/assets/nexuss-hero-1600.avif 1600w, /assets/nexuss-hero-2560.avif 2560w"
                sizes="100vw"
              />
              <source
                type="image/webp"
                srcSet="/assets/nexuss-hero-1600.webp 1600w, /assets/nexuss-hero-2560.webp 2560w"
                sizes="100vw"
              />
              <img
                src="/assets/nexuss-hero-1600.webp"
                srcSet="/assets/nexuss-hero-1600.webp 1600w, /assets/nexuss-hero-2560.webp 2560w"
                sizes="100vw"
                alt="Layered neural-computation core with luminous circuitry"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
            <div className="hero-copy">
              <div className="hero-identity">
                <div className="eyebrow"><span className="eyebrow-mark" aria-hidden="true">◆</span> Founder / researcher / systems builder</div>
                <p className="name-introduction"><span>TADIYOS</span><em>ASCHALEW</em></p>
              </div>
              <h1 id="hero-title">Begin where the <em>assumption</em> breaks.</h1>
              <div className="hero-actions">
                <a className="primary-action" href="#flagship" onClick={() => selectSection("flagship")}>
                  Enter the work <ArrowDownRight size={17} aria-hidden="true" />
                </a>
                <a className="quiet-link" href={links.archive} target="_blank" rel="noreferrer">
                  Open the full archive <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
              <p className="hero-statement">
                I work from first principles across cognitive architectures, systems infrastructure, Ethiopian text technology, and public-facing products—then carry the idea through to a usable form.
              </p>
              <dl className="hero-meta">
                <div><dt>Focus</dt><dd>Cognition · Systems · Public tech</dd></div>
                <div><dt>Base</dt><dd>Addis Ababa, Ethiopia</dd></div>
                <div><dt>Method</dt><dd>Research → implementation</dd></div>
              </dl>
            </div>
            <figcaption className="hero-scene-caption"><span>Thinking engine</span><span>001 / field study</span></figcaption>
          </figure>
        </section>

        <section className="manifesto-section" aria-label="Portfolio statement">
          <div className="manifesto-grid page-frame">
            <div className="manifesto-index">01 / the premise</div>
            <blockquote>
              “I don’t build on what’s already assumed. I return to where the assumptions began—and rebuild from there.”
            </blockquote>
            <div className="manifesto-copy">
              <p>
                The work crosses three connected terrains: computational primitives, the infrastructure that makes them dependable, and products that bring technical capability into real settings.
              </p>
              <p>
                It moves from spiking neural networks and persistent runtimes to data systems, remote execution, Ethiopian text technology, learning environments, finance, and applied platforms.
              </p>
            </div>
          </div>
        </section>

        <section id="flagship" className="flagship-section page-section" aria-labelledby="flagship-title">
          <div className="page-frame">
            <div className="section-rule" />
            <div className="section-lead">
              <div className="eyebrow"><span className="eyebrow-mark" aria-hidden="true">⟡</span> Flagship / neural cognition</div>
              <p className="section-kicker">Evidence under a real machine boundary</p>
            </div>
            <div className="flagship-grid">
              <div className="flagship-image-wrap">
                <img src="/assets/neural-cognition.webp" alt="Nexuss Neural Network system artifact" loading="lazy" />
                <span className="image-index">N / 01</span>
              </div>
              <div className="flagship-copy">
                <h2 id="flagship-title">
                  Nexuss Neural Network is built to test what cognition can do inside a real machine boundary. <em>270,336 neurons and 13,516,800 synapses operate within 500 MB.</em>
                </h2>
                <p>
                  The system brings spiking dynamics, memory subsystems, sensory pathways, and a RAM-budget controller into one architecture. At its documented full-scale configuration, it uses 488.9 MB, reports a 94× real-time factor, and initializes in under 200 ms.
                </p>
                <div className="spec-list">
                  <span>01 <b>270,336 neurons</b></span>
                  <span>02 <b>13,516,800 synapses</b></span>
                  <span>03 <b>488.9 MB at full scale</b></span>
                  <span>04 <b>94× real-time factor</b></span>
                </div>
                <a className="project-link feature-link" href={links.neural} target="_blank" rel="noreferrer">
                  Inspect Nexuss Neural Network <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="systems" className="systems-section page-section" aria-labelledby="systems-title">
          <div className="page-frame">
            <div className="section-head">
              <div>
                <div className="eyebrow"><span className="eyebrow-mark" aria-hidden="true">◌</span> Selected directions</div>
                <h2 id="systems-title">Different constraints.<br /><em>Different artifacts.</em></h2>
              </div>
              <p>
                Three projects selected for contrast: persistent computation, Ethiopian text technology, and local-first data. The remaining work is mapped without repeating the same claim.
              </p>
            </div>

            <div className="feature-grid">
              {featuredProjects.map((project) => (
                <article className="artifact-card" key={project.name}>
                  <a href={project.href} target="_blank" rel="noreferrer" className={`artifact-card-link ${project.theme}`}>
                    <div className="artifact-image">
                      {project.image ? (
                        <img src={project.image} alt="" loading="lazy" />
                      ) : project.glyph ? (
                        <div className={`artifact-glyph ${project.theme}`} aria-hidden="true">
                          <span>{project.glyph}</span><i>ETHIOPIAN TEXT / 02</i>
                        </div>
                      ) : (
                        <div className="paradox-visual" aria-hidden="true">
                          <div className="ledger-orbit orbit-one" />
                          <div className="ledger-orbit orbit-two" />
                          <div className="ledger-core"><span>LOCAL</span><b>↔</b><span>SYNC</span></div>
                          <i>SNAPSHOT / ENCRYPTED</i>
                        </div>
                      )}
                      <span className="artifact-id">{project.id}</span>
                      <span className="image-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
                    </div>
                    <div className="artifact-body">
                      <span className="artifact-type">{project.type}</span>
                      <h3>{project.name}</h3>
                      <p>{project.description}</p>
                      <div className="artifact-catalog"><span>Plate {project.id}</span><span>Material / {project.material}</span></div>
                      <span className="project-card-action">Inspect source <ChevronRight size={16} aria-hidden="true" /></span>
                    </div>
                  </a>
                </article>
              ))}
            </div>

            <div className="systems-index-list">
              <div className="index-title"><span>Field index</span><b>Six further directions</b></div>
              <div className="index-entries">
                {systems.map(([name, kind, href], index) => (
                  <a href={href} target="_blank" rel="noreferrer" className="system-row" key={name}>
                    <span className="system-number">{String(index + 4).padStart(2, "0")}</span>
                    <strong>{name}</strong>
                    <em>{kind}</em>
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="impact" className="impact-section" aria-labelledby="impact-title">
          <div className="impact-grid">
            <div className="impact-image">
              <img src="/assets/field-plate.jpg" alt="Tadiyos Aschalew seated at a workstation with colleagues" loading="lazy" />
              <span className="impact-plate">Field plate / 01</span>
              <span className="impact-location">Addis Ababa · systems in use</span>
            </div>
            <div className="impact-copy">
              <div className="eyebrow"><span className="eyebrow-mark" aria-hidden="true">⌁</span> People and infrastructure</div>
              <h2 id="impact-title">Ideas only matter when they <em>leave the lab.</em></h2>
              <p>
                Beyond research and infrastructure, the work reaches learning environments, payment and finance workflows, communication surfaces, administration tools, and communities around Ethiopian technology. Each belongs to its own setting; the shared method is to begin with the actual operating constraint and make the result usable.
              </p>
              <div className="impact-notes">
                <span><b>Education</b> Study tools · school platforms · digital libraries</span>
                <span><b>Business</b> Payment verification · finance · marketing operations</span>
                <span><b>Ecosystem</b> Ethiopian text technology · agent environments · community systems</span>
              </div>
              <a className="project-link impact-link" href={links.archive} target="_blank" rel="noreferrer">Browse the repository archive <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section id="archive" className="archive-section page-section" aria-labelledby="archive-title">
          <div className="archive-grid-bg" aria-hidden="true" />
          <div className="archive-content page-frame">
            <div className="archive-copy">
              <div className="eyebrow"><span className="eyebrow-mark" aria-hidden="true">⌘</span> The complete dossier</div>
              <h2 id="archive-title">A wider body of work.<br /><em>Many paths through it.</em></h2>
              <p>
                The archive moves through cognitive architectures, machine-learning foundations, agents, developer tools, infrastructure, Ethiopian text technology, education, finance, security, media, and applied platforms. Follow a workstream or enter the source directly.
              </p>
              <div className="archive-actions">
                <a className="primary-action" href={links.archive} target="_blank" rel="noreferrer">Browse the repository archive <ArrowUpRight size={17} aria-hidden="true" /></a>
                <a className="quiet-link" href={links.github} target="_blank" rel="noreferrer">Enter the source <Github size={15} aria-hidden="true" /></a>
              </div>
            </div>
            <div className="archive-stamp" aria-hidden="true">
              <img src="/assets/nexuss-mark.jpg" alt="" />
              <span>From primitive<br />to institution</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner page-frame">
          <a className="footer-mark" href="#origin" onClick={() => selectSection("origin")} aria-label="Return to the beginning">
            <img src="/assets/nexuss-mark.jpg" alt="" />
          </a>
          <p>Find the broken foundation. Understand why it broke. Rebuild it properly.</p>
          <a className="footer-top" href="#origin" onClick={() => selectSection("origin")}>Return to origin <ArrowUpRight size={14} aria-hidden="true" /></a>
        </div>
      </footer>
    </div>
  );
}
