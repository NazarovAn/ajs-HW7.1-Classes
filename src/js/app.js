import Bowman from './Bowman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Undead from './Undead';
import Zombie from './Zombie';
import Demon from './Demon';

const bow = new Bowman('Bow');
const sword = new Swordsman('Sword');
const mage = new Magician('Mage');
const undead = new Undead('Нежить');
const zombie = new Zombie('Зомби');
const demon = new Demon('Демон');

// eslint-disable-next-line no-console
console.log(bow, sword, mage, undead, zombie, demon);
