let AmigosSecretos = [];


function adicionarAmigo() {
  let input = document.getElementById("amigo");
  let nomes = input.value.trim("");

  if (nomes === "") {
    alert("preencha o campo com o nome do seus amigos");
    return;
  }
  AmigosSecretos.push(nomes);
  AtualizaListaAmigos();
}

function AtualizaListaAmigos() {
  let list = document.getElementById("listaAmigos");
  list.innerHTML = "";

  for (let i = 0; i < AmigosSecretos.length; i++) {
    let li = document.createElement("li");
    li.textContent = AmigosSecretos[i];
    list.appendChild(li);
  }
}

function sortearAmigo() {
    if(AmigosSecretos.length === 0){
        alert("Sua lista de amigos esta vazia! Adicione algum amigo")
        return
    }
    let sorteio= Math.floor(Math.random() * AmigosSecretos.length);
    let amigoSorteado = AmigosSecretros[sorteio];

    document.getElementById("resultado").innerHTML = `Seu amigo é <strong> ${amigoSorteado}<strong>`
}
