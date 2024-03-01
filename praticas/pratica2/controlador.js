const Contato = require('./modelo');

const contatos = [];

function adicionarContato(nome, email, telefone) {
    const novoContato = new Contato (nome, email, telefone);
    contatos.push(novoContato);
}

function listarContatos() {
    return contatos
}

function buscarContato (nome) {
    const nome = readline.question("Entre com o nome do contato: ");
    const buscou = contatos.find(contato => contato.nome === nome);
    
}

module.exports = Contato;






const nome = readline.question("Entre com o nome do produto: ");
const email = readline.question("Entre com o nome do produto: ");
const telefone = readline.question("Entre com o nome do produto: ");
