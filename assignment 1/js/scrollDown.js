//dynamicly obtain the position of a container

if(id1){ const id1 = document.getElementById(id1)}





window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    // Define the scroll positions where you want to change the background image
    var position1 = 500; // Change this to your desired position
    var position2 = 1000; // Change this to your desired position

    if (scrollPosition < position1) {
        // Change background image to the first image
        document.querySelector('.container').style.backgroundImage = "url('image1.jpg')";
    } else if (scrollPosition < position2) {
        // Change background image to the second image
        document.querySelector('.container').style.backgroundImage = "url('image2.jpg')";
    } else {
        // Change background image to the third image or any other as needed
        document.querySelector('.container').style.backgroundImage = "url('image3.jpg')";
    }
});