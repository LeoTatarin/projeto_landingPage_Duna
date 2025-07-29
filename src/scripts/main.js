const imagens = document.querySelectorAll('.galeria__content__coluna__imagem'); // Seleciona todas as imagens da galeria com a classe usada no seu HTML
const modal = document.getElementById('modalImagem'); // Seleciona o container do modal (a camada escura que aparece por trás da imagem ampliada)
const imagemExpandida = document.getElementById('imagemExpandida'); // Seleciona a imagem dentro do modal, que será substituída pela imagem clicada
const botaoFechar = document.querySelector('.galeria__modal__fechar'); // Seleciona o botão "fechar" (o X) do modal


imagens.forEach(imagem => { // Para cada imagem da galeria...
    imagem.addEventListener('click', () => { // ...adiciona um evento de clique
        imagemExpandida.src = imagem.src; // Define o src da imagem ampliada com o src da imagem clicada

        const id = imagem.id;
        let rotacao = 0;

        if (id && id.startsWith('corrigir-')) {
            const partes = id.split('-'); // ['corrigir', '1', 'esq']
            const vezes = parseInt(partes[1], 10);
            const direcao = partes[2];

            const graus = vezes * 90;

            rotacao = direcao === 'esq' ? -graus : graus;
        }

            imagemExpandida.style.transform = `rotate(${rotacao}deg)`;

        modal.style.display = 'flex'; // Mostra o modal (muda display de 'none' para 'flex')
    });
});


botaoFechar.addEventListener('click', () => { // Quando o botão de fechar for clicado, esconde o modal
    modal.style.display = 'none';
});


modal.addEventListener('click', (evento) => { // Fecha o modal ao clicar fora da imagem (no fundo escuro)
    if (evento.target === modal) { // Se o clique for no próprio modal (e não na imagem interna), fecha
        modal.style.display = 'none';
    }
});