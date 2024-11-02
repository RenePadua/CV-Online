// Aguarda o carregamento do conteúdo HTML antes de executar o código
document.addEventListener("DOMContentLoaded", function() {
    const dataFixa = new Date(1984, 2, 27);

    const dataAtual = new Date();

    // Calcula a diferença em milissegundos
    const diferencaEmMilissegundos = dataAtual - dataFixa;

    // Converte para anos
    const Anos = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24 * 365.25));

    // Exibe o resultado no HTML
    document.getElementById("nascimento").textContent = `${Anos} anos`;
});
