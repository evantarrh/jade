document.addEventListener('DOMContentLoaded', function() {
  if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {

    var progressBarString = '<div id="_progress-bar" style="background-color:#4cb;height:5px;position:fixed;top:0;transition:0.1s ease all;width:0;"></div>';
    document.body.insertAdjacentHTML('afterbegin', progressBarString);
    var progressBar = document.getElementById('_progress-bar');

    var windowHeight;
    var totalBodyHeight;
    var scrollPosition;
    var percentage;

    window.addEventListener('scroll', function() {
      windowHeight = window.innerHeight;
      totalBodyHeight = document.body.clientHeight;
      scrollPosition = document.body.scrollTop;
      percentage = 100 * (scrollPosition / (totalBodyHeight - windowHeight));
      progressBar.style.width = percentage + '%';
    });
  }
});
