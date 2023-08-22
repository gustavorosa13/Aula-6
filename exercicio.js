/*
* Gustavo Gonçalves da Rosa
*
*/ 

/*
*1. a10, b5
*2. a20, b10, c10
*3. p = cargaHorária, t = rendaDiária
;.;;
*/

// Exercícios escrita de código - 1


let nome = "Gustavo";
let idade = "17"; 

console.log(typeof nome)
console.log(typeof idade)

/*
*d. Foi impresso como "Undefined", pois nenhum valor foi atribuido
*f. Os valores foram reconhecidos como "String" após atribuir valor á eles
*/ 

console.log("Olá", nome ,"Você tem", idade, "anos");

// Exercícios escrita de código - 2

/*
let perguntaUm = prompt("Você está usando roupa preta hoje?");
let perguntaDois = prompt("Você tomou café da manhã hoje?");
let perguntaTrês = prompt("Você praticou algum esporte recentemente?");

console.log("Você está usando roupa preta hoje?", perguntaUm, "Você tomou café da manhã hoje?", perguntaDois, "Você praticou algum esporte recentemente?", perguntaTrês);
*/

// Exercícios escrita de código - 3

let a = 10;
let b = 25;
let c;

c = a;
a = b;
b = c;

// Aqui faremos uma lógica para trocar os valores

//Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a); // o novo valor de a é 25
console.log("O novo valor de b é", b); // o novo valor de b é 10

let numeroUm = "2";
let numeroDois = "4";
numeroUm = Number(numeroUm);
numeroDois = Number(numeroDois);
console.log(numeroUm+numeroDois);
console.log(numeroUm*numeroDois);


