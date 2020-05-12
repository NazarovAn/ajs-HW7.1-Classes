import Character from '../Character';

test('new Character', () => {
  const newCharacter = new Character('Пустой');
  expect(newCharacter).toEqual({
    name: 'Пустой', level: 1, health: 100,
  });
});

test('no name Character', () => {
  const newCharacter = () => new Character();
  expect(newCharacter).toThrow(new Error('name undefiend'));
});

test('too short name', () => {
  const newCharacter = () => new Character('a');
  expect(newCharacter).toThrow(new Error('Имя персонажа должно содержать от двух до десяти символов'));
});

test('too long name', () => {
  const newCharacter = () => new Character('AaaaaAaaaaA');
  expect(newCharacter).toThrow(new Error('Имя персонажа должно содержать от двух до десяти символов'));
});
