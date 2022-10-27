const myName = "Rostyslav";
const programmingLanguage = "JavaScript";
const courseCreatorName = "Vladilen Minin";
const reasonText =
  "Хочу изменить свою жизнь. Работать без привязки к конкретному месту. Получить достойную оплату труда и соцпакет";
const numberOfMonth = "0";

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев(а). Я уверен(а), что пройду данный курс до конца!`;
console.log(myInfoText);

myInfoText = myInfoText.replaceAll("JavaScript", "JAVASCRIPT");
console.log(myInfoText);
console.log("myInfoText length:", myInfoText.length);
console.log("myInfoText first symbol:", myInfoText[0]);
console.log("myInfoText last symbol:", myInfoText[myInfoText.length - 1]);

const userName = prompt("Enter your name").trim().toLocaleLowerCase();
alert(`Вас зовут ${userName}`);

const userAge = Number(prompt("Enter your age").trim());
alert(`Вас зовут ${userName} и вам ${userAge} лет`);

const userString = prompt("Enter a string for cutting").trim();
const startSliceIndex = Number(
  prompt("Enter an index to start cutting").trim()
);
const endSliceIndex = Number(prompt("Enter an index to finish cutting").trim());
const string = userString.slice(startSliceIndex, endSliceIndex);
alert(`This is your string - ${string}`);

const userText = prompt("Enter a string for cutting").trim();
const wordFromText = prompt("Enter a word for finish cutting").trim();
const indexOfWord = userText.indexOf(wordFromText);
const cutString = userText.slice(0, indexOfWord);
alert(`This is your string - ${cutString}`);
