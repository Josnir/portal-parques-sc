/*console.log("Olá, JavaScript!");

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

function saudacao(nome){
    console.log("Olá " + nome + "!");
}

 saudacao("Tiago");
 saudacao("Maria");
 saudacao("João");

 function somar(a, b){
    return a + b;
 }
const resultado = somar(10, 5);

console.log(resultado)

function calcularDobro(c){
    return c * 2;
}

console.log(calcularDobro(8))

const nomeUsuario = prompt("Qual seu nome?")
console.log(nomeUsuario);

const idadeUsuario = Number(prompt("Qual é sua idade?"));
console.log(idadeUsuario);
console.log(typeof idadeUsuario)

const idadePessoa = Number(prompt("Qual a idade:"));

if (idadePessoa >= 18){
    console.log("De maior!")
} else {
    console.log("De menor!")
}
*/
const titulo = document.querySelector("#titulo-js");

if (titulo) {
    titulo.textContent = "Parques de Santa Catarina";
    titulo.classList.add("titulo-destaque");
}


const botao = document.querySelector("#botao-parque");

if (botao) {
    botao.addEventListener("click", function() {
        console.log("Botão clicado!");
    });
}


const botaoParque = document.querySelector("#botao-parque");
const mensagemParque = document.querySelector("#mensagem-parque");

if (botaoParque && mensagemParque) {
    botaoParque.addEventListener("click", function() {
        mensagemParque.textContent = "Explore os Parques Estaduais de Santa Catarina!";
    });
}


const botaoAcarai = document.querySelector("#botao-acarai");
const infoAcarai = document.querySelector("#info-acarai");

console.log("Botão:", botaoAcarai);
console.log("Informação:", infoAcarai);

if (botaoAcarai && infoAcarai) {
    botaoAcarai.addEventListener("click", function() {
        infoAcarai.textContent = "O Parque Estadual Acaraí está localizado no município de São Francisco do Sul, em Santa Catarina.";
    });
}

const botaoRioVermelho = document.querySelector("#botao-rio-vermelho");
const infoRioVermelho = document.querySelector("#info-rio-vermelho");

console.log("Botão:", botaoRioVermelho);
console.log("Informação:", infoRioVermelho);

if (botaoRioVermelho && infoRioVermelho) {
    botaoRioVermelho.addEventListener("click", function(){
        infoRioVermelho.textContent = "O Parque Estadual do Rio Vermelho esta localizado no município de Florianópolis, capital de Santa Catarina."
    });
}

function mostrarParque(nome){
    console.log("Conheça o Parque Estadual "+ nome +"!")
}

mostrarParque("Acaraí");
