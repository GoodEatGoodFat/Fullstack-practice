

// trigger this function every time the user scrolls
window.onscroll = function (event) {
    var scroll = window.scrollY;
    if (scroll < 300) {
      document.querySelector(".main-body__static-bkg1").style.opacity  = '0.75';
      document.querySelector(".main-body__static-bkg2").style.opacity  = '0';
      document.querySelector(".main-body__static-bkg3").style.opacity  = '0';
    } else if (scroll >= 300 && scroll < 600) {
      document.querySelector(".main-body__static-bkg1").style.opacity  = '0';
      document.querySelector(".main-body__static-bkg2").style.opacity  = '0';
      document.querySelector(".main-body__static-bkg3").style.opacity  = '0';
        // yellow
        // body.style.backgroundColor = 'yellow';
    } else if (scroll >= 600 && scroll < 1200) {
      document.querySelector(".main-body__static-bkg1").style.opacity = '0';
      document.querySelector(".main-body__static-bkg2").style.opacity = '0.75';
      document.querySelector(".main-body__static-bkg3").style.opacity = '0';
        // blue
        // body.style.backgroundColor = 'blue';
    } else if (scroll >= 1200 && scroll < 1800) {
      document.querySelector(".main-body__static-bkg1").style.opacity = '0';
      document.querySelector(".main-body__static-bkg2").style.opacity = '0';
      document.querySelector(".main-body__static-bkg3").style.opacity = '0';
        // orange
        // body.style.backgroundColor = 'orange';
    } else if (scroll >= 1800 && scroll < 3000) {
      document.querySelector(".main-body__static-bkg1").style.opacity = '0';
      document.querySelector(".main-body__static-bkg2").style.opacity = '0';
      document.querySelector(".main-body__static-bkg3").style.opacity = '0.75';
        // red
        // body.style.backgroundColor = 'red';
    } else {
      document.querySelector(".main-body__static-bkg1").style.opacity = '0';
      document.querySelector(".main-body__static-bkg2").style.opacity = '0';
      document.querySelector(".main-body__static-bkg3").style.opacity = '0';
        // purple
        // body.style.backgroundColor = 'purple';
    }
}