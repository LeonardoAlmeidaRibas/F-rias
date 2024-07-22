const prompt = require("prompt-sync")({ sigint: true });

const dias = [];

function create(dias) {
    dias.push(dias)
}

const read = () => {
    if(dias.length === 0) {
        console.log(`Nenhum dia encontrado.`)
    }
    dias.forEach((dias, indice) => {
        console.log(`${indice + 1} - ${dias}`)
    })
}

const update = function(dias, indice) {
    dias[indice] = dias
}

const destroy = indice => {
    if(dias.includes(indice)) {
        dias.splice(indice, 1)
        console.log(`Dia Removido!`)
    }
    dias.splice(indice, 1)
}

module.exports = {
    dias,
    create,
    read,
    update,
    destroy
}