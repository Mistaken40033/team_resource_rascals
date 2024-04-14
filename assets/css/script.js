function searchGoogle(query) {
  var apiKey = 'AIzaSyAYffbKfb5DUxujhzHl7enrwiY5hQvMeE8';
  var cx = 'b7cf49646661a440c';
  var url = 'https://www.googleapis.com/customsearch/v1?q=' + query + '&key=' + apiKey + '&cx=' + cx;

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
  var resultList = document.getElementById('searchResults');
  resultList.innerHTML = '';

  results.forEach(function(result) {
      var title = result.title;
      var link = result.link;

      var listItem = document.createElement('li');
      var linkElement = document.createElement('a');
      linkElement.href = link;
      linkElement.textContent = title;

      listItem.appendChild(linkElement);
      resultList.appendChild(listItem);
  });
}

document.getElementById('searchButton').addEventListener('click', function() {
  var query = document.getElementById('searchBox').value;
  if (query.trim() !== '') {
      searchGoogle(query);
  }
});
