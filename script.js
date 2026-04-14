const classe = document.getElementById("Classe")
const imagem = document.getElementById("img")

function trocarImagem() {
    switch (classe.value.toLowerCase()) { 
        case 'hp':
            imagem.src = './Personagens/HP.png';
            break;
        case 'hermione':
            imagem.src = './Personagens/Hermione.png';
            break;
        case 'rony':
            imagem.src = './Personagens/Rony.png';
            break;
        default:
            imagem.src = './Personagens/Hermione.png';
    }
}
 
classe.addEventListener("input", trocarImagem);