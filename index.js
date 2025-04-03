class Funcionario {
    constructor(nome, idade, cargo, salario) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.salario = salario;
    }

    toString() {
        return `${this.nome}, ${this.idade} anos, ${this.cargo}, Salário: R$ ${this.salario}`;
    }
}

let funcionarios = [];

document.getElementById("cadastrar").addEventListener("click", () => {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let cargo = document.getElementById("cargo").value;
    let salario = document.getElementById("salario").value;

    if (nome && idade && cargo && salario) {
        let funcionario = new Funcionario(nome, Number(idade), cargo, Number(salario));
        funcionarios.push(funcionario);
        atualizarTabela();
    }
});

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

// Relatórios
document.getElementById("relatorioSalarios").addEventListener("click", () => {
    let resultado = funcionarios.filter(f => f.salario > 5000).map(f => f.toString()).join("<br>");
    document.getElementById("relatorio").innerHTML = resultado || "Nenhum funcionário encontrado.";
});

document.getElementById("mediaSalarial").addEventListener("click", () => {
    let total = funcionarios.reduce((sum, f) => sum + f.salario, 0);
    let media = funcionarios.length ? (total / funcionarios.length).toFixed(2) : 0;
    document.getElementById("relatorio").innerHTML = `Média Salarial: R$ ${media}`;
});

document.getElementById("cargosUnicos").addEventListener("click", () => {
    let cargos = [...new Set(funcionarios.map(f => f.cargo))].join(", ");
    document.getElementById("relatorio").innerHTML = `Cargos Únicos: ${cargos}`;
});

document.getElementById("nomesMaiusculo").addEventListener("click", () => {
    let nomes = funcionarios.map(f => f.nome.toUpperCase()).join(", ");
    document.getElementById("relatorio").innerHTML = `Nomes: ${nomes}`;
});
