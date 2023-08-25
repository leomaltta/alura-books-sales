function addOff(books) {
  const off = 0.3;
  offBooks = books.map((book) => {
    return { ...book, preco: book.preco - book.preco * off };
  });
  return offBooks;
}
