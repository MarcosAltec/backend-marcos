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
        case '1': {
            const contatos = controlador.listarContatos();
            contatos.forEach(contato => console.log(contato));
            break;}

        case '2': {
            const nome = readline.question("Entre com o nome: ");
            const contato = controlador.buscarContato(nome)
            if (contato) {
                console.log(contato);
            } else {
                console.log("FALHOU")
            }            
            break;}

        case '0': process.exit(0);
        default: console.log("Opcao invalida");
    }
    readline.question("Pressione ENTER para continuar...");
}

module.exports = {nome};