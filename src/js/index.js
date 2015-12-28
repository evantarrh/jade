document.addEventListener('DOMContentLoaded', function() {
  var burger = document.getElementById('burger');
  var bignav = document.getElementsByClassName('big-nav')[0];
  var content = document.getElementsByClassName('content')[0];
  var footer = document.getElementsByClassName('footer')[0];

  var open = false;
  toggleMenu = function() {
    burger.classList.toggle('close');
    bignav.classList.toggle('hidden');
    content.classList.toggle('blur');
    footer.classList.toggle('blur');

    open = (open ? false : true);
  };

  burger.addEventListener('click', toggleMenu);
  document.onkeydown = function(e) {
    e = (e || window.event);
    e.preventDefault();
    if (open && e.keyCode === 27) {
      toggleMenu();
    }
  };
});
