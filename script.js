// Fonction pour activer/désactiver le menu hamburger sur les petits écrans
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector("#menu-toggle"); // Le bouton hamburger
    const navbar = document.querySelector(".navbar ul"); // Liste des éléments du menu

    // Ajout d'un événement pour basculer le menu
    menuToggle.addEventListener("click", function() {
        navbar.classList.toggle("active"); // Ajouter ou retirer la classe 'active' pour afficher/cacher le menu
    });

    // Optionnel : fermer le menu lorsque l'un des liens est cliqué
    const menuLinks = document.querySelectorAll(".navbar ul li a");
    menuLinks.forEach(link => {
        link.addEventListener("click", function() {
            navbar.classList.remove("active"); // Fermer le menu après un clic sur un lien
        });
    });
});

document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const details = button.parentElement.nextElementSibling;
        // Toggle l'affichage des détails sans changer le texte du bouton
        if (details.style.display === "none" || details.style.display === "") {
            details.style.display = "block";
        } else {
            details.style.display = "none";
        }
    });
});

const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar ul');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

