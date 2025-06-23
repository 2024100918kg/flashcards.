document.querySelectorAll('.flashcard').forEach(flashcard => {
    flashcard.addEventListener('click', () => {
        // Mostra ou esconde a resposta
        flashcard.classList.toggle('active');
        // Atualiza o conteúdo da resposta
        const answer = flashcard.querySelector('.answer');
        if (flashcard.classList.contains('active')) {
            answer.textContent = flashcard.getAttribute('data-answer');
        } else {
            answer.textContent = '';
        }
    });
});
