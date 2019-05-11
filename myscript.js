function openNav() {
  document.getElementById("mySidenav").style.width = "17.5rem";
  document.body.style.marginLeft = "9.75rem";
  document.body.style.marginRight = "-9.75rem";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.marginLeft = "0";
  document.body.style.marginRight = "0";
}

jQuery(function() {
  $(function() {
    $(window).scroll(function() {
      //Fonction appelée quand on descend la page
      if ($(this).scrollTop() > 100) {
        $("#scrollUp").css("right", "10px");
      } else {
        $("#scrollUp").removeAttr("style");
      }
    });
  });
});
