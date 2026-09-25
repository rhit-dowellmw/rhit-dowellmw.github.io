// Shared navbar and footer for every page, so the markup lives in one place.
// Each page just needs <header id="site-header"></header> and <footer id="site-footer"></footer>.

const NAV_HTML = `
  <nav aria-label="Main">
    <a href="index.html">Home</a>
    <a href="resume.html">Resume</a>
    <a href="portfolio.html">Portfolio</a>
  </nav>
`;

const FOOTER_HTML = `
  <p>&copy; ${new Date().getFullYear()} Max Dowell</p>
  <a href="[YOUR LINKEDIN URL]">LinkedIn</a>
  <a href="[YOUR HANDSHAKE URL]">Handshake</a>
  <a href="https://github.com/rhit-dowellmw">GitHub</a>
`;

document.getElementById("site-header").innerHTML = NAV_HTML;
document.getElementById("site-footer").innerHTML = FOOTER_HTML;

// Mark the link for the current page so it can be styled and read by screen readers
const currentPage = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("#site-header nav a").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.setAttribute("aria-current", "page");
  }
});
