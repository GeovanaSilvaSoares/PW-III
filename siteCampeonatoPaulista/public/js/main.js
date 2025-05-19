import { grupos } from "./classificacao.js";

// FASE GRUPOS

let trs = document.querySelectorAll('tbody tr')

function obter(tr){
    let linha1 = tr.children

    let c1x1 = linha1[0]
    let c1x2 = linha1[1]
    let c1x3 = linha1[2]
    let c1x4 = linha1[3]
    let c1x5 = linha1[4]
    let c1x6 = linha1[5]
    let c1x7 = linha1[6]
    let c1x8 = linha1[7]
    let c1x9 = linha1[8]
    let c1x10 = linha1[9]

    let lista = [c1x1, c1x2, c1x3, c1x4, c1x5, c1x6, c1x7, c1x8, c1x9, c1x10,]
    return lista
}

function editar(lista, i){
    lista[0].textContent = grupos[i].nome
    lista[1].textContent = grupos[i].pontos
    lista[2].textContent = grupos[i].jogos
    lista[3].textContent = grupos[i].vitorias
    lista[4].textContent = grupos[i].empates
    lista[5].textContent = grupos[i].derrotas
    lista[6].textContent = grupos[i].golsPro
    lista[7].textContent = grupos[i].golsContra
    lista[8].textContent = grupos[i].saldoGols
    lista[9].textContent = grupos[i].aproveitamento
}


for(let i=0; i<trs.length; i++){
    let iDados = i
    let lista = obter(trs[i])
    editar(lista, iDados)

}
