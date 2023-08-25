const btns = document.querySelectorAll(".btn");
btns.forEach((btn) => btn.addEventListener("click", bookFilter));

function bookFilter() {
  const clickedBtn = document.getElementById(this.id);
  const category = clickedBtn.value;
  let filteredBooks =
    category == "disponivel" ? availabilityFilter() : categoryFilter(category);
  renderBooks(filteredBooks);
  if (category == "disponivel") {
    const totalValue = calcTotalValue(filteredBooks);
    showAllBooksOffTag(totalValue);
  }
}

function categoryFilter(category) {
  return books.filter((book) => book.categoria == category);
}

function availabilityFilter() {
  return books.filter((book) => book.quantidade > 0);
}

function showAllBooksOffTag(totalValue) {
  allBooksOffTag.innerHTML = `
      <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${totalValue}</span></p>
    </div>
  `;
}
