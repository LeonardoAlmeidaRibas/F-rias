const prompt = require('prompt-sync')({ sigint: true });
let Atividades = [];
let Dia = [];

function checkData() {
    if (isNaN(data)) {
        console.log('Data inválida, insira uma data válida.');
    } else {
        Atividades.push(acao);
        Dia.push(data);
        console.log('Atividade adicionada com sucesso. Insira outra atividade ou digite sair.');
    }
}

function listar() {
    console.log(`\nO seu nome é ${nome}, e aqui estão suas atividades: \n`);

    Atividades.forEach((acao, index) => {
        console.log(index + 1 + '. ' + acao + ' foi realizada no dia ' + Dia[index]);
    });
    process.exit();
}

function adicionar() {
    acao = prompt('O quê você fez nas férias?');
    data = Number(prompt('Qual dia?'));
}

module.exports = { checkData, listar, adicionar };