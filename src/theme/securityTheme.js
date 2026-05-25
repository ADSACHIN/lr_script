export const securityTheme = {
  foundation: {
    app: "#06070c",
    panel: "#080910",
    header: "#0a0c18",
    surface: "#0b0f16",
    surfaceElevated: "#0f1420",
    card: "#0d111a",
    sidebar: "#070911",
    navbar: "#0a0c18",
    modal: "#101521",
    overlay: "rgba(2, 4, 8, 0.78)",
    border: "#141e30",
    borderStrong: "#20304a",
    divider: "rgba(20, 30, 48, 0.72)",
  },
  text: {
    primary: "#e6edf5",
    secondary: "#b6c4d2",
    muted: "#7f91a6",
    subtle: "#5e7188",
    disabled: "#405064",
    heading: "#f2f7fc",
    code: "#d8e6f3",
    codeMuted: "#8fa5ba",
    link: "#48c8f0",
    linkHover: "#7ddfff",
    emphasis: "#dff8ff",
  },
  accent: {
    cyan: "#4fc7e8",
    green: "#4bdd82",
    red: "#ff4d63",
    orange: "#ff9a3d",
    yellow: "#e8c75a",
    purple: "#9b78f0",
    teal: "#3ed0b4",
    pink: "#ef5da8",
    sky: "#5fbaf5",
    indigo: "#7a72e8",
  },
  accentBg: {
    cyan: "rgba(0, 176, 224, 0.10)",
    green: "rgba(0, 216, 96, 0.10)",
    red: "rgba(255, 24, 56, 0.12)",
    orange: "rgba(255, 128, 0, 0.12)",
    yellow: "rgba(232, 176, 16, 0.12)",
    purple: "rgba(120, 48, 224, 0.13)",
    teal: "rgba(0, 184, 152, 0.11)",
    pink: "rgba(224, 32, 128, 0.12)",
    sky: "rgba(32, 160, 240, 0.11)",
    indigo: "rgba(80, 64, 200, 0.13)",
  },
};

const { foundation, text, accent } = securityTheme;

export const legacyPalette = {
  bg: foundation.app,
  bg2: foundation.panel,
  bg3: foundation.surfaceElevated,
  border: foundation.border,
  dim: text.muted,
  bright: text.heading,
  white: text.primary,
  amber: accent.orange,
  amberD: accent.yellow,
  amberF: "#f2d978",
  yellow: accent.yellow,
  orange: accent.orange,
  green: accent.green,
  green2: "#7be59f",
  red: accent.red,
  cyan: accent.cyan,
  purple: accent.purple,
  violet: accent.indigo,
  pink: accent.pink,
  magenta: accent.pink,
  blue: accent.sky,
  blue2: accent.indigo,
  sky: accent.sky,
  teal: accent.teal,
  lime: "#9fdc72",
};

export const iframeThemeCss = `
  :root {
    --bg-app: ${foundation.app};
    --bg-panel: ${foundation.panel};
    --bg-header: ${foundation.header};
    --bg-surface: ${foundation.surface};
    --bg-elevated: ${foundation.surfaceElevated};
    --bg-card: ${foundation.card};
    --border: ${foundation.border};
    --border-strong: ${foundation.borderStrong};
    --divider: ${foundation.divider};

    --text-primary: ${text.primary};
    --text-secondary: ${text.secondary};
    --text-muted: ${text.muted};
    --text-subtle: ${text.subtle};
    --text-disabled: ${text.disabled};
    --text-heading: ${text.heading};
    --text-code: ${text.code};
    --text-code-muted: ${text.codeMuted};
    --link: ${text.link};
    --link-hover: ${text.linkHover};

    --cyan: ${accent.cyan};
    --green: ${accent.green};
    --red: ${accent.red};
    --orange: ${accent.orange};
    --yellow: ${accent.yellow};
    --purple: ${accent.purple};
    --teal: ${accent.teal};
    --pink: ${accent.pink};
    --sky: ${accent.sky};
    --indigo: ${accent.indigo};

    --void: ${foundation.app};
    --void2: ${foundation.panel};
    --void3: ${foundation.surface};
    --deep: ${foundation.panel};
    --panel: ${foundation.card};
    --surface: ${foundation.surfaceElevated};
    --lift: #131a28;
    --rule: ${foundation.border};
    --muted: ${text.subtle};
    --dim: ${text.muted};
    --white: ${text.primary};

    --phos: ${accent.cyan};
    --phos2: ${accent.green};
    --phos3: ${text.secondary};
    --phos4: ${foundation.border};
    --amber: ${accent.orange};
    --amber2: ${accent.yellow};
    --amber3: #9f6b22;
    --lime: ${accent.green};
    --lime2: #7be59f;
    --cyan2: ${accent.cyan};
    --red2: #db3149;
  }

  html, body {
    background: var(--bg-app) !important;
    color: var(--text-secondary) !important;
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
    cursor: default !important;
  }

  body::before, body::after, canvas#bg-canvas {
    opacity: .28 !important;
  }

  h1, h2, h3, h4, .hero-h1, .sh-title, .ctitle, .card-title, .qtext {
    color: var(--text-heading) !important;
    text-shadow: none !important;
    letter-spacing: 0 !important;
  }

  p, li, .cbody, .card-body, .sh-desc, .hero-desc, .wf-desc, .qexplain,
  .dTable td, .dtable td {
    color: var(--text-secondary) !important;
    line-height: 1.65;
  }

  .clabel, .card-label, .sh-eyebrow, .hero-eyebrow, .stat-label,
  .qnum, .badge, .ntab, .itab {
    color: var(--text-muted);
  }

  nav {
    background: rgba(10, 12, 24, .96) !important;
    border-color: var(--border) !important;
    box-shadow: none !important;
  }

  .ntab:hover, .itab:hover {
    color: var(--cyan) !important;
    background: rgba(0, 176, 224, .08) !important;
  }

  .ntab.active, .itab.active {
    color: var(--cyan) !important;
    background: rgba(0, 176, 224, .11) !important;
    border-color: var(--cyan) !important;
  }

  .nav-pill.active,
  .topic-btn.active {
    color: var(--bg-app) !important;
    background: var(--cyan) !important;
    border-color: var(--cyan) !important;
  }

  .nav-pill.bash.active,
  .topic-btn.active.bash,
  .hero-title .t-bash {
    color: var(--cyan) !important;
  }

  .nav-pill.bash.active,
  .topic-btn.active.bash {
    color: var(--bg-app) !important;
    background: var(--cyan) !important;
  }

  .hero-title .t-py { color: var(--sky) !important; }
  .hero-title .t-ps { color: var(--purple) !important; }

  .wrapper {
    max-width: 1180px;
  }

  .card, .qcard, .quiz-card, .score-box, .rule-block, .sigma-block {
    background: var(--bg-card) !important;
    border-color: var(--border) !important;
    border-radius: 6px !important;
    box-shadow: none !important;
  }

  .card:hover, .qcard:hover {
    background: var(--bg-elevated) !important;
    border-color: var(--border-strong) !important;
  }

  .codeblock, .cb, .code-pane, .rule-body, .sigma-body, .yara-block,
  pre, code {
    font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Consolas, monospace !important;
  }

  .codeblock, .cb, .code-pane, .terminal, pre {
    background: #050812 !important;
    border-color: var(--border) !important;
    color: var(--text-code) !important;
    text-shadow: none !important;
  }

  .C, .DIM, .t-cmt {
    color: var(--text-code-muted) !important;
  }
  .K, .t-kw, .t-fn { color: var(--cyan) !important; }
  .G, .tc-g { color: var(--green) !important; }
  .R, .tc-r { color: var(--red) !important; }
  .Y, .N, .t-num, .tc-y { color: var(--orange) !important; }
  .S, .t-str { color: var(--yellow) !important; }
  .P { color: var(--purple) !important; }
  .CY, .tc-c { color: var(--sky) !important; }

  .alert, .a-info, .a-ok, .a-warn, .a-err {
    color: var(--text-secondary) !important;
    border-radius: 6px !important;
  }
  .a-info { background: rgba(232, 176, 16, .10) !important; border-color: var(--yellow) !important; }
  .a-ok { background: rgba(0, 216, 96, .10) !important; border-color: var(--green) !important; }
  .a-warn { background: rgba(255, 128, 0, .12) !important; border-color: var(--orange) !important; }
  .a-err { background: rgba(255, 24, 56, .12) !important; border-color: var(--red) !important; }

  table, .dTable, .dtable {
    color: var(--text-secondary) !important;
  }
  th, .dTable th, .dtable th {
    background: var(--bg-elevated) !important;
    color: var(--cyan) !important;
    border-color: var(--border) !important;
  }
  td, .dTable td, .dtable td {
    border-color: var(--border) !important;
  }

  button, a {
    outline-color: var(--cyan);
  }
  button:focus-visible, a:focus-visible {
    outline: 2px solid var(--cyan) !important;
    outline-offset: 2px !important;
  }
`;
