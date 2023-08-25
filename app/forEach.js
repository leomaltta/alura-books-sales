const bookShelf = document.querySelector("#livros");
const allBooksOffTag = document.querySelector("#valor_total_livros_disponiveis");

function renderBooks(booksList) {
  allBooksOffTag.innerHTML = "";
  bookShelf.innerHTML = "";
  booksList.forEach((book) => {
    let availableBooks =
      book.quantidade > 0 ? "livro__imagens" : "livro__imagens indisponivel";
    bookShelf.innerHTML += `
    <div class="livro">
      <img class="${availableBooks}" src="${book.imagem}" alt="${book.alt}" />
      <h2 class="livro__titulo">
        ${book.titulo}  
      </h2>
      <p class="livro__descricao">${book.autor}</p>
      <p class="livro__preco" id="preco">R$${book.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${book.categoria}</span>
      </div>
    </div>
        `;
  });
}
