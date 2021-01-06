// Exemplo de listas arrays com as frutas

let frutas = ['maca', 'uva', 'melancia', 'banana', 'caqui'];

function mostraFrutas(item, index){
	let demo = document.getElementById('demo');
  index++;
  demo.innerHTML += index + ". " + item + "<br />";	
}

frutas.forEach(mostraFrutas);

// Exemplo de soma dos números

let numeros = [2, 5, 4, 12, 3, 8];
let contador = 0;
function soma(item){
	let sum = document.getElementById('soma');
	contador += item;
	sum.innerHTML = contador;
}
numeros.forEach(soma);