document.addEventListener("DOMContentLoaded", () => {
    
    const animacaoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
                
                animacaoObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 
    });

    const elementosParaAnimar = document.querySelectorAll('.animar-scroll');
    
    elementosParaAnimar.forEach(elemento => {
        animacaoObserver.observe(elemento);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const trilho = document.querySelector('.carrossel-trilho');
    const setaEsquerda = document.querySelector('.seta-esquerda');
    const setaDireita = document.querySelector('.seta-direita');

    if (!trilho || !setaEsquerda || !setaDireita) return;

    const GAP = 40; 
    let animando = false;

    const calcularPasso = () => {
        const card = trilho.querySelector('.card-produto');
        return card.offsetWidth + GAP;
    };

    setaDireita.addEventListener('click', () => {
        if (animando) return;
        animando = true;

        trilho.style.transition = 'transform 0.5s ease';
        trilho.style.transform = `translateX(-${calcularPasso()}px)`;

        trilho.addEventListener('transitionend', () => {
            trilho.style.transition = 'none';
            trilho.appendChild(trilho.firstElementChild);
            trilho.style.transform = 'translateX(0)';
            void trilho.offsetWidth; 
            animando = false;
        }, { once: true });
    });

    setaEsquerda.addEventListener('click', () => {
        if (animando) return;
        animando = true;

        trilho.style.transition = 'none';
        trilho.prepend(trilho.lastElementChild);
        trilho.style.transform = `translateX(-${calcularPasso()}px)`;
        void trilho.offsetWidth;

        trilho.style.transition = 'transform 0.5s ease';
        trilho.style.transform = 'translateX(0)';

        trilho.addEventListener('transitionend', () => {
            animando = false;
        }, { once: true });
    });
});