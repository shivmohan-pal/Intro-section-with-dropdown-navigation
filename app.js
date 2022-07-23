let mobileMenu = document.querySelector("#mobile-menu");
let nav = document.querySelector("nav");
let navList = document.querySelector(".nav-list");

function closeNav() {
  nav.style.width = "";
  navList.style.transform = "";
}
function openNav() {
  nav.style.width = "100vw";
  navList.style.transform = "translateX(0)";
}

mobileMenu.addEventListener("click", function () {
  let toggleValue = mobileMenu.classList.value.includes("cross");
  if (toggleValue) closeNav();
  else openNav();
  mobileMenu.classList.toggle("cross");
});
nav.addEventListener("click", function (e) {
  let targetElement = e.target;
  if (targetElement === nav) {
    closeNav();
    mobileMenu.classList.toggle("cross");
  }
});
