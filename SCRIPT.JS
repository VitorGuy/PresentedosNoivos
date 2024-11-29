// Seleciona o botão e o campo de texto
const botaoCopiar = document.getElementById('copiar');
const codigoPix = document.getElementById('codigoPix');

// Adiciona o evento de clique ao botão
botaoCopiar.addEventListener('click', () => {
  // Seleciona o texto dentro do campo
  codigoPix.select();
  codigoPix.setSelectionRange(0, 99999); // Para dispositivos móveis

  // Copia o texto para a área de transferência
  navigator.clipboard.writeText(codigoPix.value)
    .then(() => {
      alert('Código PIX copiado com sucesso!');
    })
    .catch((err) => {
      console.error('Erro ao copiar o código PIX:', err);
    });
});
