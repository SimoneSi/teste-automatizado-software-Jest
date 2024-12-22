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

it('deve cobrar um acrescimo de 20% no valor da entrega caso o estado seja RS', () =>{    
    const meuPedido = {
        estado:'RS',
        itens:[
            {nome:'produto', valor: 500},
            {nome:'entrega', valor: 100, entrega: true}
        ]
    };
     const resultado = calcularValorPedido(meuPedido);

     expect(resultado).toBe(620);
})

it('deve cobrar um acrescimo de 20% no valor da entrega caso o estado seja SC', () =>{    
    const meuPedido = {
        estado:'SC',
        itens:[
            {nome:'produto', valor: 500},
            {nome:'entrega', valor: 100, entrega: true}
        ]
    };
     const resultado = calcularValorPedido(meuPedido);

     expect(resultado).toBe(620);
})

it('não devo adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja SP', () =>{
    const meuPedido = {
        estado:'SP',
        itens:[
            {nome:'produto', valor: 500},
            {nome:'entrega', valor: 100, entrega: true}
        ]
    };

    const resultado = calcularValorPedido(meuPedido);

    expect(resultado).toBe(600);
})

