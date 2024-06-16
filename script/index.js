/** @format */

let nav = document.getElementsByTagName("nav")[0];
let openMenu = document.querySelector(".open_menu");
let closeMenu = document.querySelector(".close_menu");

openMenu.addEventListener("click", () => {
  nav.classList.add("navbarr_Js");
  openMenu.classList.add("close_menu_js_effet");
});
closeMenu.addEventListener("click", () => {
  nav.classList.remove("navbarr_Js");
  openMenu.classList.remove("close_menu_js_effet");
});
/******************************links (tous les liens)**************** */
let links = document.querySelectorAll(".link");
for (let z = 0; z < links.length; z++) {
  links[z].addEventListener("click", () => {
    nav.classList.remove("navbarr_Js");
    openMenu.classList.remove("close_menu_js_effet");
  });
}
