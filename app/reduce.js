function calcTotalValue(books) {
  const reducedValue = books
    .reduce((acc, books) => acc + books.preco, 0)
    .toFixed(2);
  accValue = Math.ceil(reducedValue - (reducedValue * 10) / 100,);
  return accValue.toFixed(2);
}
