document.addEventListener('DOMContentLoaded', function() {
  var burger = document.getElementById('burger');
  var bignav = document.getElementsByClassName('big-nav')[0];
  var content = document.getElementsByClassName('content')[0];
  var footer = document.getElementsByClassName('footer')[0];

  var open = false;
  toggleMenu = function() {
    burger.classList.toggle('close');
    bignav.classList.toggle('hidden');

    open = (open ? false : true);
  };

  burger.addEventListener('click', toggleMenu);

  document.onkeydown = function(e) {
    e.preventDefault();
    if (open && e.keyCode === 27) {
      toggleMenu();
    }
  };
});
