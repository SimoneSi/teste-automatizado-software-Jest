# Testes automatizados de software - framework Jest

Esta é uma solução para tornar nossos códigos mais confiáveis, pois os testes automatizados realizam verificações constantes durante o desenvolvimento. Além de identificar rapidamente erros ou regressões, esses testes garantem que novas funcionalidades não comprometam partes já existentes do sistema. Eles também agilizam o processo de desenvolvimento, proporcionando feedback imediato e permitindo que a equipe se concentre em melhorias e inovações, reduzindo o tempo gasto na depuração manual. Além disso, os testes automatizados contribuem para a documentação do comportamento esperado do código, facilitando a manutenção e a colaboração entre os desenvolvedores.

## Índice

- [Visão Geral](#visão-geral)
    - [O projeto](#o-projeto)
- [Meu progresso](#meu-progresso)
    - [Construido com](#construido-com)
    - [O que eu aprendi](#o-que-eu-aprendi)
- [Autor](#autor)

## Visão Geral

### O projeto

O desenvolver deve ser capaz de :

- Rodar os teste automaticamente com o comando npm run watch ou watchAll

- Ver os testes automatizados realizando verificações constantes durante o desenvolvimento.


## Meu Progresso

### Construido com

- JavaScript
- [Jest](https://jestjs.io/pt-BR/docs/getting-started) - Jest iniciando

### O que eu aprendi

```js
it('should run test', () =>{
    // AAA - 3 passos de criação de um teste

    // Arrang
    const meuPedido = {
        itens:[
            {nome: 'produto', valor: 200}
        ]
    }

    // Act
    const resultado = calcularPedido(meuPedido);

   // Assertion 
    expect(resultado).toBe(200); 
});
```

## Autor

- Website linkedln - [Simone Lima](https://www.linkedin.com/in/sslima-simone)