const addClass = (event) => {
    const elementoSelezionato = event.target;
    elementoSelezionato.classList.toggle("selected");
};
const gestisciKeyUpSuInput = (event) => {
    const valoreInput = document.getElementById("text-input").value;
    if (valoreInput === "") {
        alert("CAMPO OBBLIGATORIO");
    } else {
        const nuovoDiv = document.createElement("div");
        nuovoDiv.classList.add("list-item");
        nuovoDiv.innerText = valoreInput;
        nuovoDiv.onclick = addClass;
        document.getElementById("list-item").appendChild(nuovoDiv);
        document.getElementById("text-input").value = "";
    }
};

const delet = (i) => {
    const lista = document.getElementById("list-item");
    const elimina = document.querySelectorAll(".selected");
    elimina.forEach((i) => lista.removeChild(i));
};
