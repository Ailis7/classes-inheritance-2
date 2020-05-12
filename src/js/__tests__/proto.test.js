import Bowman from '../classes/Bowman';
import Swordsman from '../classes/Swordsman';
import Magician from '../classes/Magician';
import Undead from '../classes/Undead';
import Zombie from '../classes/Zombie';
import Daemon from '../classes/Daemon';

test('create Daemon', () => {
  const daemon = new Daemon();
  expect(daemon).toEqual({ attack: 40, defence: 10 });
});

test('create Zombie', () => {
  const zombie = new Zombie();
  expect(zombie).toEqual({ attack: 40, defence: 10 });
});

test('create Undead', () => {
  const undead = new Undead();
  expect(undead).toEqual({ attack: 25, defence: 25 });
});

test('create Magician', () => {
  const magician = new Magician();
  expect(magician).toEqual({ attack: 10, defence: 40 });
});

test('create Swordsman', () => {
  const swordsman = new Swordsman();
  expect(swordsman).toEqual({ attack: 40, defence: 10 });
});

test('create Bowman and levelUp', () => {
  const bowman = new Bowman();
  bowman.levelUp();
  expect(bowman).toEqual({
    attack: 30, defence: 30, health: 100, level: 2,
  });
});

test('dead Bowman', () => {
  const bowman = new Bowman();
  bowman.health = 0;
  expect(() => {
    bowman.levelUp();
  }).toThrowError();
});
