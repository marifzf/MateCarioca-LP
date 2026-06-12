// Aguarda todo o conteúdo do HTML ser carregado antes de executar o script
document.addEventListener("DOMContentLoaded", () => {
    
    // Configura o observador
    const animacaoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Se o elemento estiver visível na tela
            if (entry.isIntersecting) {
                // Adiciona a classe que engatilha a transição CSS
                entry.target.classList.add('visivel');
                
                // Para de observar para a animação ocorrer apenas uma vez
                animacaoObserver.unobserve(entry.target);
            }
        });
    }, {
        // O elemento começará a animar quando 15% dele aparecer na tela
        threshold: 0.15 
    });

    // Seleciona todos os elementos do HTML que possuem a classe 'animar-scroll'
    const elementosParaAnimar = document.querySelectorAll('.animar-scroll');
    
    // Manda o observador vigiar cada um desses elementos
    elementosParaAnimar.forEach(elemento => {
        animacaoObserver.observe(elemento);
    });
});