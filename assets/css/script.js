const gitAPI = //github key here
const googAPI = document.getElementById('gcse-searchbox')

function getApi() {
    const googUrl = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyAYffbKfb5DUxujhzHl7enrwiY5hQvMeE8&cx=b7cf49646661a440c&q=css';
  
    fetch(googUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        for (let i = 0; i < 5; i++) {
         //need to grab the data and append to the resource page. May need local storage. 
        }
      });
  }
  googAPI.addEventListener('click', getApi);
  

const gitInfoContainer = document.getElementById(//empty div on the html)
const googInfoContainer = document.getElementById(//empty div on the html)

