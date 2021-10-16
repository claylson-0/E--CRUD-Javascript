var produtos=[
    {
        nome:"Molho de tomate",
        marca:"Quero",
        preco:1.30,
        estoque:"Sim"
    },
    {
        nome:"Pão de forma",
        marca:"Panco",
        preco:7,
        estoque:"Não"
    },
    {
        nome:"Detergente",
        marca:"Ype",
        preco:2,
        estoque:"Sim"
    }
];

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
            <button onclick="editaProduto(${i})" class="btn btn-primary">Editar</button>
        </td>
        <td>
            <button onclick="deletaProduto(${i})" class="btn btn-primary">Deletar</button>
        </td>
        <tr>`;
    }
    tbLista.innerHTML=elemento;
}

listaProduto();

function deletaProduto(i){
    produtos.splice(i,1);
    listaProduto()
}

function editaProduto(i){
    document.getElementById("nome-produto").value=produtos[i].nome
    document.getElementById("marca").value=produtos[i].marca
    document.getElementById("preco").value=produtos[i].preco
    document.getElementById("estoque").value=produtos[i].estoque

    document.getElementById("btn-cria").innerHTML="Editar"
    document.getElementById("btn-cria").setAttribute("onclick",`reescreveProduto(${i})`)
}

function reescreveProduto(i){
    produtos[i].nome=document.getElementById("nome-produto").value
    produtos[i].marca=document.getElementById("marca").value
    produtos[i].preco=document.getElementById("preco").value
    produtos[i].estoque=document.getElementById("estoque").value

    document.getElementById("nome-produto").value = "";
    document.getElementById("marca").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("estoque").value = "";

    document.getElementById("btn-cria").innerHTML="Criar"
    document.getElementById("btn-cria").setAttribute("onclick","criaProduto()")

    listaProduto()
}