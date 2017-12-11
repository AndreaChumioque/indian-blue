window.onload = function () {
  debugger;
  var iconMenu = document.getElementById('show-menu');
  var navMenu = document.getElementById('nav-menu');
  
  iconMenu.addEventListener('click', showMenu);

  function showMenu(event) {
    navMenu.classList.toggle('hidden');
  }
};