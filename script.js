var btnConverter = document.getElementById("converter-btn");
var elementoTexto = document.getElementById("elemento-txt");

btnConverter.addEventListener('click', () => {
    var moeda = document.getElementById("conv-moedas").value;
    let valorInicial = parseFloat(document.getElementById("valor").value);
    if (moeda == "Dolar") {
        let taxa = 5.19;
        let valorFinal = valorInicial * taxa;
        elementoTexto.innerText = `R$ ${valorFinal.toFixed(2)}`;

    } else if (moeda == "Euro") {
        let taxa = 5.97;
        let valorFinal = valorInicial * taxa;
        elementoTexto.innerText = `R$ ${valorFinal.toFixed(2)}`;
    } else if (moeda == "Iene") {
        let taxa = 0.032;
        let valorFinal = valorInicial * taxa;
        elementoTexto.innerText = `R$ ${valorFinal.toFixed(2)}`;
    }
    else if (moeda == "Won") {
        let taxa = 0.0038;
        let valorFinal = valorInicial * taxa;
        elementoTexto.innerText = `R$ ${valorFinal.toFixed(2)}`;
    } else {
        window.alert("Selecione uma moeda!");
        return;
    }

});

