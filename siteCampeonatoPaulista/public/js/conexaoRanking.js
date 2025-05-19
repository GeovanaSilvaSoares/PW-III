import {jogadores} from "./ranking.js";

// RANKING
let trsJogadores = document.querySelectorAll('tr.linhasRanking');

// Preencher as linhas com os dados dos jogadores
jogadores.forEach((jogador, index) => {
  if (index < trsJogadores.length) {
    let tds = trsJogadores[index].querySelectorAll('td');

    tds[0].textContent = jogador.nome;
    tds[1].textContent = jogador.time;
    tds[2].textContent = jogador.posicao;
    tds[3].textContent = jogador.quantGols;
  }
});