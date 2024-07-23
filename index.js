const prompt = require('prompt-sync')({ sigint: true });
const { checkData, listar, adicionar } = require('./main.js');


nome = prompt('Qual o seu nome? ');

while (true) {
    console.log(`Selecione a opção desejada:\n1 - adicionar atividade\n2 - listar atividades`);
    opcao = Number(prompt());

    switch (opcao) {
        case 1:
            adicionar();
            checkData(data);
            break;
        case 2:
            listar();
            process.exit();
            break;
        default:
            console.log('Opção inválida');
            break;
    }
}