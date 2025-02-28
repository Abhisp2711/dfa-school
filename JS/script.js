const menu = document.getElementById('menu');
const navMenu = document.querySelector('.nav-menu');
const clickSound = document.getElementById('clickSound');



menu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // toggle between bars icon and 'X' icon
    if (navMenu.classList.contains('active')) {
        menu.classList.remove('fa-bars');
        menu.classList.add('fa-times');//
    }
    else {
        menu.classList.remove('fa-times');
        menu.classList.add('fa-bars');
    }

    clickSound.play();
});


// scroll
const scrollDiv = document.getElementById("scroll");
const images = scrollDiv.querySelectorAll("img");
const contactSection = document.getElementById("contact"); // Contact section

let index = 0;
let scrollInterval;

// Function to change images
function slideImages() {
    index++;
    if (index >= images.length) index = 0;
    scrollDiv.style.transform = `translateX(${-index * 400}px)`;
}

// Function to start scrolling
function startScrolling() {
    scrollInterval = setInterval(slideImages, 3000);
}

// Function to stop scrolling
function stopScrolling() {
    clearInterval(scrollInterval);
}

// Function to check if user is on Contact section
function checkContactSection() {
    if (window.location.hash === "#contact") {
        stopScrolling(); // Stop scrolling when on the Contact page
    } else {
        startScrolling(); // Resume scrolling on other pages
    }
}

// Detect page load and hash change
window.addEventListener("load", checkContactSection);
window.addEventListener("hashchange", checkContactSection);

// Start scrolling initially
startScrolling();

