function Converter() {
  var valorElemento = document.getElementById((id = "valor"));
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");

  var valorConvertido =
    "Resultado do valor convertido em real: R$ " + valorEmReal;

  elementoValorConvertido.innerHTML = valorConvertido;
}
