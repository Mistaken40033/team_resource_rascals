const toggleSwitch = document.getElementById('toggle');
const toggleImage = document.querySelector('.toggle-image');

function toggleDarkMode() {
  if (toggleSwitch.checked) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

toggleSwitch.addEventListener('change', toggleDarkMode);



