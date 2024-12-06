// Get the modal elements
var modals = {
    AtomoM: document.getElementById("AtomoM"),
    bicarbonatosM: document.getElementById("bicarbonatosM"),
    calcinacaoM: document.getElementById("calcinacaoM"),
    densidadeM: document.getElementById("densidadeM"),
    solubilidadeM: document.getElementById("solubilidadeM"),
    titulacaoM: document.getElementById("titulacaoM"),
    acidosM: document.getElementById("acidosM"),
    alcanosM: document.getElementById("alcanosM"),
    aldeidosM: document.getElementById("aldeidosM"),
    balancaM: document.getElementById("balancaM"),
    carbonilaM: document.getElementById("carbonilaM"),
    catalisadorM: document.getElementById("catalisadorM"),
    cetonasM: document.getElementById("cetonasM"),
    cloroformioM: document.getElementById("cloroformioM"),
    compostoM: document.getElementById("compostoM"),
    corrosaoM: document.getElementById("corrosaoM"),
    digestorM: document.getElementById("digestorM"),
    etilenoglicolM: document.getElementById("etilenoglicolM"),
    surfatantesM: document.getElementById("surfatantesM"),
    turbidimetriaM: document.getElementById("turbidimetriaM")
};

// Get the button elements
var buttons = {
    Atomo: document.getElementById("Atomo"),
    bicarbonatos: document.getElementById("bicarbonatos"),
    calcinacao: document.getElementById("calcinacao"),
    densidade: document.getElementById("densidade"),
    solubilidade: document.getElementById("solubilidade"),
    titulacao: document.getElementById("titulacao"),
    acidos: document.getElementById("acidos"),
    alcanos: document.getElementById("alcanos"),
    aldeidos: document.getElementById("aldeidos"),
    balanca: document.getElementById("balanca"),
    carbonila: document.getElementById("carbonila"),
    catalisador: document.getElementById("catalisador"),
    cetonas: document.getElementById("cetonas"),
    cloroformio: document.getElementById("cloroformio"),
    composto: document.getElementById("composto"),
    corrosao: document.getElementById("corrosao"),
    digestor: document.getElementById("digestor"),
    etilenoglicol: document.getElementById("etilenoglicol"),
    surfatantes: document.getElementById("surfatantes"),
    turbidimetria: document.getElementById("turbidimetria")
};

// Add event listeners to open modals
for (let key in buttons) {
    if (buttons.hasOwnProperty(key) && buttons[key] && modals.hasOwnProperty(key + 'M') && modals[key + 'M']) {
        buttons[key].onclick = function() {
            modals[key + 'M'].style.display = "block";
        };
    }
}

// Add event listeners to close modals
var closeButtons = document.getElementsByClassName("close");
for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        this.closest('.modal').style.display = "none";
    };
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    for (let key in modals) {
        if (modals.hasOwnProperty(key) && event.target == modals[key]) {
            modals[key].style.display = "none";
        }
    }
};