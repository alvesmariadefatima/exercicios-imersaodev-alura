function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  if (filmeFavorito.endsWith(".jpg")) {
    listarFilmesNaTela(filmeFavorito);
  } else {
    listarFilmesNaTela.innerHTML = "Endereço de filme inválido";
  }
  document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filme) {
  var elementoFilmeFavorito = "<img src=" + filme + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}
