$(document).ready(function () {
    $('#toggleMode').click(function () {
      $('body').toggleClass('dark-mode');
  
      const isDark = $('body').hasClass('dark-mode');
      $(this).text(isDark ? '☀️' : '🌙');
    });
  });