import {
  BookOpen,
  Bot,
  Bug,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Cloud,
  FlaskConical,
  Home,
  Network,
  Radar,
  Search,
  Shield,
  Terminal,
  Zap,
} from "lucide-react";
import { lazy, Suspense, useCallback, useEffect, useRef, useState } from "react";

const MalwareCurriculum = lazy(() => import("./pages/MalwareCurriculum.jsx"));
const ScriptingInteractive = lazy(() => import("./pages/ScriptingInteractive.jsx"));
const MalwareFundamentalsInteractive = lazy(() => import("./pages/MalwareFundamentalsInteractive.jsx"));
const MalwareAnalysisInteractive = lazy(() => import("./pages/MalwareAnalysisInteractive.jsx"));
const SecurityScriptingFundamentals = lazy(() => import("./pages/SecurityScriptingFundamentals.jsx"));
const MalwareFundamentals = lazy(() => import("./pages/MalwareFundamentals.jsx"));
const MalwareAnalysisReverseEngineering = lazy(() => import("./pages/MalwareAnalysisReverseEngineering.jsx"));
const DetectionEngineeringDefense = lazy(() => import("./pages/DetectionEngineeringDefense.jsx"));
const LabsEthicsPractice = lazy(() => import("./pages/LabsEthicsPractice.jsx"));
const ScriptingMasteryPlan = lazy(() => import("./pages/ScriptingMasteryPlan.jsx"));
const SecurityScripting90Day = lazy(() => import("./pages/SecurityScripting90Day.jsx"));
const LabSetupContinuation = lazy(() => import("./pages/LabSetupContinuation.jsx"));
const DetectionDefenseInteractive = lazy(() => import("./pages/DetectionDefenseInteractive.jsx"));
const Month2DailyDetail = lazy(() => import("./pages/Month2DailyDetail.jsx"));
const Month3DailyDetail = lazy(() => import("./pages/Month3DailyDetail.jsx"));
const AdvancedReverseEngineering = lazy(() => import("./pages/AdvancedReverseEngineering.jsx"));
const NetworkForensics = lazy(() => import("./pages/NetworkForensics.jsx"));
const CloudSecurity = lazy(() => import("./pages/CloudSecurity.jsx"));
const ThreatIntelligence = lazy(() => import("./pages/ThreatIntelligence.jsx"));
const LlmSecurity = lazy(() => import("./pages/LlmSecurity.jsx"));

/* ─── Organized lesson data with categories and descriptions ─── */

const LESSONS = [
  // Level 0: scope, safety, environment, and roadmap
  { id: "curriculum", label: "Full Curriculum", desc: "Roadmap, scope, and mental model", icon: Home, category: "level0", Component: MalwareCurriculum },
  { id: "labs", label: "Labs and Ethics", desc: "Authorization, safety, and boundaries", icon: FlaskConical, category: "level0", Component: LabsEthicsPractice },
  { id: "lab-setup", label: "Lab Setup Continuation", desc: "Analysis VM and tooling bootstrap", icon: FlaskConical, category: "level0", Component: LabSetupContinuation },
  { id: "scripting-mastery-plan", label: "Scripting Mastery Plan", desc: "90-day roadmap and capstone arc", icon: Terminal, category: "level0", Component: ScriptingMasteryPlan },

  // Level 1: security scripting foundations
  { id: "scripting", label: "Scripting Fundamentals", desc: "Bash, Python, PowerShell basics", icon: Terminal, category: "level1", Component: SecurityScriptingFundamentals },
  { id: "interactive-scripting", label: "Interactive Scripting", desc: "Guided scripting practice", icon: Terminal, category: "level1", Component: ScriptingInteractive },
  { id: "security-scripting-90day", label: "90 Day Scripting", desc: "Daily drills for fundamentals", icon: CalendarDays, category: "level1", Component: SecurityScripting90Day },

  // Level 2: systems, platforms, and malware mental models
  { id: "fundamentals", label: "Malware Fundamentals", desc: "Types, behaviors, lifecycle", icon: Bug, category: "level2", Component: MalwareFundamentals },
  { id: "interactive-fundamentals", label: "Interactive Fundamentals", desc: "Malware concepts with labs", icon: Bug, category: "level2", Component: MalwareFundamentalsInteractive },
  { id: "network-forensics", label: "Network Forensics", desc: "PCAP, traffic, protocol analysis", icon: Network, category: "level2", Component: NetworkForensics },
  { id: "cloud-security", label: "Cloud Security", desc: "Platform security and defense basics", icon: Cloud, category: "level2", Component: CloudSecurity },

  // Level 3: practical analysis and detection workflows
  { id: "analysis", label: "Analysis and RE", desc: "Static and dynamic analysis workflow", icon: BookOpen, category: "level3", Component: MalwareAnalysisReverseEngineering },
  { id: "interactive-analysis", label: "Interactive Analysis", desc: "RE techniques and tool practice", icon: Radar, category: "level3", Component: MalwareAnalysisInteractive },
  { id: "detection", label: "Detection Defense", desc: "Detection engineering foundations", icon: Shield, category: "level3", Component: DetectionEngineeringDefense },
  { id: "interactive-detection", label: "Interactive Detection", desc: "YARA, Sigma, and response labs", icon: Shield, category: "level3", Component: DetectionDefenseInteractive },

  // Level 4: advanced security operations
  { id: "threat-intelligence", label: "Threat Intelligence", desc: "MITRE ATT&CK, IOCs, TTP mapping", icon: Radar, category: "level4", Component: ThreatIntelligence },
  { id: "month2-daily-detail", label: "Month 2 Daily Detail", desc: "Detection and automation buildout", icon: CalendarDays, category: "level4", Component: Month2DailyDetail },
  { id: "advanced-re", label: "Advanced RE", desc: "Anti-analysis, packers, obfuscation", icon: Search, category: "level4", Component: AdvancedReverseEngineering },

  // Level 5: expert platform and research topics
  { id: "month3-daily-detail", label: "Month 3 Daily Detail", desc: "Platform engineering and capstone", icon: CalendarDays, category: "level5", Component: Month3DailyDetail },
  { id: "llm-security", label: "LLM Security", desc: "AI/ML attack and defense research", icon: Bot, category: "level5", Component: LlmSecurity },
];

const CATEGORIES = [
  { key: "level0", label: "Level 0 - Orientation" },
  { key: "level1", label: "Level 1 - Fundamentals" },
  { key: "level2", label: "Level 2 - Core Systems" },
  { key: "level3", label: "Level 3 - Practical Workflows" },
  { key: "level4", label: "Level 4 - Advanced Ops" },
  { key: "level5", label: "Level 5 - Expert Research" },
];

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const contentRef = useRef(null);

  const activeLesson = LESSONS[activeIndex];
  const ActivePage = activeLesson.Component;
  const progress = ((activeIndex + 1) / LESSONS.length) * 100;

  const navigateTo = useCallback((index) => {
    if (index === activeIndex || transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      if (contentRef.current) contentRef.current.scrollTop = 0;
      window.scrollTo({ top: 0 });
      setTimeout(() => setTransitioning(false), 50);
    }, 280);
  }, [activeIndex, transitioning]);

  const goNext = useCallback(() => {
    if (activeIndex < LESSONS.length - 1) navigateTo(activeIndex + 1);
  }, [activeIndex, navigateTo]);

  const goPrev = useCallback(() => {
    if (activeIndex > 0) navigateTo(activeIndex - 1);
  }, [activeIndex, navigateTo]);

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e) => {
      if (e.altKey && e.key === "ArrowRight") { e.preventDefault(); goNext(); }
      if (e.altKey && e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  // Build sidebar items grouped by category
  const renderSidebar = () => {
    const items = [];
    let lastCategory = null;

    LESSONS.forEach((lesson, i) => {
      const cat = CATEGORIES.find(c => c.key === lesson.category);
      if (cat && cat.key !== lastCategory && cat.label) {
        items.push(
          <div key={`cat-${cat.key}`} className="sidebar-section">{cat.label}</div>
        );
        lastCategory = cat.key;
      }

      const isActive = i === activeIndex;
      const isCompleted = i < activeIndex;
      const Icon = lesson.icon;

      items.push(
        <button
          className={`nav-item ${isActive ? "active" : ""} ${isCompleted ? "completed" : ""}`}
          key={lesson.id}
          onClick={() => navigateTo(i)}
          type="button"
        >
          <Icon size={16} aria-hidden="true" />
          <div style={{ flex: 1, minWidth: 0 }}>
            <span>{lesson.label}</span>
            {lesson.desc && <span className="nav-item-desc">{lesson.desc}</span>}
          </div>
          {isCompleted && <span className="nav-check">✓</span>}
          {isActive && <span className="nav-active-dot" />}
        </button>
      );
    });

    return items;
  };

  return (
    <div className="app">
      {/* ─── Sidebar ─── */}
      <aside className={`sidebar ${sidebarOpen ? "" : "sidebar-collapsed"}`}>
        <div className="brand">
          <span className="brand-mark">SEC</span>
          <div>
            <h1>Security Curriculum</h1>
            <p>Cybersecurity Mastery</p>
          </div>
        </div>

        {/* Progress */}
        <div className="sidebar-progress">
          <div className="sidebar-progress-header">
            <span className="sidebar-progress-label">Progress</span>
            <span className="sidebar-progress-value">{activeIndex + 1}/{LESSONS.length}</span>
          </div>
          <div className="sidebar-progress-track">
            <div className="sidebar-progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <nav className="nav-list" aria-label="Lesson navigation">
          {renderSidebar()}
        </nav>
      </aside>

      {/* ─── Main Content ─── */}
      <main className="workspace">
        {/* Top bar */}
        <header className="topbar">
          <div className="topbar-left">
            <button
              className="sidebar-toggle"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              title="Toggle sidebar"
              type="button"
            >
              ☰
            </button>
            <div>
              <span className="eyebrow">Module {activeIndex + 1} of {LESSONS.length}</span>
              <h2>{activeLesson.label}</h2>
            </div>
          </div>
          <div className="topbar-info">
            <span className="topbar-badge">
              <Zap size={11} />
              {activeLesson.category.toUpperCase()}
            </span>
            <div className="topbar-nav">
              <button
                className="topbar-nav-btn"
                onClick={goPrev}
                disabled={activeIndex === 0}
                title="Previous module (Alt+←)"
                type="button"
              >
                <ChevronLeft size={15} />
                <span>Prev</span>
              </button>
              <button
                className="topbar-nav-btn"
                onClick={goNext}
                disabled={activeIndex === LESSONS.length - 1}
                title="Next module (Alt+→)"
                type="button"
              >
                <span>Next</span>
                <ChevronRight size={15} />
              </button>
            </div>
          </div>
        </header>

        {/* Progress bar */}
        <div className="content-progress-track">
          <div className="content-progress-fill" style={{ width: `${progress}%` }} />
        </div>

        {/* Page content */}
        <section className="lesson-surface" ref={contentRef}>
          <div className={`lesson-content ${transitioning ? "lesson-exit" : "lesson-enter"}`}>
            <Suspense fallback={
              <div className="page-loading">
                <div className="loading-spinner" />
                <span>Loading module...</span>
              </div>
            }>
              <ActivePage />
            </Suspense>
          </div>

          {/* ─── Bottom Navigation ─── */}
          <footer className="bottom-nav">
            {activeIndex > 0 ? (
              <button className="bottom-nav-btn bottom-nav-prev" onClick={goPrev} type="button">
                <ChevronLeft size={20} className="bottom-nav-arrow" />
                <div>
                  <span className="bottom-nav-label">Previous</span>
                  <span className="bottom-nav-title">{LESSONS[activeIndex - 1].label}</span>
                </div>
              </button>
            ) : <div className="bottom-nav-spacer" />}

            {activeIndex < LESSONS.length - 1 ? (
              <button className="bottom-nav-btn bottom-nav-next" onClick={goNext} type="button">
                <div>
                  <span className="bottom-nav-label">Next</span>
                  <span className="bottom-nav-title">{LESSONS[activeIndex + 1].label}</span>
                </div>
                <ChevronRight size={20} className="bottom-nav-arrow" />
              </button>
            ) : (
              <div className="bottom-nav-complete">
                🎉 Curriculum Complete!
              </div>
            )}
          </footer>
        </section>
      </main>
    </div>
  );
}
