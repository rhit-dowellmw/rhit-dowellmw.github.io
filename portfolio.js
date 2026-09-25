// Idea from the HW2 instructions' GitHub API suggestion: https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user
// fetch and .then: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

fetch("https://api.github.com/users/rhit-dowellmw/repos")
  .then((response) => response.json())
  .then((repos) => {
    const list = document.getElementById("repo-list");
    repos.forEach((repo) => {
      list.innerHTML += `<li><a href="${repo.html_url}">${repo.name}</a> ${repo.language ?? ""}</li>`;
    });
  });
