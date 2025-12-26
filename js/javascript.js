document.addEventListener('DOMContentLoaded', function() {
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

    // --- Correção do Botão de Compartilhamento ---

    const shareButton = document.getElementById('share-button');

    if (shareButton) {
        shareButton.addEventListener('click', async () => {
            // Verifica se a API de Compartilhamento Web é suportada
            if (navigator.share) {
                try {
                    await navigator.share({
                        title: document.title, // Usa o título da página dinamicamente
                        text: 'Confira o currículo online de Renê Pádua.',
                        url: window.location.href // Usa a URL atual da página
                    });
                    console.log('Conteúdo compartilhado com sucesso!');
                } catch (error) {
                    console.error('Erro ao compartilhar:', error);
                }
            } else {
                // Fallback para navegadores que não suportam a API
                // A API Clipboard funciona melhor em contextos seguros (HTTPS)
                // Tenta copiar para a área de transferência
                navigator.clipboard.writeText(window.location.href).then(() => {
                    alert('A função de compartilhar não é suportada neste navegador. O link foi copiado para a área de transferência!');
                }).catch(() => {
                    alert('A função de compartilhar não é suportada neste navegador.');
                });
            }
        });
    }

    // --- Correção dos Botões de Mudança de Página (Idioma) ---

    const langButtons = document.querySelectorAll('#lang a.dropdown-item');

    langButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const langId = this.id;
            
            if (langId === 'pt') {
                // O botão "Português" deve levar para index.html
                event.preventDefault(); // Previne o comportamento padrão do href="#"
                
                // Verifica se já está na página em português (index.html ou raiz)
                const currentPath = window.location.pathname;
                if (currentPath.endsWith('index.html') || currentPath === '/') {
                    console.log('Já está na versão em Português.');
                } else {
                    // Redireciona para a versão em português
                    window.location.href = 'index.html';
                }
            } else if (langId === 'en') {
                // O botão "Inglês" já tem o href="index-en.html".
                console.log('Redirecionando para a versão em Inglês.');
            }
        });
    });
});
