var produtos=[];

function criaProduto(){
    var nomeProduto = document.getElementById("nome-produto").value;
    var marca = document.getElementById("marca").value;
    var preco = document.getElementById("preco").value;
    var estoque = document.getElementById("estoque").value;

    var objProduto={
        nome:nomeProduto,
        marca:marca,
        preco:preco,
        estoque:estoque
    }
    produtos.push(objProduto);

    document.getElementById("nome-produto").value = "";
    document.getElementById("marca").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("estoque").value = "";

    console.log(objProduto);
    console.log(produtos);
    console.log(produtos[0].nome);
    listaProduto();

}

function listaProduto(){
    var tbLista = document.getElementById("tabela-lista-produto");
    var elemento="";
    for(var i = 0;i<produtos.length;i++){
        elemento += `<tr>
        <td>${produtos[i].nome}</td>
        <td>${produtos[i].marca}</td>
        <td>${produtos[i].preco}</td>
        <td>${produtos[i].estoque}</td>
        <td>
            <button class="btn btn-primary">Editar</button>
        </td>
        <td>
            <button onclick="deletaProduto(${i})" class="btn btn-primary">Deletar</button>
        </td>
        <tr>`;
    }
    tbLista.innerHTML=elemento;
}


function deletaProduto(i){
    produtos.splice(i,1);
    listaProduto()
}