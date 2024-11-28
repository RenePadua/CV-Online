const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

if (navigator.share) {
    console.log("Web Share API é suportada!");
} else {
    console.log("Web Share API não é suportada neste navegador.");
}

const shareButtons = document.getElementsByClassName('shareButton');

// Handle multiple elements with the same class
for (let i = 0; i < shareButtons.length; i++) {
    shareButtons[i].addEventListener('click', function() {
        if (navigator.share) {
            navigator.share({
                title: 'Confira este site interessante!',
                text: 'Trata-se de um <i>curriculum vitae</i>:',
                url: 'https://renepadua.github.io/CV-Online/'
            })
            .then(() => console.log('Compartilhamento realizado com sucesso!'))
            .catch((error) => console.error('Erro ao compartilhar:', error));
        } else {
            alert('Compartilhamento não suportado neste navegador.');
        }
    });
}