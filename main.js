document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopButton = document.getElementById("scrollToTopBtn");

    // Scroll to top when the button is clicked
    scrollToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

$(document).ready(function () {
    // Initialize the sidenav
    $('.sidenav').sidenav();
    
    // Initialize dropdown
    $(".dropdown-trigger").dropdown();

    // Initialize materialbox
    $('.materialboxed').materialbox({
        inDuration: 1000,
        outDuration: 1000
    });

    // Initialize slider
    $('.slider').slider({
        height: 400,
        duration: 700
    });

    // Sticky navbar functionality
    const navbar = document.querySelector('.nav-wrapper');
    const stickyOffset = navbar.offsetTop;

    window.onscroll = function () {
        if (window.pageYOffset >= stickyOffset) {
            navbar.classList.add('sticky-nav');
        } else {
            navbar.classList.remove('sticky-nav');
        }
    };
});

