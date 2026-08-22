/**
 * Systems Conservatory: an editorial research archive with basalt surfaces,
 * verdigris instruments, brass details, deliberate technical motion, and one
 * distinct evidence-led mention for each featured workstream.
 */
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  ArrowUpRightIcon,
  ChevronRight,
  Github,
  Menu,
  X,
} from "lucide-react";

const links = {
  github: "https://github.com/nexuss0781",
  walia: "https://github.com/nexuss0781/Walia",
  neural: "https://github.com/nexuss0781/Nexuss-Neural-Cognition",
  projects: "https://github.com/nexuss0781/nexuss0781/blob/main/CATAGORY.md",
  projectPlan: "https://github.com/nexuss0781/nexuss0781/blob/main/PROJECT.md",
};

const featuredProjects = [
  {
    id: "01",
    name: "Walia",
    type: "Persistent computation",
    image: "/manus-storage/walia-artifact_73cca89a.jpg",
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
    image: "/manus-storage/nexuss-hero-lab_dd531049.jpg",
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

const sections = ["Origin", "Flagship", "Systems", "Impact", "Archive"];

export default function Home() {
  const [active, setActive] = useState("Origin");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0b0d0c] text-[#eeece4]">
      <div className="noise-layer" aria-hidden="true" />
      <header className={`topbar ${scrolled ? "topbar-scrolled" : ""}`}>
        <a className="brand" href="#origin" onClick={() => scrollTo("Origin")}>
          <span className="brand-seal"><img src="/manus-storage/nexuss-supplied-mark_09fe0e9a.jpg" alt="Nexuss logo" /></span>
          <span><b>NEXUSS / ARCHIVE</b><i>Field dossier · 01–05</i></span>
        </a>
        <nav className="desktop-nav" aria-label="Portfolio sections">
          {sections.map((section) => (
            <button
              key={section}
              className={active === section ? "active" : ""}
              onClick={() => scrollTo(section)}
            >
              {section}
            </button>
          ))}
        </nav>
        <a className="nav-github" href={links.github} target="_blank" rel="noreferrer">
          <Github size={15} /> <span>GitHub</span>
        </a>
        <button className="mobile-menu" aria-label="Open site navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile portfolio sections">
          {sections.map((section) => (
            <button key={section} onClick={() => scrollTo(section)}>{section}</button>
          ))}
        </nav>
      )}

      <aside className="index-rail" aria-label="Section index">
        <div className="rail-super">DOSSIER</div>
        <div className="rail-line" />
        {sections.map((section, index) => (
          <button
            key={section}
            className={active === section ? "rail-active" : ""}
            onClick={() => scrollTo(section)}
            >
              <span className="rail-number">{String(index + 1).padStart(2, "0")}</span>
              <i />
              <span className="rail-coordinate">STN / {String(index + 1).padStart(2, "0")}</span>
              <span className="rail-name">{section}</span>
          </button>
        ))}
        <div className="rail-foot">01 — 05</div>
      </aside>

      <main>
        <section id="origin" className="hero-section">
          <div className="hero-image" />
          <div className="hero-shadow" />
          <div className="portrait-frame reveal-2" aria-hidden="true">
            <div className="portrait-specimen">Portrait / 001</div>
            <img src="/manus-storage/tadiyos-portrait-younger-thin-build_8f0e82f4.png" alt="Portrait of Tadiyos Aschalew" />
            <div className="portrait-rule" />
          </div>
          <div className="hero-copy reveal-1">
            <div className="eyebrow"><span className="eyebrow-mark">◆</span> founder / researcher / systems builder</div>
            <p className="name-introduction"><span>TADIYOS</span><em>ASCHALEW</em></p>
            <h1>
              Begin where the
              <em>assumption</em> breaks.
            </h1>
            <p className="hero-statement">
              <span className="desktop-copy">I work from first principles across cognitive architectures, systems infrastructure, Ethiopian text technology, and public-facing products—then carry the idea through to a usable form.</span>
              <span className="mobile-copy">First-principles work across cognition, systems, Ethiopian technology, and practical products.</span>
            </p>
            <div className="hero-actions">
              <button className="brass-button" onClick={() => scrollTo("Flagship")}>
                Enter the work <ArrowDownRight size={17} />
              </button>
              <a className="quiet-link" href={links.projects} target="_blank" rel="noreferrer">
                Open the full archive <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
          <div className="hero-metadata reveal-2">
            <div><span>Focus</span><strong>Cognition · Systems · Public tech</strong></div>
            <div><span>Base</span><strong>Addis Ababa, Ethiopia</strong></div>
            <div><span>Method</span><strong>Research → implementation</strong></div>
          </div>
          <div className="corner-note reveal-3">Scroll to inspect <span>↓</span></div>
        </section>

        <section className="manifesto-section" aria-label="Portfolio statement">
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
        </section>

        <section id="flagship" className="flagship-section">
          <div className="section-rule" />
          <div className="section-lead">
            <div className="eyebrow"><span className="eyebrow-mark">⟡</span> flagship / neural cognition</div>
            <p className="section-kicker">Evidence under a real machine boundary</p>
          </div>
          <div className="flagship-grid">
            <div className="flagship-image-wrap">
              <img src="/manus-storage/neural-cognition-artifact_b396df9f.jpg" alt="Nexuss Neural Network system artifact" />
              <div className="image-index">N / 01</div>
              <div className="orbit orbit-a" />
              <div className="orbit orbit-b" />
            </div>
            <div className="flagship-copy">
              <h2>
                <span className="desktop-copy">Nexuss Neural Network is built to test what cognition can do inside a real machine boundary. <em>270,336 neurons and 13,516,800 synapses operate within 500 MB.</em></span>
                <span className="mobile-copy">Nexuss Neural Network. <em>270k neurons. 13.5M synapses. Under 500 MB.</em></span>
              </h2>
              <p>
                <span className="desktop-copy">The system brings spiking dynamics, memory subsystems, sensory pathways, and a RAM-budget controller into one architecture. At its documented full-scale configuration, it uses 488.9 MB, reports a 94× real-time factor, and initializes in under 200 ms.</span>
                <span className="mobile-copy">A spiking system with memory, sensory pathways, and a firm RAM budget.</span>
              </p>
              <div className="spec-list">
                <span>01 <b>270,336 neurons</b></span>
                <span>02 <b>13,516,800 synapses</b></span>
                <span>03 <b>488.9 MB at full scale</b></span>
                <span>04 <b>94× real-time factor</b></span>
              </div>
              <a className="project-link brass" href={links.neural} target="_blank" rel="noreferrer">Inspect Nexuss Neural Network <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section id="systems" className="systems-section">
          <div className="section-head compact-head">
            <div>
              <div className="eyebrow"><span className="eyebrow-mark">◌</span> selected directions</div>
              <h2>Different constraints.<br /><em>Different artifacts.</em></h2>
            </div>
            <p><span className="desktop-copy">Three projects selected for contrast: persistent computation, Ethiopian text technology, and local-first data. The remaining work is mapped without repeating the same claim.</span><span className="mobile-copy">Three distinct directions, one evidence index.</span></p>
          </div>
          <div className="feature-grid">
            {featuredProjects.map((project) => (
              <article className={`artifact-card ${project.theme}`} key={project.name}>
                <a href={project.href} target="_blank" rel="noreferrer" className="artifact-image" aria-label={`Open ${project.name} repository`}>
                  {project.image ? (
                    <img src={project.image} alt={`${project.name} project visual`} />
                  ) : (
                    <div className={`artifact-glyph ${project.theme}`} aria-hidden="true">{project.glyph}</div>
                  )}
                  <span className="artifact-id">{project.id}</span>
                  <span className="image-arrow"><ArrowUpRightIcon size={18} /></span>
                </a>
                <div className="artifact-body">
                  <span className="artifact-type">{project.type}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
              <div className="artifact-catalog"><span>Plate {project.id}</span><span>Material / {project.material}</span></div>
              <a href={project.href} target="_blank" rel="noreferrer" className="project-link">Inspect source <ChevronRight size={16} /></a>
                </div>
              </article>
            ))}
          </div>

          <div className="systems-index-list">
            <div className="index-title"><span>Field index</span><b>Six further directions</b></div>
            <div className="index-entries">
              {systems.map(([name, kind, href], index) => (
                <a href={href} target="_blank" rel="noreferrer" className="system-row" key={name}>
                  <span>{String(index + 4).padStart(2, "0")}</span>
                  <strong>{name}</strong>
                  <em>{kind}</em>
                  <ArrowUpRight size={16} />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="impact" className="impact-section">
          <div className="impact-image">
            <img src="/manus-storage/git_22a32f08.jpg" alt="Tadiyos Aschalew seated at a workstation with colleagues" />
            <span className="impact-plate">Field plate / 01</span>
            <span className="impact-location">Addis Ababa · systems in use</span>
          </div>
          <div className="impact-copy">
            <div className="eyebrow"><span className="eyebrow-mark">⌁</span> people and infrastructure</div>
            <h2>Ideas only matter when they <em>leave the lab.</em></h2>
            <p>
              <span className="desktop-copy">Beyond research and infrastructure, the work reaches learning environments, payment and finance workflows, communication surfaces, administration tools, and communities around Ethiopian technology. Each belongs to its own setting; the shared method is to begin with the actual operating constraint and make the result usable.</span>
              <span className="mobile-copy">Education, finance, communication, and Ethiopian technology—built around the constraint of each real setting.</span>
            </p>
            <div className="impact-notes">
              <span><b>Education</b> Study tools · school platforms · digital libraries</span>
              <span><b>Business</b> Payment verification · finance · marketing operations</span>
              <span><b>Ecosystem</b> Ethiopian text technology · agent environments · community systems</span>
            </div>
            <a className="project-link" href={links.projectPlan} target="_blank" rel="noreferrer">Inspect visual dossier <ArrowUpRight size={16} /></a>
          </div>
        </section>

        <section id="archive" className="archive-section">
          <div className="archive-grid-bg" aria-hidden="true" />
          <div className="archive-copy">
            <div className="eyebrow"><span className="eyebrow-mark">⌘</span> the complete dossier</div>
            <h2>A wider body of work.<br /><em>Many paths through it.</em></h2>
            <p>
              <span className="desktop-copy">The archive moves through cognitive architectures, machine-learning foundations, agents, developer tools, infrastructure, Ethiopian text technology, education, finance, security, media, and applied platforms. Follow a workstream or enter the source directly.</span>
              <span className="mobile-copy">Research, systems, language technology, education, finance, security, media, and products—mapped as one archive.</span>
            </p>
            <div className="archive-actions">
              <a className="brass-button" href={links.projects} target="_blank" rel="noreferrer">Inspect the map <ArrowUpRight size={17} /></a>
              <a className="quiet-link" href={links.github} target="_blank" rel="noreferrer">Enter the source <Github size={15} /></a>
            </div>
          </div>
          <div className="archive-stamp">
            <img src="/manus-storage/nexuss-supplied-mark_09fe0e9a.jpg" alt="" />
            <span>From primitive<br />to institution</span>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-mark"><img src="/manus-storage/nexuss-supplied-mark_09fe0e9a.jpg" alt="Nexuss logo" /></div>
        <p>Find the broken foundation. Understand why it broke. Rebuild it properly.</p>
        <a href="#origin" onClick={() => scrollTo("Origin")}>Return to origin <ArrowUpRight size={14} /></a>
      </footer>
    </div>
  );
}
