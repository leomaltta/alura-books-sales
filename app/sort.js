let btnSortPrice = document.querySelector("#btnOrdenarPorPreco");
btnSortPrice.addEventListener("click", sortBooks);

function sortBooks() {
    let sortedBooks = books.sort((a, b) => a.preco - b.preco);
  renderBooks(sortedBooks);
}
