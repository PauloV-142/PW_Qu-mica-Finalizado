// Get the modal
var AtomoM = document.getElementById("AtomoM");
var bicarbonatosM = document.getElementById("bicarbonatosM");
var calcinacaoM = document.getElementById("calcinacaoM");
var densidadeM = document.getElementById("densidadeM");
var solubilidadeM = document.getElementById("solubilidadeM");
var titulacaoM = document.getElementById("titulacaoM");
var alcanosM = document.getElementById("alcanosM");
var aldeidosM = document.getElementById("aldeidosM");
var acidosM = document.getElementById("acidosM");
var balancaM = document.getElementById("balancaM");
// Get the button that opens the modal
var Atomo = document.getElementById("Atomo");
var bicarbonatos = document.getElementById("bicarbonatos");
var calcinacao = document.getElementById("calcinacao");
var densidade = document.getElementById("densidade");
var solubilidade = document.getElementById("solubilidade");
var titulacao = document.getElementById("titulacao");
var alcanos = document.getElementById("alcanos");
var aldeidos = document.getElementById("aldeidos");
var acidos = document.getElementById("acidos");
var balanca = document.getElementById("balanca");

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];
var close2 = document.getElementsByClassName("close")[1];
var close3 = document.getElementsByClassName("close")[2];
var close4 = document.getElementsByClassName("close")[3];
var close5 = document.getElementsByClassName("close")[4];
var close6 = document.getElementsByClassName("close")[5];
var close7 = document.getElementsByClassName("close")[6];
var close8 = document.getElementsByClassName("close")[7];
var close9 = document.getElementsByClassName("close")[8];
var close10 = document.getElementsByClassName("close")[9];

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
alcanos.onclick = function() {
  if (alcanosM.style.display == "block") {
    alcanosM.style.display = "none";
  }
  else if (alcanosM.style.display == "none" || alcanosM.style.display == "") {
    alcanosM.style.display = "block";
  }
}
aldeidos.onclick = function() {
  if (aldeidosM.style.display == "block") {
    aldeidosM.style.display = "none";
  }
  else if (aldeidosM.style.display == "none" || aldeidosM.style.display == "") {
    aldeidosM.style.display = "block";
  }
}
acidos.onclick = function() {
  if (acidosM.style.display == "block") {
    acidosM.style.display = "none";
  }
  else if (acidosM.style.display == "none" || acidosM.style.display == "") {
    acidosM.style.display = "block";
  }
}
balanca.onclick = function() {
  if (balancaM.style.display == "block") {
    balancaM.style.display = "none";
  }
  else if (balancaM.style.display == "none" || balancaM.style.display == "") {
    balancaM.style.display = "block";
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
  alcanosM.style.display = "none";
  aldeidosM.style.display = "none";
  acidosM.style.display = "none";
  balancaM.style.display = "none";
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
close7.onclick = function(){
  closeAll();
}
close8.onclick = function(){
  closeAll();
}
close9.onclick = function(){
  closeAll();
}
close10.onclick = function(){
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
  else if (event.target == alcanosM) {
    alcanosM.style.display = "none";
  }
  else if (event.target == aldeidosM) {
    aldeidosM.style.display = "none";
  }
  else if (event.target == acidosM) {
    acidosM.style.display = "none";
  }
  else if (event.target == balancaM) {
    balancaM.style.display = "none";
  }
}//A balança de precisão permite determinar a massa de alguns poucos miligramas.
//The same prompt i've used to create the last file, but with this text "" inside the <h2> tag.