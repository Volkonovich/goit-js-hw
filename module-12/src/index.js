// import pnotify from 'pnotify/dist/es/PNotify';
import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';
import PNotifyButtons from '../node_modules/pnotify/dist/es/PNotifyButtons.js';
import debounce from 'lodash.debounce';
import '../node_modules/pnotify/dist/PNotifyBrightTheme.css';

import axios from 'axios';
import './styles.css';
const baseURL = 'https://restcountries.eu/rest/v2/name/';
import template from './template.hbs';

const ulForLi = document.querySelector('ul');
const forInput = document.querySelector('.for');

forInput.addEventListener(
  'input',
  debounce(() => {
    getNews(forInput.value).then(data => {
      let str = '';
      let string = '';

      if (data.data.length === 1) {
        data.data.map(item => {
          string = `<li><h2>${item.name}</h2><h2>Capital - ${
            item.capital
          }</h2><h2>Population - ${item.population}</h2>
      <ul>Languages - ${template(item)}</ul>
      <img src="${item.flag}">
      </li>`;
          ulForLi.innerHTML = string;
        });
      } else if (data.data.length > 10) {
        PNotify.error('Notice me, senpai!');
      } else {
        data.data.map(item => {
          console.log(item);
          str += `<li><h2>${item.name}</h2></li>`;
          ulForLi.innerHTML = str;
        });
      }
    });
  }),
  500,
);

const getNews = name => {
  return axios.get(`${baseURL}${name}`);
};
let string = '';
let languages = '';

// .then(({ data: { name} }) => {
//     console.log(name);
//     const drawNews = articles
//       .map(
//         article =>
//           `<a href="${article.url}" target="_blank"><img width= '400' src='${article.urlToImage}'/></a>`
//       )
//       .join("");
//     console.log(drawNews);
//     refs.newsContainer.insertAdjacentHTML("beforeend", drawNews);
//   })
//   .catch(error => console.error("LoL errrrrror", error));

// axios.defaults.baseURL = "https://restcountries.eu";
// const key = "86efb1d9e5074721b8f151f282c7bcf7";
// ​
// const refs = {
//   form: document.querySelector(".form"),
//   newsContainer: document.querySelector(".newsContainer"),
//   btnContainer: document.querySelector(".btnContainer")
// };
// ​
// ​
// getNews("apple", 3)
//   .then(({ data: { articles } }) => {
//     console.log(articles);
//     const drawNews = articles
//       .map(
//         article =>
//           `<a href="${article.url}" target="_blank"><img width= '400' src='${article.urlToImage}'/></a>`
//       )
//       .join("");
//     console.log(drawNews);
//     refs.newsContainer.insertAdjacentHTML("beforeend", drawNews);
//   })
//   .catch(error => console.error("LoL errrrrror", error));
// ​
// const handleSubmit = evt => {
//   evt.preventDefault();
//   console.log(evt.target.elements[0].value);
//   const getValueForm = evt.target.elements[0].value;
//   getNews(getValueForm, 1).then(({ data: { articles } }) => {
//     console.log(articles);
//     const drawNews = articles
//       .map(article => `<img width= '400' src='${article.urlToImage}'/>`)
//       .join("");
// ​
//     refs.newsContainer.insertAdjacentHTML("beforeend", drawNews);
//   });
// };
// ​
// refs.form.addEventListener("submit", handleSubmit);
// ​
// let count = 0;
// refs.btnContainer.addEventListener("click", evt => {
//   if (evt.target.textContent === "next") {
//     count++;
//   } else if (evt.target.textContent === "prev") {
//     count--;
//   }
// });
// Collapse
