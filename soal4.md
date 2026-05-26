## 😸 oldestPet

### Deskripsi

Diberikan sebuah function `oldestPet` yang menerima satu parameter berupa **array of object** berisi daftar hewan peliharaan.

Tugasmu adalah mengembalikan **object hewan dengan usia (age) tertua** dari seluruh data yang diberikan.

---

### Format Function

```javascript
function oldestPet(petList) {
  // Your code here
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
```

### Notes

- Tidak boleh menggunakan built-in function seperti .sort() atau .reduce().
- Gunakan perbandingan age secara manual menggunakan looping (for atau sejenisnya).
- Diasumsikan setidaknya ada 1 hewan di dalam array.
