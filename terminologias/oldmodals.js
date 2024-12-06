// Get the modal
var AtomoM = document.getElementById("AtomoM");
var bicarbonatosM = document.getElementById("bicarbonatosM");
var calcinacaoM = document.getElementById("calcinacaoM");
var densidadeM = document.getElementById("densidadeM");
var solubilidadeM = document.getElementById("solubilidadeM");
var titulacaoM = document.getElementById("titulacaoM");
var acidosM = document.getElementById("acidosM");
var alcanosM = document.getElementById("alcanosM");
var aldeidosM = document.getElementById("aldeidosM");
var balancaM = document.getElementById("balancaM");
var carbonilaM = document.getElementById("carbonilaM");
var catalisadorM = document.getElementById("catalisadorM");
var cetonasM = document.getElementById("cetonasM");
var cloroformioM = document.getElementById("cloroformioM");
var compostoM = document.getElementById("compostoM");
var corrosaoM = document.getElementById("corrosaoM");
var digestorM = document.getElementById("digestorM");
var etilenoglicolM = document.getElementById("etilenoglicolM");
var surfatantesM = document.getElementById("surfatantesM");

// Get the button that opens the modal
var Atomo = document.getElementById("Atomo");
var bicarbonatos = document.getElementById("bicarbonatos");
var calcinacao = document.getElementById("calcinacao");
var densidade = document.getElementById("densidade");
var solubilidade = document.getElementById("solubilidade");
var titulacao = document.getElementById("titulacao");
var acidos = document.getElementById("acidos");
var alcanos = document.getElementById("alcanos");
var aldeidos = document.getElementById("aldeidos");
var balanca = document.getElementById("balanca");
var carbonila = document.getElementById("carbonila");
var catalisador = document.getElementById("catalisador");
var cetonas = document.getElementById("cetonas");
var cloroformio = document.getElementById("cloroformio");
var composto = document.getElementById("composto");
var corrosao = document.getElementById("corrosao");
var digestor = document.getElementById("digestor");
var etilenoglicol = document.getElementById("etilenoglicol");
var surfatantes = document.getElementById("surfatantes");


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
var close11 = document.getElementsByClassName("close")[10];
var close12 = document.getElementsByClassName("close")[11];
var close13 = document.getElementsByClassName("close")[12];
var close14 = document.getElementsByClassName("close")[13];
var close15 = document.getElementsByClassName("close")[14];
var close16 = document.getElementsByClassName("close")[15];
var close17 = document.getElementsByClassName("close")[16];
var close18 = document.getElementsByClassName("close")[17];
var close19 = document.getElementsByClassName("close")[18];

//Verificar se as tags existem antes de criar listeners.
//Atomo
if (Atomo && AtomoM && close) { 
Atomo.onclick = function() {
  if (AtomoM.style.display == "block") {
    AtomoM.style.display = "none";
  }
  else {
    AtomoM.style.display = "block";
  }
}
window.onclick = function(event) {
  if (event.target == AtomoM) {
    AtomoM.style.display = "none";
  }}
close.onclick = function(){
  closeAll();
}}
//Bicarbonatos
if (bicarbonatos && bicarbonatosM && close) {
  // When the user clicks the button, open the modal 
  bicarbonatos.onclick = function() {
    if (bicarbonatosM.style.display == "block") {
      bicarbonatosM.style.display = "none";
    } 
    else {
      bicarbonatosM.style.display = "block";
    }
  }
  window.onclick = function(event) {
    if (event.target == bicarbonatosM) {
      bicarbonatosM.style.display = "none";
    }
  }
  close.onclick = function() {
    closeAll();
  }
}
//Calcinacao
if (calcinacao && calcinacaoM && close) {
calcinacao.onclick = function() {
  if (calcinacaoM.style.display == "block") {
    calcinacaoM.style.display = "none";
  }
  else if (calcinacaoM.style.display == "none" || calcinacaoM.style.display == "") {
    calcinacaoM.style.display = "block";
  }}
window.onclick = function(event) {
  if (event.target == calcinacaoM) {
    calcinacaoM.style.display = "none";
  }}
close.onclick = function(){
  closeAll();
}
close3.onclick = function(){
  closeAll();
}}
//Densidade
if (densidade && densidadeM && close) {
densidade.onclick = function() {
  if (densidadeM.style.display == "block") {
    densidadeM.style.display = "none";
  }
  else if (densidadeM.style.display == "none" || densidadeM.style.display == "") {
    densidadeM.style.display = "block";
  }
}
window.onclick = function(event) {
  if (event.target == densidadeM) {
    densidadeM.style.display = "none";
  }}
close.onclick = function(){
  closeAll();
}
close4.onclick = function(){
  closeAll();
}}
//Solubilidade
if (solubilidade && solubilidadeM && close) {
solubilidade.onclick = function() {
  if (solubilidadeM.style.display == "block") {
    solubilidadeM.style.display = "none";
  }
  else if (solubilidadeM.style.display == "none" || solubilidadeM.style.display == "") {
    solubilidadeM.style.display = "block";
  }
}
window.onclick = function(event) {
  if (event.target == solubilidadeM) {
    solubilidadeM.style.display = "none";
  }}
close.onclick = function(){
  closeAll();
}
close5.onclick = function(){
  closeAll();
}}
//Titulacao
if (titulacao&& titulacao && close) {
titulacao.onclick = function() {
  if (titulacaoM.style.display == "block") {
    titulacaoM.style.display = "none";
  }
  else if (titulacaoM.style.display == "none" || titulacaoM.style.display == "") {
    titulacaoM.style.display = "block";
  }
}
window.onclick = function(event) {
  if (event.target == titulacaoM) {
    titulacaoM.style.display = "none";
  }}
close.onclick = function(){
  closeAll();
}
close6.onclick = function(){
  closeAll();
}}
//Acidos
if (acidos && acidosM && close) {
acidos.onclick = function() {
  if (acidosM.style.display == "block") {
    acidosM.style.display = "none";
  }
  else if (acidosM.style.display == "none" || acidosM.style.display == "") {
    acidosM.style.display = "block";
  }
}
window.onclick = function(event) {
  if (event.target == acidosM) {
    acidosM.style.display = "none";
  }}
close.onclick = function(){
  closeAll();
}
close7.onclick = function(){
  closeAll();
}
}
//Alcanos
if (alcanos && alcanosM && close) {
alcanos.onclick = function() {
  if (alcanosM.style.display == "block") {
    alcanosM.style.display = "none";
  }
  else if (alcanosM.style.display == "none" || alcanosM.style.display == "") {
    alcanosM.style.display = "block";
  }
}
window.onclick = function(event) {
  if (event.target == alcanosM) {
    alcanosM.style.display = "none";
  }}
close.onclick = function(){
  closeAll();
}
close8.onclick = function(){
  closeAll();
}
}
//Aldeidos
if (aldeidos && aldeidosM && close) {
aldeidos.onclick = function() {
  if (aldeidosM.style.display == "block") {
    aldeidosM.style.display = "none";
  }
  else if (aldeidosM.style.display == "none" || aldeidosM.style.display == "") {
    aldeidosM.style.display = "block";
  }
}
window.onclick = function(event) {
  if (event.target == aldeidosM) {
    aldeidosM.style.display = "none";
  }}
close.onclick = function(){
  closeAll();
}
close9.onclick = function(){
  closeAll();
}
}
//Balanca
if (balanca && balancaM && close) {
balanca.onclick = function() {
  if (balancaM.style.display == "block") {
    balancaM.style.display = "none";
  }
  else if (balancaM.style.display == "none" || balancaM.style.display == "") {
    balancaM.style.display = "block";
  }
}
window.onclick = function(event) {
  if (event.target == balancaM) {
    balancaM.style.display = "none";
  }}
close.onclick = function(){
  closeAll();
}
close10.onclick = function(){
  closeAll();
}
}
//Carbonila
if (carbonila && carbonilaM && close) {
carbonila.onclick = function() {
  if (carbonilaM.style.display == "block") {
    carbonilaM.style.display = "none";
  }
  else if (carbonilaM.style.display == "none" || carbonilaM.style.display == "") {
    carbonilaM.style.display = "block";
  }
}
window.onclick = function(event) {
  if (event.target == carbonilaM) {
    carbonilaM.style.display = "none";
  }}
close.onclick = function(){
  closeAll();
}
close11.onclick = function(){
  closeAll();
}
}
//Catalisador
if (catalisador && catalisadorM && close) {
catalisador.onclick = function() {
  if (catalisadorM.style.display == "block") {
    catalisadorM.style.display = "none";
  }
  else if (catalisadorM.style.display == "none" || catalisadorM.style.display == "") {
    catalisadorM.style.display = "block";
  }
}
window.onclick = function(event) {
  if (event.target == catalisadorM) {
    catalisadorM.style.display = "none";
  }}
close.onclick = function(){
  closeAll();
}
close12.onclick = function(){
  closeAll();
}
}
//Cetonas
if (cetonas && cetonasM && close) {
cetonas.onclick = function() {
  if (cetonasM.style.display == "block") {
    cetonasM.style.display = "none";
  }
  else if (cetonasM.style.display == "none" || cetonasM.style.display == "") {
    cetonasM.style.display = "block";
  }
}
window.onclick = function(event) {
  if (event.target == cetonasM) {
    cetonasM.style.display = "none";
  }}
close.onclick = function(){
  closeAll();
}
close13.onclick = function(){
  closeAll();
}
}
//Cloroformio
if (cloroformio && cloroformioM && close) {
cloroformio.onclick = function() {
  if (cloroformioM.style.display == "block") {
    cloroformioM.style.display = "none";
  }
  else if (cloroformioM.style.display == "none" || cloroformioM.style.display == "") {
    cloroformioM.style.display = "block";
  }
}
window.onclick = function(event) {
  if (event.target == cloroformioM) {
    cloroformioM.style.display = "none";
  }}
close.onclick = function(){
  closeAll();
}
close14.onclick = function(){
  closeAll();
}
}
//Composto
if (composto && compostoM && close) {
composto.onclick = function() {
  if (compostoM.style.display == "block") {
    compostoM.style.display = "none";
  }
  else if (compostoM.style.display == "none" || compostoM.style.display == "") {
    compostoM.style.display = "block";
  }
}
window.onclick = function(event) {
  if (event.target == compostoM) {
    compostoM.style.display = "none";
  }}
close.onclick = function(){
  closeAll();
}
close15.onclick = function(){
  closeAll();
}
}
//Corrosao
if (corrosao && corrosaoM && close) {
corrosao.onclick = function() {
  if (corrosaoM.style.display == "block") {
    corrosaoM.style.display = "none";
  }
  else if (corrosaoM.style.display == "none" || corrosaoM.style.display == "") {
    corrosaoM.style.display = "block";
  }
}
window.onclick = function(event) {
  if (event.target == corrosaoM) {
    corrosaoM.style.display = "none";
  }}
close.onclick = function(){
  closeAll();
}
close16.onclick = function(){
  closeAll();
}
}
//Digestor
if (digestor && digestorM && close) {
digestor.onclick = function() {
  if (digestorM.style.display == "block") {
    digestorM.style.display = "none";
  }
  else if (digestorM.style.display == "none" || digestorM.style.display == "") {
    digestorM.style.display = "block";
  }
}
window.onclick = function(event) {
  if (event.target == digestorM) {
    digestorM.style.display = "none";
  }}
close.onclick = function(){
  closeAll();
}
close17.onclick = function(){
  closeAll();
}
}
//Etilenoglicol
if (etilenoglicol && etilenoglicolM && close) {
etilenoglicol.onclick = function() {
  if (etilenoglicolM.style.display == "block") {
    etilenoglicolM.style.display = "none";
  }
  else if (etilenoglicolM.style.display == "none" || etilenoglicolM.style.display == "") {
    etilenoglicolM.style.display = "block";
  }
}
window.onclick = function(event) {
  if (event.target == etilenoglicolM) {
    etilenoglicolM.style.display = "none";
  }}
close.onclick = function(){
  closeAll();
}
close18.onclick = function(){
  closeAll();
}
}
//Surfatantes
if (surfatantes && surfatantesM && close) {
surfatantes.onclick = function() {
  if (surfatantesM.style.display == "block") {
    surfatantesM.style.display = "none";
  }
  else if (surfatantesM.style.display == "none" || surfatantesM.style.display == "") {
    surfatantesM.style.display = "block";
  }
}
window.onclick = function(event) {
  if (event.target == surfatantesM) {
    surfatantesM.style.display = "none";
  }}
close.onclick = function(){
  closeAll();
}
close19.onclick = function(){
  closeAll();
}
}
// When the user clicks on <span> (x), close the modal
function closeAll(){
  if (Atomo && AtomoM && close) {
    AtomoM.style.display = "none";
  }
  if (bicarbonatos && bicarbonatosM && close) {
    bicarbonatosM.style.display = "none";
  }
  if (calcinacao && calcinacaoM && close) {
    calcinacaoM.style.display = "none";
  }
  if (densidade && densidadeM && close) {
    densidadeM.style.display = "none";
  }
  if (solubilidade && solubilidadeM && close) {
    solubilidadeM.style.display = "none";
  }
  if (titulacao && titulacaoM && close) {
    titulacaoM.style.display = "none";
  }
  if (acidos && acidosM && close) {
    acidosM.style.display = "none";
  }
  if (alcanos && alcanosM && close) {
    alcanosM.style.display = "none";
  }
  if (aldeidos && aldeidosM && close) {
    aldeidosM.style.display = "none";
  }
  if (balanca && balancaM && close) {
    balancaM.style.display = "none";
  }
  if (carbonila && carbonilaM && close) {
    carbonilaM.style.display = "none";
  }
  if (catalisador && catalisadorM && close) {
    catalisadorM.style.display = "none";
  }
  if (cetonas && cetonasM && close) {
    cetonasM.style.display = "none";
  }
  if (cloroformio && cloroformioM && close) {
    cloroformioM.style.display = "none";
  }
  if (composto && compostoM && close) {
    compostoM.style.display = "none";
  }
  if (corrosao && corrosaoM && close) {
    corrosaoM.style.display = "none";
  }
  if (digestor && digestorM && close) {
    digestorM.style.display = "none";
  }
  if (etilenoglicol && etilenoglicolM && close) {
    etilenoglicolM.style.display = "none";
  }
  if (surfatantes && surfatantesM && close) {
    surfatantesM.style.display = "none";
  }
}
// Check if elements exist before adding event listeners

//acidos alcanos aldeídos balança carbonila catalisador cetonas cloroformio composto corrosão digestor etilenoglicol surfatantes

