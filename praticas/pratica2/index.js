const readline = require('readline-sync');
const controlador = require('./controlador');

main()

function main() {
    while(true) {
        menu();
        const opcao = readline.question("Entre com uma opcao: ");
        escolherOpcao(opcao);
    }
}

function menu() {
    console.log('1.listar');
    console.log('2.Buscar');
    console.log('0.Sair');
}

function escolherOpcao(opcao) {
    switch(opcao) {
        case '1': controlador.listarContatos(); break;
        case '2': controlador.buscar(); break;
        case '0': process.exit(0);
        default: console.log("Opcao invalida");
    }
    readline.question("Pressione ENTER para continuar...");
}