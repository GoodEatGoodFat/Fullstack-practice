//dynamicly obtain the position of a container

// if(id1){ const id1 = document.getElementById(id1)}

const opacity_off = 0;
const opacity_on = 100;

const COLOR1 = "#FFEEC3";
const COLOR2 = "#7A89AA";
const COLOR3 = "#FFEEC3";

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;

  // Define the scroll positions where you want to change the background image
  let position1 = 1000; // Change this to your desired position
  let position2 = 1700; // Change this to your desired position
  let position3 = 3000;

  if (scrollPosition < position1) {
    //show bkg1
    document.querySelector(".individual__bkg1").style.backgroundColor = COLOR1;
    //show svg1
    document.querySelector(".svg1").style.opacity = opacity_on;
  } else if (scrollPosition < position2) {
    //hide svg1
    document.querySelector(".svg1").style.opacity = opacity_off;
    //hide bkg1
    document.querySelector(".individual__bkg1").style.backgroundColor = 'white';
    //show bkg2
    document.querySelector(".individual__bkg2").style.backgroundColor = COLOR2;
    //show svg2
    document.querySelector(".svg2").style.opacity = opacity_on;
  } else if (scrollPosition < position3) {
    document.querySelector(".svg2").style.opacity = opacity_off;
    //hide bkg2
    document.querySelector(".individual__bkg2").style.backgroundColor = 'white';
    document.querySelector(".individual__bkg3").style.backgroundColor = COLOR3;
    document.querySelector(".svg3").style.opacity = opacity_on;
  } else {
    document.querySelector(".svg3").style.opacity = opacity_off;
  }
});
