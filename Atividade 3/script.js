//P1
//1.1
let x = 0
x = prompt("escreva um numero")
if (x == 0) {
	console.log("x =0")
} else if (x < 0) {
	console.log("x<0")
} else {
	console.log("x>0")
}
//1.2
x = prompt("insira sua idade")
if (x >= 0 && x <= 12) {
	console.log("crianca")
} else if (x > 12 && x <= 17) {
	console.log("adolescente")
} else if (x > 17 && x <= 59) {
	console.log("adulto")
} else {
	console.log("idoso")
}
//1.3

x = prompt("qual numero quer ver a tabuada?")
for (i = 1; i < 11; i++) {
	console.log(x * i)
}
//1.4
for (i = 1; i <= 50; i++) {
	if (i % 2 == 0) {
		console.log(i, " é par")
	}
}
//1.5
let soma = 0
let count = 0
x = prompt("digite um numero")
do {
	console.log(soma)
	soma += count
	count++
} while (count != x)
//P2
//2.1 
let s = prompt("insira um numero: (2.1)")
s = Number(s)
switch (s) {
	case 1:
		console.log("segunda")
		break;
	case 2:
		console.log("terca")
		break;
	case 3:
		console.log("quarta")
		break;
	case 4:
		console.log("quinta")
		break;
	case 5:
		console.log("sexta")
		break;
	case 6:
		console.log("sabado")
		break;
	case 7:
		console.log("domingo")
		break;
}
//2.2
let fruta = prompt("Digite o nome da fruta:").toLowerCase()

switch (fruta) {
	case "banana":
		console.log("Banana custa R$ 3,00 o quilo")
		break
	case "maca":
		console.log("Maçã custa R$ 4,50 o quilo")
		break
	case "laranja":
		console.log("Laranja custa R$ 2,50 o quilo")
		break
	case "uva":
		console.log("Uva custa R$ 7,00 o quilo")
		break
}
//2.3
let num = Number(prompt("Digite um número de 1 a 12:"))

switch (num) {
	case 1: console.log("Janeiro"); break
	case 2: console.log("Fevereiro"); break
	case 3: console.log("Março"); break
	case 4: console.log("Abril"); break
	case 5: console.log("Maio"); break
	case 6: console.log("Junho"); break
	case 7: console.log("Julho"); break
	case 8: console.log("Agosto"); break
	case 9: console.log("Setembro"); break
	case 10: console.log("Outubro"); break
	case 11: console.log("Novembro"); break
	case 12: console.log("Dezembro"); break
}
//2.4
let opcao = Number(prompt("Menu:\n1 - Hambúrguer\n2 - Pizza\n3 - Refrigerante\n4 - Sair\nEscolha uma opção:"))

switch (opcao) {
	case 1:
		console.log("Você escolheu Hambúrguer")
		break
	case 2:
		console.log("Você escolheu Pizza")
		break
	case 3:
		console.log("Você escolheu Refrigerante")
		break
	case 4:
		console.log("Saindo do menu...")
		break
	default:
		console.log("Opção inválida")
}













