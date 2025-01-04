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
        })