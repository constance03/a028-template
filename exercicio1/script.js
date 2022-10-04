function addElement () {
    //puxando a class lista
    const lista = document.getElementById("lista");

    // criando os novos lis
    const newItemComeco = document.createElement("li");
    const newItemFinal = document.createElement("li");

    // adicionando o item no comeco
    lista.insertAdjacentElement('afterbegin', newItemComeco)
    newItemComeco.innerHTML = "Item 0"

    // adicionando o item no final
    // lista.insertAdjacentElement('beforeend', newItemFinal)
    lista.appendChild(newItemFinal)
    newItemFinal.innerHTML = "Item 5"   
  }
  
  addElement();



