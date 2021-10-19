class Commons {
  constructor() {
    return 'ok';
  }

  static getRandom() {
    return Math.random();
  }

  static getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  static getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  static getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static createListFromString(string, separator) {
    let list = string.split(separator).map(item => item.trim());
    return list;
  }

  static getRandomItemFromList(list) {
    return list[Commons.getRandomIntInclusive(0, list.length)];
  }
}