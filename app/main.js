let books = [];
const endpointAPI =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getGetAPIBooks();

async function getGetAPIBooks() {
  const res = await fetch(endpointAPI);
  books = await res.json();
  let offBooks = addOff(books);

  renderBooks(books);
}
