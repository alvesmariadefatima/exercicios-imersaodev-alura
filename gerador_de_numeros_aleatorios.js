var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto) {
    elementoResultado.inner.html = "Parabéns, você acertou!!!";
  } else if (chute > 0 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número entre 0 e 10.";
  } else {
    elementoResultado.innerHTML =
      "Você errou, o número secreto era " + numeroSecreto;
  }
}
