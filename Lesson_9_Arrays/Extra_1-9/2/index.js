showSuccessMessage = (message) => {
  console.log(message);
};
showErrorMessage = (message) => {
  console.error(message);
};
checkTextOnErrorSymbol = (
  text,
  errorSymbol,
  successCallback,
  errorCallback
) => {
  let indexErrorSymbol = text.indexOf(errorSymbol);
  if (indexErrorSymbol === -1) {
    errorCallback(`В данном тексте нет запрещенных символов`);
  } else {
    for (let i = 0; i <= text.length; i++) {
      if (text[i] === errorSymbol) {
        successCallback(
          `Найден запрещенный символ "${errorSymbol}" под индексом ${i}`
        );
      }
    }
  }
};
const text = "Привет! Как дела! Давно мы с тобой не виделись.";
checkTextOnErrorSymbol(text, "а", showSuccessMessage, showErrorMessage);
