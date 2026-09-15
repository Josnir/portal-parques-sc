console.log("Olá, JavaScript!");

let nome = "Tiago";
console.log(nome);

const pais = "Brasil";
console.log(pais);

const cidade = "Florianópolis";
console.log(cidade);

const idade = 20;
console.log(idade);

const estudante = true;
console.log(estudante);

const endereco = null;
let telefone;

console.log(endereco);
console.log(telefone);

console.log(typeof "Tiago")
console.log(typeof 28)
console.log(typeof true)
console.log(typeof null)
console.log(typeof undefined)

const a = 10;
const b = 3;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

console.log(idade > 18)
console.log(idade < 18)
console.log(idade >= 28)
console.log(idade === 28)
console.log(idade === 30)

console.log(idade >= 18 && estudante === true)
console.log(idade < 18 || estudante === true)
console.log(!estudante)

if (idade < 12) {
    console.log("Voce é criança.")
} else if( idade < 18){
    console.log("Voce é adolescente.")
} else{
    console.log("Voce é adulto.")
}

const possuiIngresso = true;

if(idade >= 18 && possuiIngresso === true){
    console.log("Entrada permitida")
} else {
    console.log("Entrada negada")
}

function mostrarMensagem(){
    console.log("Bem-vindo ao Portal dos Parques Estaduais de SC!")
}