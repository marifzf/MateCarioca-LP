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

/* ===================================
       LÓGICA DO BOTÃO SCROLL TO TOP
    ================================== */
       
    
    const botaoTopo = document.getElementById('botao-topo');
    
    window.addEventListener('scroll', () => {        
        
        if (window.scrollY > 300) {
            
            botaoTopo.classList.remove('escondido');
            botaoTopo.classList.add('visivel');
        } else {

            botaoTopo.classList.remove('visivel');
            botaoTopo.classList.add('escondido');
        }
    });
    
    botaoTopo.addEventListener('click', () => {
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });