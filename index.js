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
$(".cards__planos").each(function () {
  $(this).on("click", function (e) {
    $(".cards__planos").each(function () {
      $(this).removeClass("cards__planos--click");
    });
    $(this).toggleClass("cards__planos--click");
  });
});

//Confirmar button click
$(".confirmar").on("click", function () {
  alert("Desculpa, atualmente não aceitando mais pedidos");
});
