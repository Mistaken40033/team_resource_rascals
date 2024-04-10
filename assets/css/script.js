<<<<<<< HEAD
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
  
=======
const gitAPI = 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gi
const googAPI = //google api key here
>>>>>>> 1ba7009e85d413af3fa7bd7f7b9b7d70f3be615e

const gitInfoContainer = document.getElementById('gitPlace')
const googInfoContainer = document.getElementById('googPlace')

