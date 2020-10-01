'use strict';
// IIFF --Immediately Invoked Function Expression

(function(){

    function Start() {
        console.log("App Started...");

    // Make navbar transparent when it is on the top
    const navbar = document.querySelector('#navbar');
    const navbarHeight = navbar.getBoundingClientRect().height;
    document.addEventListener('scroll', () => {
        if (window.scrollY > navbarHeight) {
            navbar.classList.add('navbar--dark');
        }else{
            navbar.classList.remove('navbar--dark');
        }
    });

     //Navbar toggle button for small screen
     const navbarToggle = document.querySelector('.navbar__toggle-btn');
     const navbarMenu = document.querySelector('.navbar__menu');
     navbarToggle.addEventListener('click', () =>{
     navbarMenu.classList.toggle('open');
    });

    }
    window.addEventListener("load", Start);
})();