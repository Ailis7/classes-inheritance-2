export default class Character {
  levelUp() {
    this.level += this.level;
    this.attack *= 1.2;
    this.defence *= 1.2;
    if (this.health > 0) {
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего');
    }
  }
}
