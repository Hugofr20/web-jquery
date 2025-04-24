$(document).ready(function () {
    $('#toggleMode').click(function () {
      $('body').toggleClass('modooscuro');
  
      const isDark = $('body').hasClass('modooscuro');
      $(this).text(isDark ? '☀️' : '🌙');
    });
  });