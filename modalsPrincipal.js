// Get the modal
var AtomoM = document.getElementById("AtomoM");
var bicarbonatosM = document.getElementById("bicarbonatosM");
var calcinacaoM = document.getElementById("calcinacaoM");
var densidadeM = document.getElementById("densidadeM");
var solubilidadeM = document.getElementById("solubilidadeM");
var titulacaoM = document.getElementById("titulacaoM");
// Get the button that opens the modal
var Atomo = document.getElementById("Atomo");
var bicarbonatos = document.getElementById("bicarbonatos");
var calcinacao = document.getElementById("calcinacao");
var densidade = document.getElementById("densidade");
var solubilidade = document.getElementById("solubilidade");
var titulacao = document.getElementById("titulacao");

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];
var close2 = document.getElementsByClassName("close")[1];
var close3 = document.getElementsByClassName("close")[2];
var close4 = document.getElementsByClassName("close")[3];
var close5 = document.getElementsByClassName("close")[4];
var close6 = document.getElementsByClassName("close")[5];

// When the user clicks the button, open the modal 
Atomo.onclick = function() {
  if (AtomoM.style.display == "block") {
    AtomoM.style.display = "none";
  }
  else if (AtomoM.style.display == "none" || AtomoM.style.display == "") {
    AtomoM.style.display = "block";
  }
}
bicarbonatos.onclick = function() {
  if (bicarbonatosM.style.display == "block") {
    bicarbonatosM.style.display = "none";
  }
  else if (bicarbonatosM.style.display == "none" || bicarbonatosM.style.display == "") {
    bicarbonatosM.style.display = "block";
  }
}
calcinacao.onclick = function() {
  if (calcinacaoM.style.display == "block") {
    calcinacaoM.style.display = "none";
  }
  else if (calcinacaoM.style.display == "none" || calcinacaoM.style.display == "") {
    calcinacaoM.style.display = "block";
  }
}
densidade.onclick = function() {
  if (densidadeM.style.display == "block") {
    densidadeM.style.display = "none";
  }
  else if (densidadeM.style.display == "none" || densidadeM.style.display == "") {
    densidadeM.style.display = "block";
  }
}
solubilidade.onclick = function() {
  if (solubilidadeM.style.display == "block") {
    solubilidadeM.style.display = "none";
  }
  else if (solubilidadeM.style.display == "none" || solubilidadeM.style.display == "") {
    solubilidadeM.style.display = "block";
  }
}
titulacao.onclick = function() {
  if (titulacaoM.style.display == "block") {
    titulacaoM.style.display = "none";
  }
  else if (titulacaoM.style.display == "none" || titulacaoM.style.display == "") {
    titulacaoM.style.display = "block";
  }
}
// When the user clicks on <span> (x), close the modal
function closeAll(){
  AtomoM.style.display = "none";
  bicarbonatosM.style.display = "none";
  calcinacaoM.style.display = "none";
  densidadeM.style.display = "none";
  solubilidadeM.style.display = "none";
  titulacaoM.style.display = "none";
}
close.onclick = function(){
  closeAll();
}
close2.onclick = function(){
  closeAll();
}
close3.onclick = function(){
  closeAll();
}
close4.onclick = function(){
  closeAll();
}
close5.onclick = function(){
  closeAll();
}
close6.onclick = function(){
  closeAll();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == AtomoM) {
    AtomoM.style.display = "none";
  }
  else if (event.target == bicarbonatosM) {
    bicarbonatosM.style.display = "none";
  }
  else if (event.target == calcinacaoM) {
    calcinacaoM.style.display = "none";
  }
  else if (event.target == densidadeM) {
    densidadeM.style.display = "none";
  }
  else if (event.target == solubilidadeM) {
    solubilidadeM.style.display = "none";
  }
  else if (event.target == titulacaoM) {
    titulacaoM.style.display = "none";
  }
}