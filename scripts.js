$(document).ready(function () {
    $('#toggleMode').click(function () {
      $('body').toggleClass('modooscuro');
  
      const isDark = $('body').hasClass('dark-mode');
      $(this).text(isDark ? '☀️' : '🌙');
    });
  });