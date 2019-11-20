"use strict";

import galleryItems from "./gallery-items.js";

const ul = document.querySelector(".js-gallery");
const lightBox = document.querySelector(".lightbox");
const lightImg = document.querySelector(".lightbox__image");

let string = "";
galleryItems.forEach(e => {
  string += `<li class="gallery__item">
  <a
    class="gallery__link"
  >
    <img
      class="gallery__image" 
      src="${e.preview}"
      data-source="${e.original}"
      alt="Tulips"
    />

    <span class="gallery__icon">
      <i class="material-icons">zoom_out_map</i>
    </span>
  </a>
</li>`;
});

ul.insertAdjacentHTML("afterbegin", string);

const clickFunc = e => {
  const target = e.target;
  if (target.nodeName === "IMG") {
    lightBox.classList.add("is-open");
    lightImg.setAttribute("src", target.dataset.source);
  }
};

const lightFunc = e => {
  const target = e.target;
  if (target.nodeName === "BUTTON" || target.nodeName === "I") {
    lightBox.classList.remove("is-open");
    lightImg.setAttribute("src", "");
  }
};
ul.addEventListener("click", clickFunc);
lightBox.addEventListener("click", lightFunc);
