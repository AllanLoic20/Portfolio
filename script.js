

// Chargement de ma page 

window.addEventListener('load', function() {
    var chargementPage = document.querySelector('.chargement');
    var chargement = document.querySelector('.charContent');
    var contenuPage = document.querySelector('.contenu-page');

    setTimeout(function() {
        chargement.style.opacity = '0';
        contenuPage.style.opacity = '1';
        setTimeout(function() {
            chargement.style.display = 'none';
            contenuPage.style.display = 'block';
        }, 1000); // 1 seconde après la fin de la transition
    }, 3000); // 3 secondes

    window.addEventListener('beforeunload', function() {
        chargement.style.display = 'block';
        contenuPage.style.display = 'none';
    });
});



// Récupère l'élément de présentation
const presentation = document.getElementById('presentation');
// Textes à afficher
const texts = ['Bonjour,', 'Moi c\'est Allan Loïc.', 'Developpeur Front End'];

// Fonction pour afficher les textes progressivement
function animateText(index) {
    setTimeout(() => {
        presentation.textContent = texts[index];
        if (index < texts.length - 1) {
            animateText(index + 1);
        }
    }, 3000); // Délai d'une seconde entre chaque changement de texte
}

// Démarre l'animation au chargement de la page
animateText(0);

