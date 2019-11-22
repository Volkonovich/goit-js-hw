import "./styles.css";
import arr from "./menu.json";
import template from "./template.hbs";

const ul = document.querySelector(".js-menu");

const string = template(arr);
ul.innerHTML = string;

const forBody = document.querySelector("body");
const switcher = document.querySelector("input.js-switch-input");

forBody.classList.add(localStorage.getItem("theme"));

if (localStorage.getItem("theme") === "dark-theme") {
  switcher.checked = true;
}

switcher.addEventListener("click", () => {
  if (switcher.checked) {
    forBody.classList.remove("light-theme");
    forBody.classList.add("dark-theme");
    localStorage.setItem("theme", "dark-theme");
  } else {
    forBody.classList.remove("dark-theme");
    forBody.classList.add("light-theme");
    localStorage.setItem("theme", "light-theme");
  }
});
