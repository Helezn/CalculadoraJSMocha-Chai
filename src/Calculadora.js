export default class Calculadora {
    static soma(a, b) {
        return (a) + (b);
    }
    static subtracao(a, b) {
        return (a) - (b);
    }
    static multiplicacao(a, b) {
        return (a) * (b);
    }

    static divisao(a, b) {
        if (b === 0) {
            return "Divisor inválido, não é possível dividir por 0!"
        }
        return (a) / (b);
    }

    static raiz(a) {
        
        let b = 0;
        let c = 0;

        if (a < 0) {
            return "Radicando inválido, não é possível calcular a raiz de um número negativo!";
        }
        else {
            while (b <= a) {
                if (b * c === a) {
                    return (b);
                    break;
                }
                b++;
                c++;
            }
        }
    }

    static potencia(a, b) {
        return (a) ** (b);
    }

    static somatoria(a) {
        if (!Array.isArray(a)) {
            return "Parâmetro inválido, deve ser um array!"
        }
        return a.reduce((somador, valor) => somador + valor, 0);
    }

    static fatorial(a) {
        if (a < 0) {
            return "Número inválido, não é possível calcular o fatorial de um número negativo!"
        }
        if (a === 0 || a === 1) {
            return 1;
        }
        return a * this.fatorial(a - 1)
    }

    static media(a) {
        if (!Array.isArray(a)) {
            return "Parâmetro inválido, deve ser um array!"
        }
        if (a.length === 0) {
            return "Parâmetro inválido, o array não pode estar vazio!"
        }
        return this.somatoria(a) / a.length
    }
}