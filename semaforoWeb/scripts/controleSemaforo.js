//Controle Manual do Semaforo
function vermelhoCor(){

	var painel = document.getElementById("painel");
	
		painel.innerHTML = "<p align=\"center\">" +
		"<img src=\"imagens/vermelho.png\" width=\"140\"></p>";
}
function amareloCor(){
	var painel = document.getElementById("painel");
	
		painel.innerHTML = "<p align=\"center\">" +
		"<img src=\"imagens/amarelo.png\" width=\"140\"></p>";
}
function verdeCor(){
	var painel = document.getElementById("painel");
	
		painel.innerHTML = "<p align=\"center\">" +
		"<img src=\"imagens/verde.png\" width=\"140\"></p>";
}
//Controle Automatico do Semaforo
var myVar = setInterval(controleTempo, 18000) 

function controleTempo() {
	
	  	setTimeout(tempoUm, 8000)
	  	setTimeout(tempoDois, 7000)
	  	setTimeout(tempoTres, 3000)   

		}
		function tempoUm() {
		  document.getElementById("painel").innerHTML = "<p align=\"center\"><img src=\"imagens/vermelho.png\" width=\"140\"></p>";
		}
		function tempoDois() {
		  document.getElementById("painel").innerHTML = "<p align=\"center\"><img src=\"imagens/amarelo.png\" width=\"140\"></p>";
		}
		function tempoTres() {
		  document.getElementById("painel").innerHTML = "<p align=\"center\"><img src=\"imagens/verde.png\" width=\"140\"></p>";
		}
	
function parar() {
  clearInterval(myVar)
}
