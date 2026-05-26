function oldestPet(petList) {
  let result = {};
  let ageTemp = 0;
  for (let i = 0; i < petList.length; i++) {
    if (petList[i].age > ageTemp) {
      ageTemp = petList[i].age;
      result = petList[i];
    }
  }

  return result;
}

const allPets = [
  { name: "Milo", species: "Cat", owner: "Alya", age: 2 },
  { name: "Buddy", species: "Dog", owner: "Rafi", age: 5 },
  { name: "Chika", species: "Parrot", owner: "Nina", age: 3 },
  { name: "Nemo", species: "Fish", owner: "Budi", age: 1 },
  { name: "Kiki", species: "Rabbit", owner: "Tari", age: 4 },
  { name: "Oscar", species: "Dog", owner: "Fajar", age: 7 },
  { name: "Luna", species: "Cat", owner: "Salsa", age: 6 },
];

console.log(oldestPet(allPets));
/*
    {
        name: 'Oscar',
        species: 'Dog',
        owner: 'Fajar',
        age: 7
    }
*/
