const inputGasolina = document.querySelector(".preco-gasolina > input");
const inputEtanol = document.querySelector(".preco-etanol > input");
const btnCalcular = document.querySelector(".btn-calcular");
const containerResultado = document.querySelector(".container .resultado");
const resultadoCombustivel = document.querySelector(".resultado-combustivel");
const porcentagemMais = document.querySelector(".porcentagem");
const inverso = document.querySelector(".inverso");

//FUNÇÃO CALCULAR GASOLINA VS ETANOL
const calcular = (valEtanol, valGasolina) => {
  let x = valEtanol / valGasolina;
  if (x < 0.7) {
    return ["Etanol", (0.7 - x) * 100, "gasolina"];
  } else {
    return ["Gasolina", (x - 0.7) * 100, "etanol"];
  }
};

//FUNÇÃO PORCENTAGEM KM A MAIS

const handleButton = () => {
  const precoEtanol = inputEtanol.value;
  const precoGasolina = inputGasolina.value;
  const melhorCombustivel = calcular(precoEtanol, precoGasolina);
  resultadoCombustivel.innerHTML = melhorCombustivel[0];
  porcentagemMais.innerHTML = `${Math.round(melhorCombustivel[1])}%`;
  inverso.innerHTML = melhorCombustivel[2];

  containerResultado.classList.remove("inativo");
};

btnCalcular.addEventListener("click", handleButton);
