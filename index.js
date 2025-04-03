class Funcionario {
    constructor(nome, idade, cargo, salario) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.salario = salario;
    }
}

let funcionarios = [];

function cadastrarFuncionario() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let cargo = document.getElementById("cargo").value;
    let salario = document.getElementById("salario").value;

    if (nome && idade && cargo && salario) {
        let funcionario = new Funcionario(nome, Number(idade), cargo, Number(salario));
        funcionarios.push(funcionario);
        atualizarTabela();
    }
}

function atualizarTabela() {
    let tabela = document.getElementById("tabelaFuncionarios");
    tabela.innerHTML = "";
    funcionarios.forEach((funcionario, index) => {
        let row = `<tr>
            <td>${funcionario.nome}</td>
            <td>${funcionario.idade}</td>
            <td>${funcionario.cargo}</td>
            <td>${funcionario.salario}</td>
            <td>
                <button onclick="editarFuncionario(${index})">Editar</button>
                <button onclick="excluirFuncionario(${index})">Excluir</button>
            </td>
        </tr>`;
        tabela.innerHTML += row;
    });
}

function excluirFuncionario(index) {
    funcionarios.splice(index, 1);
    atualizarTabela();
}

function editarFuncionario(index) {
    let funcionario = funcionarios[index];
    document.getElementById("nome").value = funcionario.nome;
    document.getElementById("idade").value = funcionario.idade;
    document.getElementById("cargo").value = funcionario.cargo;
    document.getElementById("salario").value = funcionario.salario;
    excluirFuncionario(index);
}
