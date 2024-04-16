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

  const header = document.createElement('h4');
  header.textContent = 'TJ';
  gitInfoContainerTeej.appendChild(header);

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

  const header = document.createElement('h4');
  header.textContent = 'Austin';
  gitInfoContainerAustin.appendChild(header);

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

  const header = document.createElement('h4');
  header.textContent = 'Erica';
  gitInfoContainerErica.appendChild(header);

  data.forEach(function(repo) {
    const repoLink = document.createElement('a');
    repoLink.href = repo.html_url;
    repoLink.textContent = repo.name;
    gitInfoContainerErica.appendChild(repoLink);
    gitInfoContainerErica.appendChild(document.createElement('br'));
});
}

getGitInfoErica();




const gitUrlYvonne = 'https:api.github.com/users/yvonneewa/repos';
const gitInfoContainerYvonne = document.getElementById('gitPlaceYvonne');

function getGitInfoYvonne() {
    fetch(gitUrlYvonne)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        renderGitInfoYvonne(data);
    })
    .catch(function(error) {
      console.error('Error fetching data:', error);
    });
}

function renderGitInfoYvonne(data) {
  gitInfoContainerYvonne.innerHTML = '';

  const header = document.createElement('h4');
  header.textContent = 'Yvonne';
  gitInfoContainerYvonne.appendChild(header);

  data.forEach(function(repo) {
    const repoLink = document.createElement('a');
    repoLink.href = repo.html_url;
    repoLink.textContent = repo.name;
    gitInfoContainerYvonne.appendChild(repoLink);
    gitInfoContainerYvonne.appendChild(document.createElement('br'));
});
}

getGitInfoYvonne();






const gitUrlEthan = 'https:api.github.com/users/KevSeng17/repos';
const gitInfoContainerEthan = document.getElementById('gitPlaceEthan');

function getGitInfoEthan() {
    fetch(gitUrlEthan)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        renderGitInfoEthan(data);
    })
    .catch(function(error) {
      console.error('Error fetching data:', error);
    });
}

function renderGitInfoEthan(data) {
  gitInfoContainerEthan.innerHTML = '';

  const header = document.createElement('h4');
  header.textContent = 'Ethan';
  gitInfoContainerEthan.appendChild(header);

  data.forEach(function(repo) {
    const repoLink = document.createElement('a');
    repoLink.href = repo.html_url;
    repoLink.textContent = repo.name;
    gitInfoContainerEthan.appendChild(repoLink);
    gitInfoContainerEthan.appendChild(document.createElement('br'));
});
}

getGitInfoEthan();