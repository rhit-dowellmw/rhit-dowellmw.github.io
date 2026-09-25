// Shared navbar and footer for every page, so the markup lives in one place.
// Each page just needs <header id="site-header"></header> and <footer id="site-footer"></footer>.

document.getElementById("site-header").innerHTML = `
  <nav>
    <a href="index.html">Home</a>
    <a href="resume.html">Resume</a>
    <a href="portfolio.html">Portfolio</a>
  </nav>
`;

document.getElementById("site-footer").innerHTML = `
  <p>&copy; ${new Date().getFullYear()} Max Dowell</p>
  <a href="https://app.joinhandshake.com/profiles/s72mhf">Handshake</a>
  <a href="https://github.com/rhit-dowellmw">GitHub</a>
`;

const currentPage = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("#site-header nav a").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.setAttribute("aria-current", "page");
  }
});
