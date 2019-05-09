function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "125px";
  document.getElementById("main").style.marginRight = "-125px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("main").style.marginRight = "0";
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
