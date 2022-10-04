function escondeSenha (event) {
    let senha = document.getElementById("password")
    senha.setAttribute("type", "password")
    event.preventDefault()
}


function mudarClasse () {
    const form = document.querySelector(".light");
    form.classList.remove("light");
    form.classList.add("dark");
}

mudarClasse ()