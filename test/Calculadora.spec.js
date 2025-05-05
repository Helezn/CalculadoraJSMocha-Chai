//CALCULADORA
import assert from 'assert'
import { expect } from "chai"
import Calculadora from '../src/Calculadora.js'

describe('Testes de soma ',() => {
    it('T1: Faz a soma de 4 e 5 resultando em 9', () => {
        let resultado = Calculadora.soma(4,5);       
        expect(resultado).to.be.eq(9);
    })
    it('T2: Faz a soma de -4 e 5 resultando em 1', () => {
        let resultado = Calculadora.soma(-4,5);       
        expect(resultado).to.be.eq(1);
    })
    it('T3: Faz a soma de -5 e 4 resultando em 1', () => {
        let resultado = Calculadora.soma(-5,4);       
        expect(resultado).to.be.eq(-1);
    })
    it('T4: Faz a soma de 4 e -5 resultando em 1', () => {
        let resultado = Calculadora.soma(4,-5);       
        expect(resultado).to.be.eq(-1);
    })
    it('T5: Faz a soma de -4 e -5 resultando em -9', () => {
        let resultado = Calculadora.soma(5,-4);       
        expect(resultado).to.be.eq(1);
    })
    it('T6: Faz a soma de 5 e -4 resultando em -9', () => {
        let resultado = Calculadora.soma(-5,-4);       
        expect(resultado).to.be.eq(-9);
    })
    it('T7: Faz a soma de -4 e -4 resultando em 0', () => {
        let resultado = Calculadora.soma(-4,-4);       
        expect(resultado).to.be.eq(-8);
    })
    it('T8: Faz a soma de 0 e 0 resultando em 0', () => {
        let resultado = Calculadora.soma(0,0);       
        expect(resultado).to.be.eq(0);
    })
}) 
 
describe('Testes de subtração',() => {
    it('T1: Faz a subtração de 4 por 5 que deve resultar em -1', () => {
        let resultado = Calculadora.subtracao(4,5);       
        expect(resultado).to.be.eq(-1);
    })
    it('T2: Faz a subtração de 5 por 4 que deve resultar em 1', () => {
        let resultado = Calculadora.subtracao(5,4);       
        expect(resultado).to.be.eq(1);
    })
    it('T3: Faz a subtração de 5 por 5 que deve resultar em 0', () => {
        let resultado = Calculadora.subtracao(5,5);       
        expect(resultado).to.be.eq(0);
    })
    it('T4: Faz a subtração de -5 por 4 que deve resultar em -9', () => {
        let resultado = Calculadora.subtracao(-5,4);       
        expect(resultado).to.be.eq(-9);
    })
    it('T5: Faz a subtração de -4 por 5 que deve resultar em -9', () => {
        let resultado = Calculadora.subtracao(-4,5);       
        expect(resultado).to.be.eq(-9);
    })
    it('T6: Faz a subtração de 5 por -4 que deve resultar em 9', () => {
        let resultado = Calculadora.subtracao(5,-4);       
        expect(resultado).to.be.eq(9);
    })
    it('T7: Faz a subtração de 4 e -5 que deve resultar em 9', () => {
        let resultado = Calculadora.subtracao(4,-5);       
        expect(resultado).to.be.eq(9);
    })
    it('T8: Faz a subtração de -4 e -4 que deve resultar em 0', () => {
        let resultado = Calculadora.subtracao(-4,-4);       
        expect(resultado).to.be.eq(0);
    })
})

describe('Testes de multiplicação',() => {
    it('T1: Faz a multiplicação de 4 por 5 que deve resultar em 20', () => {
        let resultado = Calculadora.multiplicacao(4,5);       
        expect(resultado).to.be.eq(20);
    })
    it('T2: Faz a multiplicação de 0 por 4 que deve resultar em 0', () => {
        let resultado = Calculadora.multiplicacao(0,4);       
        expect(resultado).to.be.eq(0);
    })
    it('T3: Faz a multiplicação de 1 por 5 que deve resultar em 5', () => {
        let resultado = Calculadora.multiplicacao(1,5);       
        expect(resultado).to.be.eq(5);
    })
    it('T4: Faz a multiplicação de -4 por -5 que deve resultar em -20', () => {
        let resultado = Calculadora.multiplicacao(-4,-5);       
        expect(resultado).to.be.eq(20);
    })
    it('T5: Faz a multiplicação de 0 por -4 que deve resultar em 0', () => {
        let resultado = Calculadora.multiplicacao(0,-4);       
        expect(resultado).to.be.eq(0);
    })
    it('T6: Faz a multiplicação de -1 por 5 que deve resultar em 5', () => {
        let resultado = Calculadora.multiplicacao(-1,5);       
        expect(resultado).to.be.eq(-5);
    })
    it('T7: Faz a multiplicação de 1 por -5 que deve resultar em 5', () => {
        let resultado = Calculadora.multiplicacao(1,-5);       
        expect(resultado).to.be.eq(-5);
    })
})

describe('Testes de divisão',() => {
    it('T1: Faz a divisão de 4 por 5 que deve resultar em 20', () => {
        let resultado = Calculadora.divisao(20,5);       
        expect(resultado).to.be.eq(4);
    })
    it('T2: Faz a divisão de 0 por 0 que deve resultar em erro', () => {
        let resultado = Calculadora.divisao(0,0);       
        expect(resultado).to.be.eq("Divisor inválido, não é possível dividir por 0!");
    })
    it('T3: Faz a divisão de 5 por 10 que deve resultar em 0,5', () => {
        let resultado = Calculadora.divisao(5,10);       
        expect(resultado).to.be.eq(0.5);
    })
    it('T4: Faz a divisão de -20 por -5 que deve resultar em 4', () => {
        let resultado = Calculadora.divisao(-20,-5);       
        expect(resultado).to.be.eq(4);
    })
    it('T5: Faz a divisão de 5 por -10 que deve resultar em 0,5', () => {
        let resultado = Calculadora.divisao(5,-10);       
        expect(resultado).to.be.eq(-0.5);
    })
    it('T6: Faz a divisão de -20 por 5 que deve resultar em 4', () => {
        let resultado = Calculadora.divisao(-20,5);       
        expect(resultado).to.be.eq(-4);
    })
})

describe('Testes de raiz',() => {
    it('T1: Faz a raiz de 4 que deve resultar em 2', () => {
        let resultado = Calculadora.raiz(4);       
        expect(resultado).to.be.eq(2);
    })
    /*it('T2: Faz a raiz de 5 que deve resultar em 2.23606797749979', () => {
        let resultado = Calculadora.raiz(5);       
        expect(resultado).to.be.eq(2.23606797749979);
    })*/
    it('T3: Faz a raiz de -4 que deve resultar em erro', () => {
        let resultado = Calculadora.raiz(-4);       
        expect(resultado).to.be.eq("Radicando inválido, não é possível calcular a raiz de um número negativo!");
    })
    /*it('T4: Faz a raiz de 3,1415 que deve resultar em 1.772427713617681', () => {
        let resultado = Calculadora.raiz(3.1415);       
        expect(resultado).to.be.eq(1.772427713617681);
    })*/
    it('T5: Faz a raiz de -3,1415 que deve resultar em erro', () => {
        let resultado = Calculadora.raiz(-3.1415);       
        expect(resultado).to.be.eq("Radicando inválido, não é possível calcular a raiz de um número negativo!");
    })
    /*it('T6: Faz a raiz de 6 que deve resultar em 2.4494897428', () => {
        let resultado = Calculadora.raiz(6);       
        expect(resultado).to.be.eq(2.4494897428);
    })*/
})

describe('Testes de potência',() => {
    it('T1: Faz a potência de 4 elevado na 2 que deve resultar em 16', () => {
        let resultado = Calculadora.potencia(4,2);       
        expect(resultado).to.be.eq(16);
    })
    it('T2: Faz a potência de -4 elevado na 2 que deve resultar em 16', () => {
        let resultado = Calculadora.potencia(-4,2);       
        expect(resultado).to.be.eq(16);
    })
    it('T3: Faz a potência de 0 elevado na 8 que deve resultar em 0', () => {
        let resultado = Calculadora.potencia(0,8);       
        expect(resultado).to.be.eq(0);
    })
    it('T4: Faz a potência de 1 elevado na 5 que deve resultar em 1', () => {
        let resultado = Calculadora.potencia(1,5);       
        expect(resultado).to.be.eq(1);
    })
    it('T5: Faz a potência de 8 elevado na 0 que deve resultar em 1', () => {
        let resultado = Calculadora.potencia(8,0);       
        expect(resultado).to.be.eq(1);
    })
    it('T6: Faz a potência de -2 elevado na 3 que deve resultar em -8', () => {
        let resultado = Calculadora.potencia(-2,3);       
        expect(resultado).to.be.eq(-8);
    })
    it('T7: Faz a potência de 2 elevado na -1 que deve resultar em 1/2 ou 0,5', () => {
        let resultado = Calculadora.potencia(2,-1);       
        expect(resultado).to.be.eq(0.5);
    })
   it('T8: Faz a potência de 2 elevado na -3 que deve resultar em 1/8 ou 0,125', () => {
        let resultado = Calculadora.potencia(2,-3);       
        expect(resultado).to.be.eq(0.125);
    })
})

describe('Testes de somatoria', () => {
    it('T1: Faz a somatória de [1, 2, 3, 4] que deve resultar em 10', () => {
        const resultado = Calculadora.somatoria([1, 2, 3, 4]);
        expect(resultado).to.be.eq(10);
    })
    it('T2: Faz a somatória de array vazio [] que deve resultar em 0', () => {
        const resultado = Calculadora.somatoria([]);
        expect(resultado).to.be.eq(0);
    })
    it('T3: Faz a somatória de uma string que deve resultar em erro', () => {
        const resultado = Calculadora.somatoria("teste");
        expect(resultado).to.be.eq("Parâmetro inválido, deve ser um array!");
    })
    it('T4: Faz a somatória de [-1, -2, -3, -4] que deve resultar em -10', () => {
        const resultado = Calculadora.somatoria([-1, -2, -3, -4]);
        expect(resultado).to.be.eq(-10);
    })
    it('T5:  Faz a somatória de [1.5, 2.5, 3.5] que deve resultar em 7.5', () => {
        const resultado = Calculadora.somatoria([1.5, 2.5, 3.5]);
        expect(resultado).to.be.eq(7.5);
    })
    it('T6:  Faz a somatória de [1] que deve resultar em 1', () => {
        const resultado = Calculadora.somatoria([1]);
        expect(resultado).to.be.eq(1);
    })
    it('T7:  Faz a somatória de [-1] que deve resultar em -1', () => {
        const resultado = Calculadora.somatoria([-1]);
        expect(resultado).to.be.eq(-1);
    })
})

describe('Testes de fatorial', () => {
    it('T1: Faz o fatorial de 0 que deve resultar em 1', () => {
        const resultado = Calculadora.fatorial(0);
        expect(resultado).to.be.eq(1);
    })
    it('T2: Faz o fatorial de 1 que deve resultar em 1', () => {
        const resultado = Calculadora.fatorial(1);
        expect(resultado).to.be.eq(1);
    })
    it('T3: Faz o fatorial de -10 que deve resultar em erro', () => {
        const resultado = Calculadora.fatorial(-10);
        expect(resultado).to.be.eq("Número inválido, não é possível calcular o fatorial de um número negativo!");
    })
    it('T4: Faz o fatorial de 2 que deve resultar em 2', () => {
        const resultado = Calculadora.fatorial(2);
        expect(resultado).to.be.eq(2);
    })
    it('T5: Faz o fatorial de 3 que deve resultar em 6', () => {
        const resultado = Calculadora.fatorial(3);
        expect(resultado).to.be.eq(6);
    })
    it('T6: Faz o fatorial de 6 que deve resultar em 720', () => {
        const resultado = Calculadora.fatorial(6);
        expect(resultado).to.be.eq(720);
    })
})

describe('Testes de média', () => {
    it('T1: Faz a média de [2, 4, 6, 8] que deve resultar em 5', () => {
        const resultado = Calculadora.media([2, 4, 6, 8]);
        expect(resultado).to.be.eq(5);
    })

    it('T2: Faz a média de [10, 20, 30] que deve resultar em 20', () => {
        const resultado = Calculadora.media([10, 20, 30]);
        expect(resultado).to.be.eq(20);
    })

    it('T3: Faz a média de array vazio [] que deve resultar em erro', () => {
        const resultado = Calculadora.media([]);
        expect(resultado).to.be.eq("Parâmetro inválido, o array não pode estar vazio!");
    })

    it('T4: Faz a média de uma string que deve resultar em erro', () => {
        const resultado = Calculadora.media("teste");
        expect(resultado).to.be.eq("Parâmetro inválido, deve ser um array!");
    })

    it('T5: Faz a média de [7] que deve resultar em 7', () => {
        const resultado = Calculadora.media([7]);
        expect(resultado).to.be.eq(7);
    })

    it('T6: Faz a média de [-1, -2, -3, -4] que deve resultar em -2.5', () => {
        const resultado = Calculadora.media([-1, -2, -3, -4]);
        expect(resultado).to.be.eq(-2.5);
    })

    it('T7: Faz a média de [1.5, 2.5, 3.5] que deve resultar em 2.5', () => {
        const resultado = Calculadora.media([1.5, 2.5, 3.5]);
        expect(resultado).to.be.eq(2.5);
    })
})

/*
TESTE COM CHAI 

import assert from 'assert'
import { expect } from "chai"

describe('Meu primeiro teste',() => {
    it('Verificar a variável "aux"', () => {
        let aux = 2
         expect(aux).to.be.equals(2).and.to.be.a('number')        
    })
    it('Verificar outra igualdade', () => {
        let aux = 'carro'
        expect(aux).to.be.equals('carro').and.not.equal('charrete')
    })

TESTE COM MOCHA

import assert from 'assert'

describe('Meu primeiro teste',() => {
    it('Verificar uma igualdade', () => {
        let aux = 2
        assert.strictEqual(aux,2);
    })
    it('Verificar outra igualdade', () => {
        let aux = 'carro'
        assert.strictEqual(aux,'carro');
    })
})

describe('Meu segundo teste',() => {
    it('Verificar uma desigualdade', () => {
        let aux = 2
        assert.notStrictEqual(aux,'2');
    })
    it('Verificar outra desigualdade', () => {
        let aux = 'carro'
        assert.notStrictEqual(aux,'charrete');
    })
})
    
Documentação chai: https://www.chaijs.com/
Documentação mocha: https://mochajs.org/
*/