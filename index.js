const meuPedido = {
    itens:[
        {nome:'produtoUm', valor: 50},
        {nome: 'produtoDois', valor: 20},
        {nome:'entrega', valor: 100, entrega: true}
    ]
}

const calcularValorPedido = pedido =>{
    const valorPedido = pedido.itens.filter(item => !item.entrega).reduce((valorTotal, valorAtual) => valorTotal + valorAtual.valor, 0);

    const entrega = pedido.itens.filter(item => item.entrega);

    if(valorPedido > 500){
        return valorPedido;
    }else{
        return valorPedido + entrega[0].valor;
    }
}

console.log(calcularValorPedido(meuPedido));
