let contaController = new ContaController();
contaController.listar();
const c1 = new Conta('1', 100);
const c2 = new Conta('1001', 2000);
const c3 = new Conta('1002', 1500);
const c4 = new Conta('1003', 1000);
const c5 = new Conta('1001', 3500);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);
let cliente003 = new Cliente("Kamen Rider Black", "08465132457", 110);
let cliente004 = new Cliente("Lion-Man", "08451691522", 111);
let cliente005 = new Cliente("Change-Men", "08451691523", 112);
let cliente006 = new Cliente("Flash-Men", "08451691524", 113);
let cliente007 = new Cliente("Seya", "08451691525", 114);
console.log('Conta: ' + c1.saldo);
p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);
cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);
let repositorioClientes = new Clientes;
//adicionando os clientes na lista de clientes "repositorioClientes"
repositorioClientes.inserir(cliente003);
repositorioClientes.inserir(cliente004);
repositorioClientes.inserir(cliente005);
repositorioClientes.inserir(cliente006);
repositorioClientes.inserir(cliente007);
//exibindo a lista com os clientes adicionados
console.log(repositorioClientes.listar());
//removendo o cliente Lion-Man e verificando no console se ele realmente foi excluído.
repositorioClientes.remover("08451691522");
console.log(repositorioClientes.listar());
//pesquisando o cliente Flash-Men
console.log(repositorioClientes.pesquisar("08451691524"));
