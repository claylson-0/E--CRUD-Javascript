var jsonPromise = fetch('./JSON.json').then(results => results.json())


function criaProduto() {
    jsonPromise.then(criaProdutoJson)
}

function criaProdutoJson(produtos) {
    var nomeProduto = document.getElementById("nome-produto").value;
    var marca = document.getElementById("marca").value;
    var preco = document.getElementById("preco").value;
    var estoque = document.getElementById("estoque").value;

    produtos.push({
        nome: nomeProduto,
        marca: marca,
        preco: preco,
        estoque: estoque
    })

    limpaCampo()
    listaProduto();
}

function limpaCampo() {
    document.getElementById("nome-produto").value = "";
    document.getElementById("marca").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("estoque").value = "";
}

function listaProdutoJson(produtos) {
    var tbLista = document.getElementById("tabela-lista-produto");
    var elemento = "";
    for (var i = 0; i < produtos.length; i++) {
        elemento += `<tr>
        <td>${produtos[i].nome}</td>
        <td>${produtos[i].marca}</td>
        <td>${produtos[i].preco}</td>
        <td>${produtos[i].estoque}</td>
        <td>
            <button onclick="editaProduto(${i})" class="btn btn-primary">Editar</button>
        </td>
        <td>
            <button onclick="deletaProduto(${i})" class="btn btn-primary">Deletar</button>
        </td>
        <tr>`;
    }
    tbLista.innerHTML = elemento;
}

function listaProduto() {
    jsonPromise.then(listaProdutoJson)
}
listaProduto();

function deletaProduto(i) {
    jsonPromise.then(produtos =>
        produtos.splice(i, 1)
    )
    listaProduto()
}

function editaProduto(i) {
    jsonPromise.then(function (produtos) {
        document.getElementById("nome-produto").value = produtos[i].nome
        document.getElementById("marca").value = produtos[i].marca
        document.getElementById("preco").value = produtos[i].preco
        document.getElementById("estoque").value = produtos[i].estoque

        document.getElementById("btn-cria").innerHTML = "Editar"
        document.getElementById("btn-cria").setAttribute("onclick", `reescreveProduto(${i})`)
    })

}

function reescreveProduto(i) {
    jsonPromise.then(function (produtos) {
        var nomeProduto = document.getElementById("nome-produto").value
        var marca = document.getElementById("marca").value
        var preco = document.getElementById("preco").value
        var estoque = document.getElementById("estoque").value
        produtos[i].nome = nomeProduto
        produtos[i].marca = marca
        produtos[i].preco = preco
        produtos[i].estoque = estoque
        
        document.getElementById("btn-cria").innerHTML = "Criar"
        document.getElementById("btn-cria").setAttribute("onclick", "criaProduto()")

        limpaCampo()
        listaProduto()
    })
}