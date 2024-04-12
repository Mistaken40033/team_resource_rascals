const gitUrlTeej = 'https:api.github.com/users/TJNeko/repos';
const gitInfoContainerTeej = document.getElementById('gitPlaceTeej');

function getGitInfoTeej() {
    fetch(gitUrlTeej)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        renderGitInfoTeej(data);
    })
    .catch(function(error) {
      console.error('Error fetching data:', error);
    });
}

function renderGitInfoTeej(data) {
  gitInfoContainerTeej.innerHTML = '';
  data.forEach(function(repo) {
    const repoLink = document.createElement('a');
    repoLink.href = repo.html_url;
    repoLink.textContent = repo.name;
    gitInfoContainerTeej.appendChild(repoLink);
    gitInfoContainerTeej.appendChild(document.createElement('br'));
});
}

getGitInfoTeej();








const gitUrlAustin = 'https:api.github.com/users/austintyrome/repos';
const gitInfoContainerAustin = document.getElementById('gitPlaceAustin');

function getGitInfoAustin() {
    fetch(gitUrlAustin)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        renderGitInfoAustin(data);
    })
    .catch(function(error) {
      console.error('Error fetching data:', error);
    });
}

function renderGitInfoAustin(data) {
  gitInfoContainerAustin.innerHTML = '';
  data.forEach(function(repo) {
    const repoLink = document.createElement('a');
    repoLink.href = repo.html_url;
    repoLink.textContent = repo.name;
    gitInfoContainerAustin.appendChild(repoLink);
    gitInfoContainerAustin.appendChild(document.createElement('br'));
});
}

getGitInfoAustin();




const gitUrlErica = 'https:api.github.com/users/Mistaken40033/repos';
const gitInfoContainerErica = document.getElementById('gitPlaceErica');

function getGitInfoErica() {
    fetch(gitUrlErica)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        renderGitInfoErica(data);
    })
    .catch(function(error) {
      console.error('Error fetching data:', error);
    });
}

function renderGitInfoErica(data) {
  gitInfoContainerErica.innerHTML = '';
  data.forEach(function(repo) {
    const repoLink = document.createElement('a');
    repoLink.href = repo.html_url;
    repoLink.textContent = repo.name;
    gitInfoContainerErica.appendChild(repoLink);
    gitInfoContainerErica.appendChild(document.createElement('br'));
});
}

getGitInfoErica();

