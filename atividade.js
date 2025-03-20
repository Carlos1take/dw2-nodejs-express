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
