import { iframeThemeCss } from "../theme/securityTheme.js";

export default function HtmlLessonPage({ html, title }) {
  const themedHtml = html.replace(
    "</head>",
    `<style id="security-theme">${iframeThemeCss}</style></head>`
  );

  return (
    <iframe
      className="lesson-frame"
      title={title}
      srcDoc={themedHtml}
      sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
    />
  );
}
