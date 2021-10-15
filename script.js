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

}