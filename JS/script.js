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
let index = 0;

function slideImages() {
  index++;
  if (index > 2) index = 0; // Reset after last image
  scrollDiv.style.transform = `translateX(${-index * 400}px)`;
}

setInterval(slideImages, 3000); // Change image every 3 seconds
