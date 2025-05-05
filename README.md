# Calculadora JavaScript Mocha-Chai

**Bem-vindo(a) ao meu repositório! Ele contém uma Calculadora em JavaScript e testes com Mocha e Chai!**

- Aqui você encontrará o que foi necessário instalar para fazer o projeto.
- Uma breve contextualização sobre o desenvolvimento.
- Conceitos de Mocha que é um framework de teste e Chai que é uma biblioteca de asserções.

## Instalação para utilização

- IDE local (utilizei o VS Code)
- Instale o Node.js
- Instale o Git

## Desenvolvimento do Projeto

- Após as instalações foi versionado as pastas para o ambiente de testes.
- A pasta deve estar com o mesmo nome "test" do package.json, e alterar o atributo para "mocha".
- Principais partes do projeto: [calculadora](https://github.com/Helezn/CalculadoraJSMocha-Chai/blob/main/src/Calculadora.js) em JavaScript e ambiente de [testes](https://github.com/Helezn/CalculadoraJSMocha-Chai/blob/main/test/Calculadora.spec.js) utilizando Mocha e Chai.
- O comando npm test executará o teste no terminal e retornará os resultados.

## Conceitos 

### Mocha

**O que é Mocha?** 
- Mocha é uma biblioteca de teste **JavaScript** baseada em **Node.js**.
- Suporta testes assíncronos e fornece um ambiente simples para organizar e executar testes.

**Características:**
- Estrutura de testes BDD/TDD.
- Suporte a testes assíncronos.
- Relatórios personalizáveis.
- Fácil integração com outras bibliotecas, como **Chai**.

**Estrutura básica de um teste com Mocha:**
```javascript
const assert = require('assert');

describe('Teste de exemplo', function () {
    it('Deve retornar verdadeiro para valores iguais', function () {
        assert.strictEqual(1, 1); // Verifica se 1 é estritamente igual a 1
    });
});
```

### Chai 

**O que é Chai?**
- Chai é uma biblioteca de asserções para **JavaScript**, frequentemente usada em conjunto com **Mocha**.
- Oferece uma API flexível para validar testes.
- Suporta três estilos principais de asserção:
  1. **Assert**: Estilo clássico.
  2. **Expect**: Leitura natural e descritiva.
  3. **Should**: Adiciona métodos ao objeto global para um estilo fluente.

**Instalação:**
Para instalar o Chai, execute o seguinte comando no terminal:
```bash
npm install chai
```

## Sobre mim

Olá, me chamo Helen Zanco Neis, estudo e amo a área da tecnologia!

