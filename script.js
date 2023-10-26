

let menuIcon= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menuIcon.onclick =() =>{
     menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};

// menuIcon.classList.remove('fa-regular fa-x');
// navbar.classList.remove('active');