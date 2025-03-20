//CLASSES NO JAVASCRIPT
class Carro {
  // Nome de classes devem iniciar com a primeira leta maiuscula.
  //ATRIBUTOS
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  //METODOS
  buzinar() {
    return "Beep! Beep!";
  }
}

// Criando uma instancia (objeto) da classe Carro
const carroPopular = new Carro("Fiat", "Uno", "2012");
console.log(
  `O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano ${
    carroPopular.ano
  }e faz ${carroPopular.buzinar()}`
);

//INSTANCIA carroEsportivo
const carroEsportivo = new Carro();
carroEsportivo.marca = "Chevrolet";
carroEsportivo.modelo = "Camaro";
carroEsportivo.ano = "2024";

console.log(
  `O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano ${
    carroEsportivo.ano
  } e faz ${carroEsportivo.buzinar()}`
);

//ADICIONANDO UM NOVO ATRIBUTO
carroEsportivo.corNeon = "Azul";

//ADICIONANDO UM NOVO METODO
carroEsportivo.turbo = function () {
  return "Vrumm! O carro esta acelerando!!";
};

console.log(
  `O carro ${carroEsportivo.marca} ${carroEsportivo.modelo} tem neon da cor ${
    carroEsportivo.corNeon
  }. ${carroEsportivo.turbo()}`
);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MANIPULANDO DATAS NO JAVASCRIPT
const dataAtual = new Date()
  console.log(typeof(dataAtual))

  // Pegando o dia atual
  const dia = dataAtual.getDate()
  console.log(`Hoje é dia ${dia}.`)

  // Pegando o mês atual
  const mes = dataAtual.getMonth()+1
  console.log(`Estamos no mês ${mes}.`)

  // Pegando o ano atual
  const ano = dataAtual.getFullYear();
  console.log(`Estamos no ano ${ano}.`)

  // ADICIONANDO DIAS, MESES E ANOS A DATA ATUAL
  // ADICONAR 10 DIAS A DATA ATUAL

  dataAtual.setDate(dataAtual.getDate() + 10)
  //EXIBE A NOVA DATA
  console.log(`Daqui a 10 dias será dia ${dataAtual.getDate()}.`)

  //ADICIONAR 3 MESES A DATA ATUAL
  dataAtual.setMonth(dataAtual.getMonth() + 3);
  //EXIBE O NOVO MES
  console.log(`Daqui a 3 meses sera mês ${dataAtual.getMonth() + 1}.`);

  //ADICIONAR 2 ANOS A DATA ATUAL
  dataAtual.setFullYear(dataAtual.getFullYear() + 2)
;
console.log(`Daqui a 2 anos será ${dataAtual.getFullYear()}.`);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TRABALHANDO COM MOEDAS NO JAVASCRIPT

let salario = 2500.30
console.log(salario);
//Mostrando as casas decimais
console.log(salario.toFixed(2));
// Ocultando as casas decimais
console.log(salario.toFixed(0));
// Alterando marcador de casa decimal
console.log(salario.toFixed(2).replace('.', ','));

// Formatação de moedas
// Mostrando o salario em REAL (R$)
console.log(salario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}));

// Mostrando o salário  em Dólar (USD)
console.log(salario.toLocaleString('en-us', {style: 'currency', currency: 'USD'}));

// CONVERTENDO DE REAL PARA DÓLAR
const salarioDolar = salario * 0.176
console.log(salarioDolar.toLocaleString('en-us', {style: 'currency', currency: 'USD'}));

// MOSTRANDO O SALÁRIO EM EURO (EUR)
console.log(salario.toLocaleString('pt-br', {style: 'currency', currency: 'EUR'}));

//////////////////////////////////////////////////////////////////////////////////////////
// FORMATAÇÃO DE STRING
const nome = "Carlos Eduardo"

// ALTERNANDO PARA LETRAS MAIUSCULAS
console.log(nome.toUpperCase());

// ALTERNANDO PARA LETRAS MINUSCULAS
console.log(nome.toLowerCase());

// CONTANDO CARACTERES DE UMA STRING
console.log(nome.length);

// REMOVENDO ESPAÇOS
const novoNome = nome.replace(/\s/g, "")
console.log(novoNome);
console.log(novoNome.length);