class Clientes {
    clientes;
    constructor() {
        this.clientes = new Array();
        const c1 = new Cliente('Joãozinho', "30", 100);
        const c2 = new Cliente('Mariazinha', "40", 101);
        this.clientes.push(c1, c2);
    }
    inserir(cliente) {
        this.clientes.push(cliente);
    }
    remover(cpf) {
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover) {
            const indicecliente = this.clientes.indexOf(clienteARemover);
            if (indicecliente > -1) {
                this.clientes.splice(indicecliente, 1);
            }
        }
    }
    pesquisar(cpf) {
        return this.clientes.find(Cliente => Cliente.cpf === cpf);
    }
    listar() {
        return this.clientes;
    }
}
