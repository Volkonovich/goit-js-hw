// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories,
//  найдет и выведет в консоль текст заголовка элемента (тега h2)
//  и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

// ________1__________________

// const categoriesList = document.querySelector("#categories");

// console.log(`в списке ${categoriesList.children.length} категорий`);

// const liItem = document.querySelectorAll(".item");
// console.log(liItem);
// liItem.forEach((
//   element //в елемент записується все з що е в liItem
// ) =>
//   console.log(
//     element.firstElementChild.innerText, // element => виводимо текст його першоі дитини
//     element.lastElementChild.children.length // element => виводимо досжину(список) останньоі дитини .item
//   )
// );
// console.log(liItem);

//______2_______________
// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива
//  ingredients создаст отдельный li, после чего вставит
//  все li за одну операцию в список ul.ingredients.
//   Для создания DOM-узлов используй document.createElement().

// const ingredients = [
//   "Картошка",
//   "Грибы",
//   "Чеснок",
//   "Помидоры",
//   "Зелень",
//   "Приправы"
// ];

// const ul = document.querySelector("#ingredients");
// ingredients.forEach(elem => {
//   const li = document.createElement("LI");
//   li.innerText = elem;
//   ul.appendChild(li);
// });

// ___________3____________

// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li.
//  Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через
// css-классы.
const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"
  }
];
//__________
// let ulGallery = document.querySelector("#gallery");

// images.forEach(elem => {
//   ulGallery.innerHTML += `<li><img width='400px' src=${elem.url} alt= ${elem.alt}></li>`;
// });
// //___________

// let ulGallery = document.querySelector("#gallery");

// images.forEach(elem => {
//   ulGallery.insertAdjacentHTML(
//     "afterbegin",
//     `<li><img width='400px' src=${elem.url} alt= ${elem.alt}></li>`
//   );
// });

//_______4_________

// Счетчик состоит из спана и кнопок, которые должны увеличивать
// и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится
// текущее значение счетчика.
// Создай функции increment и decrement для увеличения и
//  уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и
// обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// const btn = document.querySelector("#counter");
// const counterValue = document.querySelector("#value");
// const btnLast = btn.lastElementChild;
// const btnFirst = btn.firstElementChild;
// console.log(counterValue);

// btnLast.onclick = function() {
//   counterValue.innerText++;
// };

// btnFirst.onclick = function() {
//   counterValue.innerText--;
// };

// ________5___________

// Напиши скрипт который, при наборе текста в инпуте
//  input#name-input (событие input), подставляет его
//  текущее значение в span#name-output. Если инпут пустой,
//   в спане должна отображаться строка 'незнакомец'.

// const forInput = document.querySelector("#name-input");
// const forOutput = document.querySelector("#name-output");

// forInput.oninput = function() {
//   if (forInput.value !== "") {
//     forOutput.innerText = forInput.value;
//   } else {
//     forOutput.innerText = "незнакомец";
//   }
// };

//___________6____________

// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// // Сколько символов должно быть в инпуте, указывается в
//  его атрибуте data-length.
// // Если введено подходящее количество, то border инпута
// становится зеленым, если неправильное - красным.
// // Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
// //   border-color: #f44336;
// }

// const input = document.querySelector("#validation-input");
// const pattern = /^[a-zA-Z0-9]{6,}$/;

// input.addEventListener("blur", () => {
//   if (input.value === "") {
//     input.setAttribute("class", "validation-input");
//   } else if (pattern.test(input.value)) {
//     input.setAttribute("class", "valid");
//   } else {
//     input.setAttribute("class", "invalid");
//   }
// });

// _____7__________

// const slider = document.querySelector("#font-size-control");
// const output = document.querySelector("#text");

// slider.oninput = function() {
//   output.style.fontSize = `${slider.value}px`;
// };
