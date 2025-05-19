// Efeito scroll
window.revelar = ScrollReveal({reset:true}) // Resetar os elementos do site

// titulo
revelar.reveal('.efeito1', {
    duration: 1000, 
    distance: '80px',
    delay: 200,
    origin: 'left'
})

// Menu
revelar.reveal('.efeito', {
    duration: 1000, 
    distance: '50px',
    delay: 250,
    origin: 'top'
})

// Tabelas 
revelar.reveal('.efeitoT', {
    duration: 1000, 
    distance: '50px',
    delay: 500,
    origin: 'bottom'
})

revelar.reveal('.efeitoFases', {
    duration: 2000, 
    distance: '50px',
    delay: 250,
    origin: 'bottom'
})
