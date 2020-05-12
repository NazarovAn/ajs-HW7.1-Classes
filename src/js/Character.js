export default class Character {
  constructor(name) {
    if (name === undefined) {
      throw new Error('name undefiend');
    } if (name.length < 2 || name.length > 10) {
      throw new Error('Имя персонажа должно содержать от двух до десяти символов');
    }
    this.name = name;
    this.level = 1;
    this.health = 100;
  }
}
