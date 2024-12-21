const calcularValorPedido = require('./calcular-valor-pedido')

it('não deve cobrar valor do frete quando valor dos pedidos for superior a 500',() =>{
    const meuPedido = {
        itens:[
            {nome:'produto', valor: 2000},
            {nome:'entrega', valor: 100, entrega: true}
        ]
    };

    const resultado = calcularValorPedido(meuPedido);

    expect(resultado).toBe(2000);    
});

it('deve cobrar valor do frete quando valor dos pedidos for inferior a 500', () =>{
    const meuPedido = {
        itens:[
            {nome:'produto', valor: 200},
            {nome:'entrega', valor: 100, entrega: true}
        ]
    };

    const resultado = calcularValorPedido(meuPedido);

    expect(resultado).toBe(300);
});

it('deve cobrar valor do frete quando valor dos pedidos for EXATAMENTE 500', () =>{
    const meuPedido = {
        itens:[
            {nome:'produto', valor: 500},
            {nome:'entrega', valor: 100, entrega: true}
        ]
    };

    const resultado = calcularValorPedido(meuPedido);

    expect(resultado).toBe(600);
});