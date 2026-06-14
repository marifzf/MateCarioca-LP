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

const formulario = document.getElementById('form-contato');

const urlGoogleScript = 'https://script.google.com/macros/s/AKfycbzKuXvwwh6uCKPR467JyjCI5lyDyJsDkbeDxUz4Wu4qpQPDNFSsR8LvUWaVvYTBE1xi/exec'; 

formulario.addEventListener('submit', async function(event) {
    event.preventDefault(); 

    const dadosFormulario = {
        nome: formulario.nome.value,
        empresa: formulario.empresa.value,
        email: formulario.email.value,
        telefone: formulario.telefone.value,
        mensagem: formulario.mensagem.value
    };

    try {
        const response = await fetch(urlGoogleScript, {
            method: 'POST',
            mode: 'no-cors', // Evita erros de bloqueio de segurança do navegador (CORS)
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosFormulario)
        });

        formulario.reset();
        alert('Obrigado, Em breve entraremos em contato!');
    } catch (error) {
        alert('Erro ao enviar os dados: ' + error.message);
    }
});