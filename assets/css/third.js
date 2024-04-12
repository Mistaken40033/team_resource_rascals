const gitUrlTeej = 'https:api.github.com/users/TJNeko/repos';
const gitInfoContainer = document.getElementById('gitPlace');

function getGitInfo() {
    fetch(gitUrlTeej)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        renderGitInfo(data);
    })
    .catch(function(error) {
      console.error('Error fetching data:', error);
    });
}

function renderGitInfo(data) {
  gitInfoContainer.innerHTML = '';
  data.forEach(function(repo) {
    const repoLink = document.createElement('a');
    repoLink.href = repo.html_url;
    repoLink.textContent = repo.name;
    gitInfoContainer.appendChild(repoLink);
    gitInfoContainer.appendChild(document.createElement('br'));
});
}

getGitInfo();