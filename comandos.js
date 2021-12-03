function criarTemplate() { 
    var modeloTemplate = document.getElementById("modelo1");
    var novoTemplate = modeloTemplate.content.cloneNode(true);
    var list = document.getElementById("lista");

    var listItem = queryselector("li");
    var texto = document.createTextNode("Teste 123")
    list.appendChild(novoTemplate);
    append
}