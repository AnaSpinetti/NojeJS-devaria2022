
// Capturando instruções via linha de comando
const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const validarNumero = (numero) => {
    const resultado = Number.parseFloat(numero);
    if(!resultado){
        console.log('Número inválido')
    }
        return resultado
}

const validarOperador = (operador) => {
    switch(operador){
        case '+':
        case '-':
        case '/':
        case '*':
        case '%':
            return operador;
        default:
            console.log('operador informado inválido');
            return null;
    }
}

readLine.question('Favor informar um número:', (numero1) => {
    const numeroValidado1 = validarNumero(numero1);
        
        if(numeroValidado1){
            readLine.question('Favor informar outro número:', (numero2) => {
            const numeroValidado2 = validarNumero(numero2);

                if(numeroValidado2){
                    readLine.question('Favor informar o operador:', (operador) => {
                        const operadorValidado = validarOperador(operador);
                        if(operadorValidado){
                            switch(operadorValidado){
                                case '+': console.log(`operador selecionado '+'. o resultado de ${numeroValidado1} + ${numeroValidado2}  é = ${numeroValidado1 + numeroValidado2}`);
                                    break;
                                case '-': console.log(`operador selecionado '-'. o resultado de ${numeroValidado1} - ${numeroValidado2}  é = ${numeroValidado1 - numeroValidado2}`);
                                    break;
                                case '/': console.log(`operador selecionado '*'. o resultado de ${numeroValidado1} * ${numeroValidado2}  é = ${numeroValidado1 * numeroValidado2}`);
                                    break;
                                case '*': console.log(`operador selecionado '/'. o resultado de ${numeroValidado1} / ${numeroValidado2}  é = ${numeroValidado1 / numeroValidado2}`);
                                    break;
                                case '%': console.log(`operador selecionado '%(modal)'. o resultado de ${numeroValidado1} % ${numeroValidado2}  é = ${numeroValidado1 % numeroValidado2}`);
                                    break;
                                default: 
                                    break;
                            }
                        }
                    })
                
                }
            }) 
        }
    
    })   

