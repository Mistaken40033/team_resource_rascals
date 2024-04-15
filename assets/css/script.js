function searchGoogle(query) {
  const apiKey = 'AIzaSyAYffbKfb5DUxujhzHl7enrwiY5hQvMeE8';
  const cx = 'b7cf49646661a440c';
  let url = 'https://www.googleapis.com/customsearch/v1?q=' + query + '&key=' + apiKey + '&cx=' + cx;

  fetch(url)
      .then(response => {
          if (!response.ok) {
              throw new Error('Ope try again');
          }
          return response.json();
      })
      .then(data => {
          displayResults(data.items);
      })
      .catch(error => {
          console.error('Error:', error);
      });
}

function displayResults(results) {
  let resultList = document.getElementById('searchResults');
  resultList.innerHTML = '';

  results.forEach(function(result) {
      let title = result.title;
      let link = result.link;

      let listItem = document.createElement('li');
      let linkElement = document.createElement('a');
      linkElement.href = link;
      linkElement.textContent = title;

      listItem.appendChild(linkElement);
      resultList.appendChild(listItem);
  });
}

document.getElementById('searchButton').addEventListener('click', function() {
  let query = document.getElementById('searchBox').value;
  if (query.trim() !== '') {
      searchGoogle(query);
  }
});
