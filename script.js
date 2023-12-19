


const TituloPrincipal = document.getElementById("Name-User");

const Messegens = [
  "Welcome to my portfolio",
  "My name is Michael",
  "I'm a full stack developer",
];

let indexAtual = 0;

function Animetion() {
  TituloPrincipal.innerHTML = Messegens[indexAtual];

  indexAtual = (indexAtual + 1) % Messegens.length;
}

let intervaloTroca = setInterval(Animetion, 2000);

setTimeout(function () {
  clearInterval(intervaloTroca);
  TituloPrincipal.innerHTML = "Welcome to my portfolio";
}, 10000);
