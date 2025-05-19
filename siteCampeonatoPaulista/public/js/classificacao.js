export const grupos = [
    {
        nome: 'Corinthians',
        pontos: 0,
        jogos: 12,
        vitorias: 8,
        empates: 3,
        derrotas: 1,
        golsPro: 20,
        golsContra: 13,
        saldoGols: 0,
        aproveitamento: 0       
    },

    {
        nome: 'Mirassol',
        pontos: 0,
        jogos: 12,
        vitorias: 5,
        empates: 1,
        derrotas: 6,
        golsPro: 21,
        golsContra: 21,
        saldoGols: 0,
        aproveitamento: 0       
    },
    
    {
        nome: 'Botafogo',
        pontos: 0,
        jogos: 12,
        vitorias: 2,
        empates: 5,
        derrotas: 5,
        golsPro: 8,
        golsContra: 13,
        saldoGols: 0,
        aproveitamento: 0        
    },

    {
        nome: 'Inter de Limeira',
        pontos: 0,
        jogos: 12,
        vitorias: 0,
        empates: 7,
        derrotas: 5,
        golsPro: 9,
        golsContra: 19,
        saldoGols: 0,
        aproveitamento: 0       
    },

    {
        nome: 'Santos',
        pontos: 0,
        jogos: 12,
        vitorias: 5,
        empates: 3,
        derrotas: 4,
        golsPro: 20,
        golsContra: 14,
        saldoGols: 0,
        aproveitamento: 0      
    },

    {
        nome: 'Bragantino',
        pontos: 0,
        jogos: 12,
        vitorias: 5,
        empates: 2,
        derrotas: 5,
        golsPro: 14,
        golsContra: 13,
        saldoGols: 0,
        aproveitamento: 0      
    },

    {
        nome: 'Guarani',
        pontos: 0,
        jogos: 12,
        vitorias: 3,
        empates: 4,
        derrotas: 5,
        golsPro: 14,
        golsContra: 14,
        saldoGols: 0,
        aproveitamento: 0       
    },

    {
        nome: 'Portuguesa',
        pontos: 0,
        jogos: 12,
        vitorias: 2,
        empates: 7,
        derrotas: 3,
        golsPro: 15,
        golsContra: 16,
        saldoGols: 0,
        aproveitamento: 0        
    },

    {
        nome: 'São Paulo',
        pontos: 0,
        jogos: 12,
        vitorias: 5,
        empates: 4,
        derrotas: 3,
        golsPro: 18,
        golsContra: 13,
        saldoGols: 0,
        aproveitamento: 0       
    },

    {
        nome: 'Novorizontino',
        pontos: 0,
        jogos: 12,
        vitorias: 4,
        empates: 6,
        derrotas: 2,
        golsPro: 13,
        golsContra: 11,
        saldoGols: 0,
        aproveitamento: 0       
    },
    
    {
        nome: 'Noroeste',
        pontos: 0,
        jogos: 12,
        vitorias: 1,
        empates: 5,
        derrotas: 6,
        golsPro: 12,
        golsContra: 19,
        saldoGols: 0,
        aproveitamento: 0        
    },

    {
        nome: 'Água Santa',
        pontos: 0,
        jogos: 12,
        vitorias: 1,
        empates: 4,
        derrotas: 7,
        golsPro: 10,
        golsContra: 23,
        saldoGols: 0,
        aproveitamento: 0       
    },

    {
        nome: 'São Bernardo',
        pontos: 0,
        jogos: 12,
        vitorias: 7,
        empates: 2,
        derrotas: 3,
        golsPro: 19,
        golsContra: 16,
        saldoGols: 0,
        aproveitamento: 0      
    },

    {
        nome: 'Palmeiras',
        pontos: 0,
        jogos: 12,
        vitorias: 6,
        empates: 5,
        derrotas: 1,
        golsPro: 21,
        golsContra: 10,
        saldoGols: 0,
        aproveitamento: 0      
    },

    {
        nome: 'Ponte Preta',
        pontos: 0,
        jogos: 12,
        vitorias: 6,
        empates: 4,
        derrotas: 5,
        golsPro: 12,
        golsContra: 8,
        saldoGols: 0,
        aproveitamento: 0       
    },

    {
        nome: 'Velo Clube',
        pontos: 0,
        jogos: 12,
        vitorias: 3,
        empates: 4,
        derrotas: 5,
        golsPro: 13,
        golsContra: 16,
        saldoGols: 0,
        aproveitamento: 0        
    },

];


grupos.forEach(time => {
    time.pontos = (time.vitorias*3) + time.empates;
    time.saldoGols = time.golsPro - time.golsContra;
    time.aproveitamento = ((time.pontos / (time.jogos * 3)) * 100).toFixed(1);
});
