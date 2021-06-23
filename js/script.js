alert("Hello!");

// Obtém hora atual
var data = new Date();
// Guarda cada parte em uma variável
var dia = data.getDate(); // 1-31
var mes = data.getMonth(); // 0-11 (zero=janeiro)
var ano4 = data.getFullYear(); // 4 dígitos
var str_data =
  dia +
  "/" +
  (data.getMonth() < 9 ? "0" : "") +
  (data.getMonth() + 1) +
  "/" +
  ano4;

//Número Aleatório
$(document).ready(function () {
  if (localStorage.quantidadeAleatoria == undefined) {
    var quantidadeAleatoria = random(250, 350);
    localStorage.quantidadeAleatoria = quantidadeAleatoria;
    $(".quantidade").append(localStorage.quantidadeAleatoria);
  } else {
    localStorage.quantidadeAleatoria = localStorage.quantidadeAleatoria - 2;
    $(".quantidade").append(localStorage.quantidadeAleatoria);
  }
});

var random = function (start, end) {
  return Math.floor(Math.random() * (end - start + 1) + start);
};

// Scroll
function scrollKits() {
  document.getElementById("peca-agora").scrollIntoView({
    behavior: "smooth",
  });
}
