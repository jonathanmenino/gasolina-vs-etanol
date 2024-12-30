const inputGasolina = document.querySelector(".preco-gasolina > input");
const inputEtanol = document.querySelector(".preco-etanol > input");
const btnCalcular = document.querySelector(".btn-calcular");
const containerResultado = document.querySelector(".container .resultado");
const resultadoCombustivel = document.querySelector(".resultado-combustivel");
const porcentagemMais = document.querySelector(".porcentagem");
const inverso = document.querySelector(".inverso");
const campoInvalido = document.querySelector(".container .invalido");

//FUNÇÃO CALCULAR GASOLINA VS ETANOL
const calcular = (valEtanol, valGasolina) => {
  const x = valEtanol / valGasolina;
  const percentual =
    ((valGasolina / 100 - valEtanol / 75) / (valEtanol / 75)) * 100;
  if (x < 0.7) {
    return ["Etanol", Math.abs(percentual), "gasolina"];
  } else {
    return ["Gasolina", Math.abs(percentual), "etanol"];
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
  if (
    porcentagemMais.innerHTML === "NaN%" ||
    porcentagemMais.innerHTML === "Infinity%" ||
    inputEtanol.value === "0" ||
    inputEtanol.value === "" ||
    inputGasolina.value === "0" ||
    inputGasolina.value === ""
  ) {
    containerResultado.classList.add("inativo");
    campoInvalido.classList.remove("inativo");
  } else {
    containerResultado.classList.remove("inativo");
    campoInvalido.classList.add("inativo");
  }
};

btnCalcular.addEventListener("click", handleButton);
