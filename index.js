// Navbar Toggler
$(".nav__toggler").click(() => {
  $(".nav__links").toggleClass("nav__links--show");
});

//ScrollTo
$('a[href^="#"]').on("click", function (e) {
  $("html, body").animate({
    scrollTop: $(e.currentTarget.hash).scrollTop() + 100,
  });
  $(".nav__links").toggleClass("nav__links--show");
});

//Click card__planos
$("cards__planos").on("click", function (e) {});
