// Idea from the HW2 instructions' GitHub API suggestion: https://docs.github.com/en/rest

fetch("https://api.github.com/users/rhit-dowellmw/repos")
  .then((response) => response.json())
  .then((repos) => {
    const list = document.getElementById("repo-list");
    repos.forEach((repo) => {
      list.innerHTML += `<li><a href="${repo.html_url}">${repo.name}</a> ${repo.language ?? ""}</li>`;
    });
  });
