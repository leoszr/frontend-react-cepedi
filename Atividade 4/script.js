//Parte 1
//1.1
nomes = ["bill", "miguel", "xico", "boi", "matheo"]
//1.2
console.log(nomes)
for (i = 0; i < nomes.length; i++) {
	if (i % 2 == 0) {
		console.log(nomes[i]);
	}
}
//1.3
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0
for (i in numeros) {
	sum += numeros[i]
}
console.log(sum);
//1.4
testeNome = prompt("insira um nome")

for (i = 0; i < nomes.length; i++) {
	if (testeNome == nomes[i]) {
		console.log(`acertou o nome: ${testeNome}`);
	}
}
numeros.sort((a, b) => b - a);
console.log(numeros)
//PArte 2
//2.1
let pessoa = {
	nome: "Leonardo",
	idade: 22,
	profissao: "Estudante"
}

console.log(pessoa.nome, pessoa.idade, pessoa.profissao)
//2.2
let carro = {
	modelo: "Civic",
	ano: 2020,
	cor: "Preto",
	info: function() {
		console.log(`O carro é um ${this.modelo}, ano ${this.ano}, cor ${this.cor}.`)
	}
}

carro.info()
//2.3
let alunos = [
	{ nome: "Ana", nota: 9 },
	{ nome: "João", nota: 6 },
	{ nome: "Maria", nota: 8 }
]

for (let aluno of alunos) {
	if (aluno.nota >= 7) {
		console.log(aluno.nome, aluno.nota)
	}
}
//2.4
let cliente = { nome: "Carlos", idade: 30 }
cliente.endereco = "Rua A, 123"
console.log(cliente)
//2.5
let produto = {
	nome: "Notebook",
	preco: 2500,
	quantidade: 3
}

function valorTotal(p) {
	return p.preco * p.quantidade
}

console.log(valorTotal(produto))

//P3
//3.1
function soma(a, b) {
	return a + b
}
console.log(soma(1, 2))

//3.2
function parImpar(num) {
	return num % 2 == 0 ? "par" : "impar"
}
console.log(parImpar(5))

//3.3


function maiorNum(arr) {
	let maior = arr[0]
	for (num of arr) {
		if (maior < num) {
			maior = num
		}
	}
	return maior
}
console.log(maiorNum([1, 4, 5, 0, 100]))

//3.4
function bemVindo(nome) {
	return `bem-vindo, ${nome}!`
}
bemVindo("JOAO")

//3.5
function fatorial(num) {
	let temp = num
	for (i = num - 1; i > 0; i--) {
		temp *= i
	}
	return temp
}
console.log(fatorial(5))






