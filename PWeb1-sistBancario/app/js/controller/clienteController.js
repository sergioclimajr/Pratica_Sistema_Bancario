class clienteController {
    inputNome;
    inputCpf;
    inputConta;
    clientes;
    constructor() {
        this.inputNome = document.getElementById('nome');
        this.inputCpf = document.querySelector("#cpf");
        this.inputConta = document.querySelector("#conta");
        this.clientes = new Clientes();
    }
    inserir(evento) {
        evento.preventDefault();
        let novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value, parseInt(this.inputConta.value));
        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }
    listar() {
        this.clientes.listar().forEach(cliente => (this.inserirClienteNoHTML(cliente)));
    }
    inserirClienteNoHTML(cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo cliente ' + cliente.toString());
            this.clientes.remover(cliente.nome);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
