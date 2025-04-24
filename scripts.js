$("#toggleMode").click(function () {
$("body").toggleClass("modooscuro");


  if ($("body").hasClass("modooscuro")) {
    $(this).text("☀️");
  } else {
    $(this).text("🌙");
  }
});
