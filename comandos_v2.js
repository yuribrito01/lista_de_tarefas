    var enter = document.getElementById("nova-tarefa")
    enter.addEventListener('keyup', (e) => {

        if (e.key == "Enter") {
            criarTemplate()
        }
    })
    

function criarTemplate() { 
    var modeloTemplate = document.getElementById("modelo1");
    var novoTemplate = modeloTemplate.content.cloneNode(true);
    var list = document.getElementById("lista");
    var listItem = novoTemplate.querySelector("li");
    var conteudo = document.getElementById("nova-tarefa");
    
    if (conteudo.value == ""){
        alert ("Ta faltando coisa, parça!")
    }
    else {
        var numeroDeItens = list.children.length;
        if (numeroDeItens %2 == 0){
            listItem.style.backgroundColor= "#E4EFF1"

        }
        if (numeroDeItens %3 == 0){
            listItem.style.color= "red"
        }
        listItem.append(conteudo.value);
        list.appendChild(novoTemplate);
        conteudo.value = "";
    }
}
function removerItem(elemento){

elemento.parentElement.remove();

}

