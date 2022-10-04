const lista = document.getElementById("lista")
const novoItem = document.getElementById("meu-input")

function insereItem (event) {
    event.preventDefault()
    const adicionaItem = document.createElement("li");
    lista.appendChild(adicionaItem)
    adicionaItem.innerHTML = novoItem.value
    novoItem.value = ""
}