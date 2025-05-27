

const botao = document.getElementById('mat');

botao.addEventListener('mouseover', () => {
  botao.textContent = ' Exatas, algebra e ângulos';
});

botao.addEventListener('mouseout', () => {
  botao.textContent = 'Matemática';
});

const botao2 = document.getElementById('lp');

botao2.addEventListener('mouseover', () => {
  botao2.textContent = ' Portuguâs e Inglês';
});

botao2.addEventListener('mouseout', () => {
  botao2.textContent = 'Linguagens';
});

const botao3 = document.getElementById('ch');

botao3.addEventListener('mouseover', () => {
  botao3.textContent = ' História e Geografia';
});

botao3.addEventListener('mouseout', () => {
  botao3.textContent = 'Ciências da Natureza';
});

const botao4 = document.getElementById('cn');

botao4.addEventListener('mouseover', () => {
  botao4.textContent = ' Biologia, Física e Química';
});

botao4.addEventListener('mouseout', () => {
  botao4.textContent = 'Ciências da Natureza';
});



const searchInput = document.getElementById('search-bar');
const suggestionsBox = document.getElementById('suggestions');

const suggestions = [
    'Matemática',
    'Linguagens',
    'Ciências Humanas',
    'Ciências da Natureza',
    'História',
    'Geografia',
    'Biologia',
    'Física',
    'Química',
    'Inglês',
    'Português'
];

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    suggestionsBox.innerHTML = '';

    if (query) {
        const filteredSuggestions = suggestions.filter(option =>
            option.toLowerCase().includes(query)
        );

        filteredSuggestions.forEach(option => {
            const suggestionItem = document.createElement('div');
            suggestionItem.textContent = option;
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.addEventListener('click', () => {
                searchInput.value = option;
                suggestionsBox.innerHTML = '';
            });
            suggestionsBox.appendChild(suggestionItem);
        });
    }
});