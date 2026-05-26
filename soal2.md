## 🍎 Soal 2: checkFruitStock

### Deskripsi

Buatlah sebuah function `checkFruitStock` yang menerima **2 parameter**:

- `buyer` → object yang berisi informasi pembeli buah
- `fruit` → object yang berisi informasi buah yang ingin dibeli

Tugasmu adalah **mengembalikan nilai boolean** yang menunjukkan apakah jumlah buah yang ingin dibeli oleh pembeli **masih tersedia di stok atau tidak**.

> Perhitungannya: `stock - sold >= buyer.qty`

---

### Contoh Data

```javascript
const budi = {
  name: "Budi",
  qty: 3,
  favoriteFruits: ["Apple", "Mango"],
};

const fruitMango = {
  id: 2,
  name: "Mango",
  sold: 7,
  stock: 15,
};

function checkFruitStock( buyer) fruit,{
  // write code here
}

console.log(checkFruitStock(fruitMango, budi)); // true
/*
  Penjelasan:
  - Buah Mango memiliki total stok 15 dan sudah terjual 7
  - Sisa stok: 15 - 7 = 8
  - Budi ingin membeli 3 buah
  - Karena 8 ≥ 3, maka masih tersedia
  - Maka fungsi mengembalikan true
*/
```
