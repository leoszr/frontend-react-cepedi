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













