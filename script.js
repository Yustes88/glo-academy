const title = "Glo Academy";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 1000;
const rollback = 28;
const fullPrice = 1000000;
const adaptive = true;

alert("This is a first alert message");
console.log("this is a first console text");

console.log(
  `Title type is ${typeof title}, full price type is ${typeof fullPrice}, adaptive type is ${typeof adaptive}`
);

console.log(screens.length);

// console.log("Стоимость вёрстки экранов " + screenPrice + " рублей/долларов/гривен/юани"); или
console.log(
  `Стоимость вёрстки экранов ${screenPrice} рублей/долларов/гривен/юани`
);

// console.log("Стоимость разработки сайт " + fullPrice + " рублей/долларов/гривен/юани"); или
console.log(
  `Стоимость разработки сайта ${fullPrice} рублей/долларов/гривен/юани`
);

console.log(screens.toLowerCase().split(" "));

console.log(fullPrice * (rollback / 100) + "%");
