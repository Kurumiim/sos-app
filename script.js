function openTab(evt, tabName) {
    var i, tabContent, tabButtons;

    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabButtons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("loginTab").style.display = "block";
document.getElementsByClassName("tab-button")[0].className += " active";

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de verificação de usuário e senha.
    // Se as credenciais estiverem corretas, redirecione para a página "inicio.html".
    // Exemplo: window.location.href = "inicio.html";
});

document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de registro de novo usuário e senha.
    // Após o registro bem-sucedido, você pode redirecionar para a página de login ou ação desejada.
});

document.addEventListener("DOMContentLoaded", function () {
    const clienteSelect = document.getElementById("cliente");
    const searchButton = document.getElementById("search-button");
    const filtroDataSelect = document.getElementById("filtro-data");
    const mesAnoInput = document.getElementById("mes-ano");
    const filterButton = document.getElementById("filter-button");
    const resultado = document.getElementById("resultado");

    // Exemplo de dados de notas fiscais (substitua com seus próprios dados)
    const notasFiscais = [
        { cliente: "Cliente 1", data: "2023-09-15", valor: 1000 },
        { cliente: "Cliente 2", data: "2023-08-25", valor: 800 },
        { cliente: "Cliente 1", data: "2023-07-10", valor: 1200 },
        // ...
    ];

    // Função para exibir as notas fiscais com base nos filtros
    function exibirNotasFiscais(clienteSelecionado, filtroSelecionado, mesAnoSelecionado) {
        // Lógica de filtragem e exibição de notas fiscais
        // ...
        // Use as variáveis clienteSelecionado, filtroSelecionado e mesAnoSelecionado
        // para determinar quais notas fiscais devem ser exibidas
        // e exiba os resultados na div "resultado"
    }

    // Adicione um evento de clique ao botão de busca
    searchButton.addEventListener("click", function () {
        const clienteSelecionado = clienteSelect.value;
        const filtroSelecionado = filtroDataSelect.value;
        const mesAnoSelecionado = mesAnoInput.value;

        exibirNotasFiscais(clienteSelecionado, filtroSelecionado, mesAnoSelecionado);
    });




    /** CADASTRAR CLIENTE  */

    // Suponha que você tenha uma lista de clientes em um array chamado "clientes".
    var clientes = [
        { nome: "Cliente 1", endereco: "Endereço 1", telefone: "Telefone 1" },
        { nome: "Cliente 2", endereco: "Endereço 2", telefone: "Telefone 2" },
        { nome: "Cliente 3", endereco: "Endereço 3", telefone: "Telefone 3" },
        // ...
    ];

    // Função para realizar a busca de clientes com base no nome
    function buscarClientes() {
        // Obtém o valor digitado no campo de pesquisa
        var nomePesquisa = document.getElementById("nome-pesquisa").value.toLowerCase();

        // Filtra a lista de clientes com base no nome de pesquisa
        var resultados = clientes.filter(function (cliente) {
            return cliente.nome.toLowerCase().includes(nomePesquisa);
        });

        // Exibe os resultados na página
        exibirResultados(resultados);
    }

    // Função para exibir os resultados na página
    function exibirResultados(resultados) {
        var resultadosContainer = document.getElementById("resultados-container");
        resultadosContainer.innerHTML = ""; // Limpa os resultados anteriores

        if (resultados.length === 0) {
            resultadosContainer.innerHTML = "<p>Nenhum cliente encontrado.</p>";
        } else {
            resultados.forEach(function (cliente) {
                var clienteInfo = `
                <div class="cliente-info">
                    <p><strong>Nome:</strong> ${cliente.nome}</p>
                    <p><strong>Endereço:</strong> ${cliente.endereco}</p>
                    <p><strong>Telefone:</strong> ${cliente.telefone}</p>
                </div>
            `;
                resultadosContainer.innerHTML += clienteInfo;
            });
        }
    }

    // Evento de escuta para o botão de busca
    var botaoBuscar = document.getElementById("botao-buscar");
    botaoBuscar.addEventListener("click", buscarClientes);


    // Adicione um evento de clique ao botão de filtro
    filterButton.addEventListener("click", function () {
        const clienteSelecionado = clienteSelect.value;
        const filtroSelecionado = filtroDataSelect.value;
        const mesAnoSelecionado = mesAnoInput.value;

        exibirNotasFiscais(clienteSelecionado, filtroSelecionado, mesAnoSelecionado);
    });
});


/** CONSULTAR CLIENTES  */

// Suponha que você tenha uma lista de clientes cadastrados.
var clientesCadastrados = [
    { nome: "Cliente 1", endereco: "Endereço 1", telefone: "Telefone 1" },
    { nome: "Cliente 2", endereco: "Endereço 2", telefone: "Telefone 2" },
    { nome: "Cliente 3", endereco: "Endereço 3", telefone: "Telefone 3" },
    // ...
];

// Função para exibir a lista de clientes na página
function exibirClientes() {
    var listaClientes = document.getElementById("lista-clientes");

    // Limpa a lista de clientes existente
    listaClientes.innerHTML = "";

    // Itera pelos clientes cadastrados e cria elementos HTML para cada um deles
    clientesCadastrados.forEach(function (cliente) {
        var itemLista = document.createElement("li");
        itemLista.innerHTML = `
            <strong>Nome:</strong> ${cliente.nome}<br>
            <strong>Endereço:</strong> ${cliente.endereco}<br>
            <strong>Telefone:</strong> ${cliente.telefone}<br>
        `;
        listaClientes.appendChild(itemLista);
    });
}

// Chama a função para exibir os clientes quando a página carregar
window.addEventListener("load", exibirClientes);


/**ORDEM DE SERVIÇO  */

document.addEventListener('DOMContentLoaded', function () {
    const ordemServicoForm = document.getElementById('ordemServicoForm');

    ordemServicoForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Obtenha os valores do formulário
        const cliente = document.getElementById('cliente').value;
        const dataAbertura = document.getElementById('dataAbertura').value;
        const descricao = document.getElementById('descricao').value;
        const status = document.getElementById('status').value;

        // Aqui você pode enviar esses dados para o servidor ou fazer outras operações necessárias
        console.log('Cliente:', cliente);
        console.log('Data de Abertura:', dataAbertura);
        console.log('Descrição:', descricao);
        console.log('Status:', status);

        // Limpe o formulário ou faça outras ações necessárias
        ordemServicoForm.reset();
    });
});

const { Client } = require('pg');

// Configuração da conexão com o PostgreSQL
const client = new Client({
  user: 'lucas',        // Nome de usuário do PostgreSQL
  host: 'localhost',          // Host onde o PostgreSQL está em execução
  database: 'sosdb',          // Nome do banco de dados
  password: '2221',      // Senha do PostgreSQL
  port: 5432,                 // Porta padrão do PostgreSQL
});

// Conecta ao PostgreSQL
client.connect();

// Exemplo de consulta SQL
client.query('SELECT * FROM pg_default', (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(res.rows);
  // Faça algo com os resultados da consulta aqui
});

// Fecha a conexão
client.end();


