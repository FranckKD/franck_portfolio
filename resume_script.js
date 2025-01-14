// Récupération des boutons et des sections
const buttons = document.querySelectorAll('.titles button');
const sections = document.querySelectorAll('.details .section');

// Fonction pour mettre à jour l'affichage des sections
function updateActiveSection(selectedButton) {
  // Désactiver tous les boutons
  buttons.forEach(button => button.classList.remove('active'));

  // Masquer toutes les sections
  sections.forEach(section => section.classList.remove('active'));

  // Activer le bouton cliqué
  selectedButton.classList.add('active');

  // Afficher la section associée
  const sectionId = selectedButton.getAttribute('data-section');
  document.getElementById(sectionId).classList.add('active');
}

// Ajout d'un événement "click" sur chaque bouton
buttons.forEach(button => {
  button.addEventListener('click', () => {
    updateActiveSection(button);
  });
});

// Activer par défaut la première section au chargement
updateActiveSection(buttons[0]);
