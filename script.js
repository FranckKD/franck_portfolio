// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

// Toggle the display of the menu when the hamburger is clicked
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Form validation and submission
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Capture form data
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Simple form validation
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Log the form data (could be replaced with a form submission to a server)
    console.log('Form submitted with the following data:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Simulate form submission success
    alert('Message sent successfully!');

    // Reset the form after submission
    form.reset();
});

// Smooth scrolling for internal links
const links = document.querySelectorAll('nav .menu a');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset to account for fixed navigation
            behavior: 'smooth'
        });
    });
});
