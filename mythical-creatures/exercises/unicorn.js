class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || 'white';
  }

  isWhite() {
    return false;
  }
  says(string) {
    return `**;* ${string} *;**`;

  }
}

module.exports = Unicorn;
