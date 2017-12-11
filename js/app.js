window.onload = function () {

  var iconMenu = document.getElementById('show-menu');
  var navMenu = document.getElementById('nav-menu');
  
  iconMenu.addEventListener('click', showMenu);
  document.addEventListener('click', hideMenu);

  function showMenu(event) {
    navMenu.classList.toggle('hidden');
  }

  function hideMenu(event) {
    if (event.target !== iconMenu && (event.target !== navMenu && event.target.closest('nav') !== navMenu) && !(navMenu.classList.contains('hidden'))) {
      navMenu.classList.add('hidden');
    }
  }

};
