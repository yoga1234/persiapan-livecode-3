function findBooks(genres) {
  const books = [
    { id: 1, title: "The Hobbit", genre: "Fantasy", sold: 90, stock: 100 },
    { id: 2, title: "Clean Code", genre: "Programming", sold: 45, stock: 50 },
    {
      id: 3,
      title: "The Pragmatic Programmer",
      genre: "Programming",
      sold: 20,
      stock: 25,
    },
    { id: 4, title: "Twilight", genre: "Romance", sold: 100, stock: 100 },
    {
      id: 5,
      title: "The Fault in Our Stars",
      genre: "Romance",
      sold: 10,
      stock: 40,
    },
    { id: 6, title: "Atomic Habits", genre: "Self-help", sold: 60, stock: 100 },
    { id: 7, title: "Deep Work", genre: "Self-help", sold: 30, stock: 50 },
  ];

  let result = [];
  for (let i = 0; i < genres.length; i++) {
    for (let j = 0; j < books.length; j++) {
      if (genres[i] === books[j].genre) {
        result.push(books[j]);
      }
    }
  }

  return result;
}

console.log(findBooks(["Programming", "Self-help"]));
/*
[
  { id: 2, title: 'Clean Code', genre: 'Programming', sold: 45, stock: 50 },
  { id: 3, title: 'The Pragmatic Programmer', genre: 'Programming', sold: 20, stock: 25 },
  { id: 6, title: 'Atomic Habits', genre: 'Self-help', sold: 60, stock: 100 },
  { id: 7, title: 'Deep Work', genre: 'Self-help', sold: 30, stock: 50 }
]
*/
