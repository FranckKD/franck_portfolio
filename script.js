const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  if (link.href.includes(activePage)) {
    link.classList.add('active');
    console.log(link);
  }
});

const menuHamburger = document.querySelector(".menu-hamburger")
const menuLinks = document.querySelector(".nav-links")
menuHamburger.addEventListener('click',()=>{
    menuLinks.classList.toggle('mobile-menu')
        });

document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function () {
        // Ajouter ou retirer la classe active pour changer le style du bouton
        this.classList.toggle('active');

        // Ajouter ou retirer la classe active sur service-name
        const serviceName = this.closest('.service').querySelector('.service-name');
        serviceName.classList.toggle('active');  // Appliquer la classe 'active' à service-name

        const details = this.closest('.service').querySelector('.service-details');

        // Vérification de la visibilité des détails
        const isVisible = details.style.maxHeight && details.style.maxHeight !== "0px";

        if (isVisible) {
            details.style.maxHeight = "0px"; // Masquer les détails avec une transition
        } else {
            details.style.maxHeight = details.scrollHeight + "px"; // Afficher les détails avec une transition
        }
    });
});

document.getElementById('service-select').addEventListener('change', function() {
    const select = this;
    if (select.value !== "") {
        // Si une option est sélectionnée, on applique le texte blanc
        select.style.color = 'white';
    } else {
        // Si l'utilisateur choisit "Select a service", on remet les couleurs par défaut
        select.style.color = '#6c6c6c';
        select.style.backgroundColor = 'black';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    emailjs.init("0UHeMHIbxWrHWsMmw"); // Remplacez par votre user_id

    $(document).ready(function () {
        // Lorsque le formulaire est soumis
        $('#contact-form').on('submit', function (event) {
            event.preventDefault(); // Empêcher le comportement de soumission par défaut du formulaire

            // Valider le formulaire avec Parsley.js
            if ($(this).parsley().isValid()) {
                // Collecter les données du formulaire
                const formData = new FormData(this);

                // Créer un objet templateParams avec les données récupérées
                const templateParams = {
                    firstname: formData.get('firstname'),
                    lastname: formData.get('lastname'),
                    email: formData.get('email'),
                    message: formData.get('message'),
                    service: formData.get('service')
                };

                // Vérifier les données collectées
                console.log("Template Params: ", templateParams);

                // Envoyer le message via EmailJS
                emailjs.send('service_hssqegk', 'template_dfa357n', templateParams)
                    .then(function(response) {
                        alert('Votre message a été envoyé avec succès!');
                        document.getElementById('contact-form').reset(); // Réinitialiser le formulaire
                    }, function(error) {
                        alert('Une erreur est survenue : ' + error.text);
                    });
            }
        });
    });
});