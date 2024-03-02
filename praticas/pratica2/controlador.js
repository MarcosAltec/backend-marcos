const Contato = require('./modelo');

const contatos = [
    {nome: "marcos", email: "marcospassos", telefone: 4444},
    {nome: "lucas", email: "lucasoliveira", telefone: 3333},
];

function adicionarContato(nome, email, telefone) {
    const novoContato = new Contato (nome, email, telefone);
    contatos.push(novoContato);
}

function listarContatos() {
    return contatos
}

function buscarContato (nome) {
    const buscou = contatos.find(contato => contato.nome === nome);
    return buscou
}

function atualizarContato (nome, email, telefone) {
    const buscar = contatos.find(contato => contato.nome === nome);
    const contato = controlador.buscarContato(nome)
    if (contato) {
        console.log(contato);
    } else {
        console.log("FALHOU")
    }   
}

module.exports = {adicionarContato, listarContatos, buscarContato};