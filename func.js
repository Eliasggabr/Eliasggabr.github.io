
document.getElementById("btn").onclick = function() {
    let resposta = document.getElementById("resposta").value.toLowerCase();

    if (resposta === "venom") {
        document.getElementById("resultado").innerText = "Acertou! É o Venom!";
        document.getElementById("resultado").style.color = "green";
    } else {
        document.getElementById("resultado").innerText = "Errou! Tente novamente.";
        document.getElementById("resultado").style.color = "darkred";
    }
};