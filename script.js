const parques = ["Acaraí","Rio Vermelho","Araucarias","Rio Canoas"];
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

const listaParques = document.querySelector("#lista-parques");

console.log(listaParques);

const parquesInfo = [
    {
        nome: "Acaraí",
        cidade: "São Francisco do Sul",
        area: 6667
    },
    {
        nome: "Rio Vermelho",
        cidade: "Florianópolis",
        area: 1532
    }
];

function mostrarParques(lista){
    listaParques.innerHTML = "";

    lista.forEach(function(parque) {
        listaParques.innerHTML += `<div>
            <h3>${parque.nome}</h3>
            <p>${parque.cidade}</p>
            <p>${parque.area} hectares</p>
        </div>`
    });
}

const parquesFloripa = parquesInfo.filter(function(parque) {
    return parque.cidade === "Florianópolis";
});

mostrarParques(parquesFloripa);

const nomesParques = parquesInfo.map(function(parque) {
    return parque.nome.toUpperCase()
});

console.log(nomesParques);

const resumoParques = parquesInfo.map(function(parque) {
    return `${parque.nome} fica em ${parque.cidade} e possui ${parque.area} hectares.`
});

console.log(resumoParques);

const parquesGrandes = parquesInfo.filter(function(parque){
    return parque.area > 2000;
})

const resumosGrandes = parquesGrandes.map(function(parque){
    return `${parque.nome} fica em ${parque.cidade} e possui ${parque.area} hectares.`
})

function mostrarResumo(lista){
    listaParques.innerHTML = "";

    lista.forEach(function(parque) {
        listaParques.innerHTML += `<div>
            <h3>${parque}</h3>
        </div>`
    });
}

mostrarResumo(resumosGrandes)

const parquesPequenos = parquesInfo.filter(function(parque){
    return parque.area <= 2000;
})

console.log(parquesPequenos)

const parqueEncontrado = parquesInfo.find(function(parque){
    return parque.nome === "Acaraí";
})

console.log(parqueEncontrado)

const nomesGrandes = parquesGrandes.map(function(parque){
    return `${parque.nome} - ${parque.cidade}.`
})

nomesGrandes.forEach(function(parque) {
    console.log(parque)
});


/*
const parques = ["Acarai","Rio Vermelho","Araucarias","Rio Canoas"];

console.log(parques)
console.log(parques.length)
console.log(parques[0])
console.log(parques[2])
console.log(parques[3])

parques[0] = "Acaraí"

console.log(parques)

parques.push("Parque Novo") //adiciona no final
console.log(parques) 
console.log(parques.length)
parques.pop() //remove no final
console.log(parques)

parques.shift() //remove no começo
console.log(parques)
parques.unshift("Acaraí") // adiciona no começo
console.log(parques)

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

for(let i = 0; i < 5; i++){
console.log(i);
}

for(let i = 0; i < parques.length; i++){
    console.log(parques[i])
}

for( const parque of parques){
    console.log(`Parque: ${parque}`)
}

let contador = 0;

for( const parque of parques){
    contador++;
    console.log(contador)
}
console.log("Quantidade de parques:" + contador)

parques.forEach(function(parque){
    console.log("Visitando:" + parque)  
});

const parqueEncontrado = parques.find(function(parque){
    return parque === "Rio Vermelho"
})
console.log(parqueEncontrado)

const parquesSelecionados = parques.filter(function(parque){
    return parque.length > 10;
})
console.log(parquesSelecionados);

const parquesInfo = [
    {
        nome: "Acaraí",
        cidade: "São Francisco do Sul",
        area: 6667
    },
    {
        nome: "Rio Vermelho",
        cidade: "Florianópolis",
        area: 1532
    }
];

console.log(parquesInfo)

console.log(parquesInfo[0].nome)
console.log(parquesInfo[1].cidade)

for( const parque of parquesInfo){
    console.log(parque.nome + " - "+ parque.cidade)
}

parquesInfo.forEach(function(parque) {
    console.log(`Parque ${parque.nome} | Area ${parque.area} hectares`)
});

const parquesGrandes = parquesInfo.filter(function(parque){
    return parque.area > 2000;
})

console.log(parquesGrandes)
*/