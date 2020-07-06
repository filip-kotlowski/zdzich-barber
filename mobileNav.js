const sectionAbout = document.querySelector('#about-us');
const iconAbout = document.querySelector('#about-icon');
const sectionPrice = document.querySelector('#price-list');
const iconPrice = document.querySelector('#price-icon');
const sectionContact = document.querySelector('#contact');
const iconContact = document.querySelector('#contact-icon');
const screen = window.innerHeight - window.innerHeight / 5;
function mobileNavbar() {
    if (screen > sectionAbout.getBoundingClientRect().top && screen < sectionAbout.getBoundingClientRect().bottom) {
        iconAbout.style.color = '#bc3908';
    } else {
        iconAbout.style.color = 'white';
    }
    if (screen > sectionPrice.getBoundingClientRect().top && screen < sectionPrice.getBoundingClientRect().bottom) {
        iconPrice.style.color = '#bc3908';
    } else {
        iconPrice.style.color = 'white';
    }
    if (screen > sectionContact.getBoundingClientRect().top && screen < sectionContact.getBoundingClientRect().bottom) {
        iconContact.style.color = '#bc3908';
    } else {
        iconContact.style.color = 'white';
    }

}
setInterval(mobileNavbar, 100)