import {jogos_quartas} from "./jogos.js";
import {jogos_semi} from "./jogos.js";
import {jogos_final} from "./jogos.js";

// Quartas de final
let jogosQ = document.querySelectorAll('.containerFases.quartas');

for (let i = 0; i < jogosQ.length; i++) {
    const div = jogosQ[i];
    const jogo = jogos_quartas[i];

    if (jogo) {
        div.querySelector('.local').textContent = jogo.local;
        div.querySelector('.data').textContent = jogo.data;
        div.querySelector('.horario').textContent = jogo.horario;

        const times = div.querySelectorAll('.time');
        if (times.length >= 2) {
            // Time 1
            times[0].querySelector('.logoTime').src = jogo.imagem1;
            times[0].querySelector('.nomeTime').textContent = jogo.nomeTime1;
            times[0].querySelector('.gols').textContent = jogo.placarTime1;

            // Time 2
            times[1].querySelector('.logoTime').src = jogo.imagem2;
            times[1].querySelector('.nomeTime').textContent = jogo.nomeTime2;
            times[1].querySelector('.gols').textContent = jogo.placarTime2;
        }
    }
}

// Semi final
let jogosS = document.querySelectorAll('.containerFases.semi');

for (let i = 0; i < jogosS.length; i++) {
    const div = jogosS[i];
    const jogo = jogos_semi[i];

    if (jogo) {
        div.querySelector('.local').textContent = jogo.local;
        div.querySelector('.data').textContent = jogo.data;
        div.querySelector('.horario').textContent = jogo.horario;

        const times = div.querySelectorAll('.time');
        if (times.length >= 2) {
            // Time 1
            times[0].querySelector('.logoTime').src = jogo.imagem1;
            times[0].querySelector('.nomeTime').textContent = jogo.nomeTime1;
            times[0].querySelector('.gols').textContent = jogo.placarTime1;

            // Time 2
            times[1].querySelector('.logoTime').src = jogo.imagem2;
            times[1].querySelector('.nomeTime').textContent = jogo.nomeTime2;
            times[1].querySelector('.gols').textContent = jogo.placarTime2;
        }
    }
}


// Final
let jogosF = document.querySelectorAll('.containerFases.final');

for (let i = 0; i < jogosF.length; i++) {
    const div = jogosF[i];
    const jogo = jogos_final[i];

    if (jogo) {
        div.querySelector('.local').textContent = jogo.local;
        div.querySelector('.data').textContent = jogo.data;
        div.querySelector('.horario').textContent = jogo.horario;

        const times = div.querySelectorAll('.time');
        if (times.length >= 2) {
            // Time 1
            times[0].querySelector('.logoTime').src = jogo.imagem1;
            times[0].querySelector('.nomeTime').textContent = jogo.nomeTime1;
            times[0].querySelector('.gols').textContent = jogo.placarTime1;

            // Time 2
            times[1].querySelector('.logoTime').src = jogo.imagem2;
            times[1].querySelector('.nomeTime').textContent = jogo.nomeTime2;
            times[1].querySelector('.gols').textContent = jogo.placarTime2;
        }
    }
}
 