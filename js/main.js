document.addEventListener("DOMContentLoaded", function (event) {
  var mobileMenu = document.getElementById("mobile-menu");
  var menuButton = document.getElementById("menu-button");
  var menuLinks = document.querySelectorAll(".menu-link");
  menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenu.classList.add("hidden");
    });
  });
});
