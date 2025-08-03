//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigoSecreto = [];

function adicionarAmigo() {
    const nomeAmigo = document.getElementById("amigo").value.trim();
    if (nomeAmigo === "") {
        alert("Precisa digitar um nome!");
        return;
    }
    amigoSecreto.push(nomeAmigo);
    document.getElementById("amigo").value = "";
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigoSecreto.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigoSecreto.length === 0) {
        alert("Precisa de pelo menos um nome para sortear!");
        return;
    }
    const indiceSorteado = Math.floor(Math.random() * amigoSecreto.length);
    const amigoSorteado = amigoSecreto[indiceSorteado];
    mostrarResultado(amigoSorteado);
}

function mostrarResultado(amigoSorteado) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    const li = document.createElement("li");
    li.textContent = `Seu amigo secreto é: ${amigoSorteado}`;
    resultado.appendChild(li);
}