## 🎮 Soal 3: getGameRecommendations

### Deskripsi

Buatlah sebuah function `getGameRecommendations` yang menerima sebuah parameter berupa **object `gamer`**.

Fungsi ini harus mengembalikan **array of object** berisi kumpulan game yang memenuhi 2 kriteria berikut:

1. Genre game sesuai dengan **favoriteGenres** milik gamer
2. Stok game cukup untuk dibeli, yaitu:  
   `stock - sold >= gamer.qty`

> Gunakan function bernama `checkGameStock(game, gamer)` untuk memisahkan logika pengecekan ketersediaan stok.

---

### Test Case

```javascript
function getGameRecommendations(gamer) {
  const games = [
    { id: 1, title: "Elden Ring", genre: "RPG", sold: 45, stock: 50 },
    { id: 2, title: "FIFA 24", genre: "Sports", sold: 80, stock: 100 },
    { id: 3, title: "The Sims 4", genre: "Simulation", sold: 25, stock: 30 },
    { id: 4, title: "Call of Duty", genre: "Shooter", sold: 90, stock: 120 },
    {
      id: 5,
      title: "Stardew Valley",
      genre: "Simulation",
      sold: 60,
      stock: 62,
    },
    { id: 6, title: "NBA 2K24", genre: "Sports", sold: 60, stock: 70 },
  ];

  // write code here
}

console.log(
  getGameRecommendations({
    name: "Dimas",
    qty: 5,
    favoriteGenres: ["Sports", "Simulation"],
  })
);

/*
[
  { id: 2, title: 'FIFA 24', genre: 'Sports', sold: 80, stock: 100 },
  { id: 3, title: 'The Sims 4', genre: 'Simulation', sold: 25, stock: 30 },
  { id: 6, title: 'NBA 2K24', genre: 'Sports', sold: 60, stock: 70 }
]

Penjelasan
- Dimas ingin beli 5 game
- Genre favorit: Sports, Simulation
- Cek tiap game:
    ✅ FIFA 24 → 20 stok tersedia
    ✅ The Sims 4 → 5 stok tersedia
    ❌ Stardew Valley → 2 stok tersedia (tidak cukup untuk dibeli karena dimas ingin membeli 5 game)
    ✅ NBA 2K24 → 10 stok tersedia
- Semua yang lolos genre & stok ditampilkan
*/
```
