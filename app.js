const toggleButton = document.getElementsByClassName('align-toggle')[0];
const navbarLinks = document.getElementsByClassName('align-menu')[0];




toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  })