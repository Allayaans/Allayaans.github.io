const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');


// Display Mobile Menu 
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);



// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutmeMenu = document.querySelector('#about me-page');
    const servicesMenu = document.querySelector('#services-page');
    const portfolioMenu = document.querySelector('#portfolio-page');
    let scrollpos = window.scrollY;
    console.log(scrollpos);

    //ads 'highlight' class to my menu items
    if(window.innerWidth > 960 && scrollpos < 600){
        homeMenu.classList.add('highlight');
        aboutmeMenu.classList.remove('highlight');
        return
    }else if (window.innerWidth > 960 && scrollpos < 1400) {
        aboutmeMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return
    }else if (window.innerWidth > 960 && scrollpos < 2345){
        servicesMenu.classList.add('highlight');
        aboutmeMenu.classList.remove('highlight');
        return
    }

    if((elem && window.innerWidth < 960 && scrollpos < 600) || elem) {
        elem.classList.remove('highlight');
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Close mobile Menu when Clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('is.active');
    if(window.innerWidth <= 768 && menuBars);{
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('scroll', hideMobileMenu);
menuLinks.addEventListener('click', hideMobileMenu);