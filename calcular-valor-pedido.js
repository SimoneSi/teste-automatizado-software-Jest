const calcularValorPedido = pedido =>{
    const valorPedido = pedido.itens.filter(item => !item.entrega).reduce((valorTotal, valorAtual) => valorTotal + valorAtual.valor, 0);

    const entrega = pedido.itens.filter(item => item.entrega);

    if(valorPedido > 500){
        return valorPedido;
    }else{
        return valorPedido + entrega[0].valor;
    }
}

module.exports = calcularValorPedido
