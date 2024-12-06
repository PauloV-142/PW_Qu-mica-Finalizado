// Define the IDs for modals and buttons
var modalIDs = [
    "AtomoM", "acidosM", "alcanosM", "aldeidosM", "bicarbonatosM", "calcinacaoM",
    "densidadeM", "solubilidadeM", "titulacaoM", "balancaM", "carbonilaM",
    "catalisadorM", "cetonasM", "cloroformioM", "compostoM", "corrosaoM",
    "digestorM", "etilenoglicolM", "surfatantesM"
];

var buttonIDs = [
    "Atomo", "acidos", "alcanos", "aldeidos", "bicarbonatos", "calcinacao",
    "densidade", "solubilidade", "titulacao"
];

// Get the modal elements
var modals = {};
modalIDs.forEach(function(id) {
    var element = document.getElementById(id);
    if (element) {
        modals[id] = element;
    }
});

// Get the button elements
var buttons = {};
buttonIDs.forEach(function(id) {
    var element = document.getElementById(id);
    if (element) {
        buttons[id] = element;
    }
});

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