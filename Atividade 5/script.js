//P1
let a = 1
const b = 2

a = 2
//erro encontrado ao executar a linha abaixo, pois nao e permitido atribuir um novo valor a uma constante
// b = 1
//let declara uma variavel local, const declara uma constante(é imutável) e var define uma variavel global
//P2
//func normal
function soma(a, b) {
	return a + b
}
//reescrevendo a func acima como arrow function
const somaArrow = (a, b) => a + b;

//P3
let nome = "leonardo"
let idade = 22
console.log(`meu nome é ${nome}, eu tenho ${idade} anos`)

//P4
const pessoa = { nome1: "leonardo", idade1: 22, cidade: "Salvador" }
let { nome1, idade1, cidade } = pessoa;
console.log(`me chamo ${nome}, tenho ${idade} anos e moro em ${cidade}`)

//P5
const arr1 = [1, 2, 3]
const arr2 = [...arr1, 4, 5]
console.log(arr2)

function somar(...numeros) {
	let soma = 0
	for (num of numeros) soma += num;
	return soma
}
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

//P6
class Pessoa {
	idadep;
	nomep;
	constructor(idade, nome) {
		this.idadep = idade
		this.nomep = nome
	}
	apresentar() {
		console.log(this.idadep, this.nomep)
	}
}
const person = new Pessoa(22, "Leonardo")
console.log(person.apresentar())







