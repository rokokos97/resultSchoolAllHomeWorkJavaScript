class Dictionary {
  constructor(name) {
    this.name = name;
    this.words = {};
  }
  add(word, description) {
    if (!this.words[word]) {
      this.words[word] = { word, description };
    }
  }
  remove(word) {
    delete this.words[word];
  }
  get(word) {
    if (this.words[word]) {
      return this.words[word];
    } else {
      return `this word don't find`;
    }
  }
  showAllWords() {
    Object.values(this.words).forEach((item) => {
      console.log(`${item.word} - ${item.description}`);
    });
  }
}

const dictionary = new Dictionary("Толковый словарь");
dictionary.add("JavaScript", "популярный язык программирования");
dictionary.add("JavaScript", "язык программирования");
dictionary.add(
  "Веб-разработчик",
  "Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие"
);
dictionary.remove("JavaScript");
console.log(dictionary.get("JavaScript"));
dictionary.showAllWords();
