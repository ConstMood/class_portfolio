var typed = new Typed("#typed_span", {
  strings: ["Magical Anime Girl", "Developer In-Training", "Otaku", "Fujoshi"],
  typeSpeed: 55,
  loop: true
});

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 1,
    rewind: true,
    nav: true,
    autoplay: true
  });
});

$(function() {
  $.scrollIt({
    easing: "ease",
    scrollTime: 1000,
    topOffset: 0
  });
});

$("#menu_button_1").on("click", function() {
  var menu = $("#header_menu_div");
  menu.toggleClass("menu_toggle");
});

$grid = $(".container").isotope({
  itemSelector: ".portfolio_image",
  layoutMode: "fitRows"
});