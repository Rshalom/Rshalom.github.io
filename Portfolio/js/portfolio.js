// Open and close contact form 
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// Displays first image in slideshow when page loads
var slideIndex = 1;
showSlides(slideIndex);

//Changes the slide when the left of right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Changes the slide when the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); //Stores all elements with the class name "mySlides" in the variable array "slides"
    var dots = document.getElementsByClassName("dot"); //Takes all elements with class name "dot" and stores them in the variable array "dots"
    if (n > slides.length) {slideIndex = 1}; //If number passed into function is greater than length of array, slideIndex is set to 1
    if (n < 1) {slideIndex = slides.length}; //If number passed into function is less than 1, the slideIndex is set to the length of the "slides" array
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); //Takes each item in "dots" array and removes "active" which removes the active styling
    }
    slides[slideIndex - 1].style.display = "block"; // Displays image in slideshow
    dots[slideIndex - 1].className += " active"; // Adds active styling to the dot associated with image
}

//Create close contact form when user clicks off of it
//First add an event listener for any clicks on the website
document.addEventListener("click", function(event) {
    //If click happens on cancel button OR anywhere else not ont the contact form AND the click does not happen on any element with the contact class, then call the closeForm() function
    if (event.target.matches(".cancel") || 
    !event.target.closest(".form-popup") &&
    !event.target.closest(".Pop_Up_Button") && 
    !event.target.closest(".contact")) {
        closeForm()
    }
}, false)