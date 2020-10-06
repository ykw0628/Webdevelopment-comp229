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

    //contact button
    if(document.title == "Contact"){
        
        let sendBtn = document.querySelector('.contact__send');
        let cancelBtn = document.querySelector('.reset__btn');
        let form = document.forms[0];

        sendBtn.addEventListener("click", (event) =>{
            event.preventDefault();

            let firstName = document.getElementById("fname").value;
            let lasttName = document.getElementById("lname").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("subject").value;

            console.info(`Last Name: ${lasttName}
            First name: ${firstName}
            Email: ${email}
            Message: ${message}
            `);
            form.reset();
        });

        cancelBtn.addEventListener("click", (event) =>{
            event.preventDefault();
            if(confirm("Are you sure?")){
                location = "/home";
            }
        });

    }



//Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e)=>{
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    }
    
 //remove selection from the previous item and select new one
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = e.target.nodeName ==='BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected');

    projectContainer.classList.add('anim-out');
    setTimeout(() => {
        projects.forEach((project) =>{
            console.log(project.dataset.type);
            if (filter === '*' || filter === project.dataset.type) {
                project.classList.remove('invisible');
            }else{
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    }, 300);
});


    }
    window.addEventListener("load", Start);
})();


