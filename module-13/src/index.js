// import { Link, animateScroll as scroll } from "react-scroll";
import axios from "axios";
import "../components/data";
import getNewData from "../components/data";
import getMoreData from "../components/MoreData";

axios.defaults.baseURL = "https://pixabay.com/api/";
const key = "14452774-766286a273532ef73a45b39e7";
const input = document.querySelector("form");
const gallery = document.querySelector(".gallery");
const btnMore = document.querySelector(".more");

const state = {
  currentPage: 0,
  inputValue: ""
};

const getData = (name, page) => {
  return axios
    .get(
      `?image_type=photo&orientation=horizontal&q=${name}&page=${page}&per_page=12&key=${key}`
    )
    .then(data => (gallery.innerHTML = getNewData(data)));
};

input.addEventListener("submit", e => {
  e.preventDefault();
  state.currentPage = 1;
  state.inputValue = e.target.query.value;
  getData(state.inputValue, state.currentPage);
});

btnMore.addEventListener("click", () => {
  const getMoreData = (name, page) => {
    return axios
      .get(
        `?image_type=photo&orientation=horizontal&q=${name}&page=${page}&per_page=12&key=${key}`
      )

      .then(data => (gallery.innerHTML += getNewData(data)));
  };

  state.currentPage += 1;
  getMoreData(state.inputValue, state.currentPage).then(() => {
    const poza = btnMore.offsetTop;
    window.scrollTo({
      top: poza,
      behavior: "smooth"
    });
  });
});
