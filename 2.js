const budi = {
  name: "Budi",
  qty: 3,
  favoriteFruits: ["Apple", "Mango"],
};

const fruitMango = {
  id: 2,
  name: "Mango",
  sold: 14,
  stock: 15,
};

function checkFruitStock(fruit, buyer) {
  let sisaStock = fruit.stock - fruit.sold;

  if (buyer.qty < sisaStock) {
    return true;
  }

  return false;
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
