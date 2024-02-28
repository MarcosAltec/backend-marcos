const readline = require('readline-sync');
//const listar = () => {}
const controlador = require('./controlador');

function menu() {
    console.log('1.listar');
    console.log('2.Criar');
    console.log('3.Buscar');
    console.log('5.Atualizar');
    console.log('6.Remover');
    console.log('7.Sair');
}

function escolherOpcao(opcao) {
    switch(opcao) {
        case '1': controlador.listar(); break;
        case '2': controlador.criar(); break;
        case '3': controlador.buscar(); break;
        case '4': controlador.atualizar(); break;
        case '5': controlador.remover(); break;
        case '6': process.exit(0);
        default: console.log("Opcao invalida");
    }
    readline.question("Pressione ENTER para continuar...");
}

function main() {
    while(true) {
        menu();
        const opcao = readline.question("Entre com uma opcao: ");
        escolherOpcao(opcao);
    }
}

main();