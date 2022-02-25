let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular(){
    
    let adultos = inputAdultos.value 
    let criancas = inputCriancas.value 
    let duracao = inputDuracao.value


    let quantidadeCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 *criancas)
    let quantidadeCerva = cervaPP(duracao) * adultos
    let quantidadeBebidas = bebidasPP(duracao) * adultos + bebidasPP(duracao)/2 * criancas

    resultado.innerHTML = `<p>${quantidadeCarne / 1000}Kg de carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(quantidadeCerva / 355)} latas de cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(quantidadeBebidas / 2000)} Pets de 2L de bebidas</p>`
}


function carnePP(duracao){
    let carne = 400

    if(duracao >= 6){
        return 650
    }else{
        return 400
    }
}

function cervaPP(duracao){
    let carne = 400

    if(duracao >= 6){
        return 2000
    }else{
        return 1200
    }
}

function bebidasPP(duracao){
    let carne = 400

    if(duracao >= 6){
        return 1500
    }else{
        return 1000
    }
}