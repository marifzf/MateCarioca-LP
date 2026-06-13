document.addEventListener("DOMContentLoaded", () => {
    const elemento = document.querySelector("#form-contato");
    if(!elemento) return;

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                elemento.style.visibility = 'visible';
                elemento.style.animation = 'slideUp 0.8s ease forwards';
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(elemento);
});

document.addEventListener('submit', () => {
    const form = document.getElementById('form-contato');

    alert(form.nome.value);
});