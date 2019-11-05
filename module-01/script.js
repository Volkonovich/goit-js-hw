'use strict';

1

console.log(`вибран ${name}, цена за штуку ${price} кредитов`)

price = 2000; 

console.log(`вибран ${name}, цена за штуку ${price} кредитов`);



2

const total = 100;

const ordered = Number(prompt("введите количество товара")); 

if ( ordered > 100) {
   alert("На складе недостаточно твоаров!");
}
else
{
    alert("Заказ оформлен, с вами свяжется менеджер!");
}

3

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

let input = prompt ('введите пароль');

if (input === null){
    alert('Отменено пользователем!');
}else if (input === 'jqueryismyjam') {
    alert('Добро пожаловать!');
}else{
    alert('Доступ запрещен, неверный пароль!');
}


4

 let credit = 23580;
 let pricePerDroid = 3000;
 let totalPrice;

 let input = Number(prompt('введите количество дроидов'));

 console.log(Number.isNaN(input));

 if (input === 0){
    alert('Отменено пользователем!');
 }
    else {

        if (Number.isNaN(input)) {
            alert('введите правильно количество!');

        } else {
            totalPrice = input*pricePerDroid;
            if (totalPrice > credit){
                alert('STOP');
            } else {
                credit = credit - totalPrice;
                alert(`вы купили ${input}, осталось ${credit} кредитов`);
            }
        } 
    } 


5


const china = 'Китай';
const chilli = 'Чилли';
const australl = 'Австралия';
const india = 'Индия';
const delivChina  = 100;
const delivChilli = 250;
const delivAustrall = 170;
const delivIndia = 80;


const input = prompt('Введите вашу страну').toLowerCase();

switch (input) {
    case china.toLowerCase():
    alert (`доставка в ${china}, будет стоять ${delivChina} кредитов`);
    break;  
    case chilli.toLowerCase():
    alert (`доставка в ${chilli}, будет стоять ${delivChilli} кредитов`);
    break;
    case australl.toLowerCase():
    alert (`доставка в ${australl}, будет стоять ${delivAustrall} кредитов`);
    break; 
    case india.toLowerCase():
   alert (`доставка в ${india}, будет стоять ${delivIndia} кредитов`);
     break;
     default:
         alert ('в вашу страну нет доставки');

}



6


let input;
let total = 0;
do {
  input = Number(prompt("введите число"));

  if (input === 0){
    break;
  } else if (Number.isNaN(input)){
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }else {
    total += input;
  }

} while (1);
  alert(`Общая сумма чисел равна${total}`);










