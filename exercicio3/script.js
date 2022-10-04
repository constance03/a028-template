function checaCaps (event) {
    let paragrafo = document.getElementById("mensagem")
    if (event.shiftKey) {
        paragrafo.innerHTML = "ATENÇÃO: SEGURANDO SHIFT"
    } else { 
        paragrafo.innerHTML = ""
    }
}