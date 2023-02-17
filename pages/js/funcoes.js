window.onload = function selecionarHamburguer() {
    let opcao = parseInt(prompt("Olá, digite o número correspondente ao lanche que você deseja\n1 - Big Burg\n2 - Max Burg\n3 - Egg Burg\n4 - Do Cheff Burg"))
    let quantidade = parseInt(prompt("E qual a quantidade?"))
    let lanche = ""
    let preco = 0

    switch (opcao) {
        case 1:
            lanche = "Big Burg"
            preco = 23.50
            break
        case 2:
            lanche = "Max Burg"
            preco = 25
            break
        case 3:
            lanche = "Egg Burg"
            preco = 19.50
            break
        case 4:
            lanche = "Do Cheff Burg"
            preco = 25.50
            break
    }

    if (quantidade > 0) {
        let total = calcularPreco(preco, quantidade)
        confirmarPedido(lanche, quantidade, total)
    } else {
        quantidadeZero()
    }

}

function calcularPreco(preco, quantidade) {
    return preco * quantidade
}

function confirmarPedido(lanche, quantidade, total) {
    let confirmar = prompt(`SEU PEDIDO\nLanche: ${lanche}\nQuantidade: ${quantidade}\nTotal R$ ${total}\n\nConfirmar pedido?\n1 - Sim\n2 - Não`)
    if (confirmar == "1" || confirmar == "sim" || confirmar == "1 - sim") {
        alert("Pedido confirmado!\nSeu pedido já foi enviado para a cozinha e em breve chega na sua casa. Agradeçemos pelo pedido!")
    } else {
        alert("Ops, acho que errei ao anotar.\nRecarregue a página e tente novamente por favor!")
    }
}

function quantidadeZero() {
    alert("Você não colocou nenhuma quantidade :(\nRecarregue a página e tente novamente por favor!")
    return false
}