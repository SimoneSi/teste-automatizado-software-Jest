porcentagem = 20;

const calcularValorPedido = pedido =>{
    const valorPedido = pedido.itens.filter(item => !item.entrega).reduce((valorTotal, valorAtual) => valorTotal + valorAtual.valor, 0);

    const entrega = pedido.itens.filter(item => item.entrega);

    if(pedido.estado === 'RS' || pedido.estado === 'SC'){
        entrega[0].valor = entrega[0].valor * (1 + porcentagem/100)
    }

    return (valorPedido > 500) ? valorPedido : valorPedido + entrega[0].valor

}

module.exports = calcularValorPedido
