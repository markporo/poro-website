
var toggle = document.getElementById("toggle");

// Change hamburger to X When Clicked
function changeToX(x) {
    x.classList.toggle("change");
}


const toggleMenu = function toggleMenu() {
toggle.checked = false;
}

// assigns tourlink and musiclink so menu will close if these are chosen by user 
var tourLink = document.getElementById("tourLink");
var musicLink = document.getElementById("musicLink");


tourLink.addEventListener("click", function () {
    toggleMenu();
    // changeHamToX(this);
});

musicLink.addEventListener("click", function () {
    toggleMenu();
});


// hopefully changes x back to Icon when tourlink and musiclink are clicked. 
function changeHamToX() {
    document.getElementById("hamburger").classList.toggle("change", false);
}


// Slider

function moveSliderPrevious() {
    var slider = document.getElementsByClassName("img-container");

            slider.style.left = "100%";
    
}

function linkAndMoveToPhoto() {
    var slider = document.getElementsByClassName("img-container");
    var link = document.getElementsByClassName("slidePhoto");
    link.setAttribute("href", "#slider-img-2")
    slider.style.left = "-100%";
}

// #slider-img-12:target ~ .img-container {
//     left: -200%;
// }

// aTag.setAttribute('href',"http://www.google.com");
// aTag.innerHTML = "aaa";
// document.body.appendChild(aTag);







$(document).ready(function () {
    $('.hamburgerSVG').click(function () {
        $(this).toggleClass('open');
    });
});



