// Add a smooth scroll effect for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

    // This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll 
// animations with the navbar

document.addEventListener('scroll', (e) => { 
    const scroll = document.documentElement.scrollTop;
    if(scroll >= 100){
document.querySelector('body').classList.add('scroll')
    } else {
    document.querySelector('body').classList.remove('scroll')
    }
});


// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
    for (const item of dropDowns) {
        const onClick = () => {
        item.classList.toggle('cs-active')
    }
    item.addEventListener('click', onClick)
    }
                            

// const toggle = document.getElementById('toggle');
// const lines = document.querySelectorAll('.cs-line'); // Select all elements with the class 'cs-line'
    
// toggle.addEventListener('mouseover', () => {
//     toggle.style.backgroundColor = '#FFFFFF'; // Change background color of the button
    
//     // Change the background color of each line
//     lines.forEach(line => {
//         line.style.backgroundColor = '#000000'; // Change color of each line
//     });
// });
    
// toggle.addEventListener('mouseout', () => {
//     toggle.style.backgroundColor = ''; // Revert to original button color
    
//     // Revert the background color of each line
//     lines.forEach(line => {
//         line.style.backgroundColor = ''; // Revert to original line color
//     });
// });
    
const toggle = document.getElementById('toggle');
const lines = document.querySelectorAll('.cs-line'); // Select all elements with the class 'cs-line'

// Function to change colors
const changeColors = () => {
    toggle.style.backgroundColor = '#FFFFFF'; // Change button background color
    lines.forEach(line => {
        line.style.backgroundColor = '#000000'; // Change line colors
    });
};

// Function to revert colors
const revertColors = () => {
    toggle.style.backgroundColor = ''; // Revert button background color
    lines.forEach(line => {
        line.style.backgroundColor = ''; // Revert line colors
    });
};

// Add mouse events for desktop
toggle.addEventListener('mouseover', changeColors);
toggle.addEventListener('mouseout', revertColors);

const revertTimeout = 100; // 100 milliseconds

toggle.addEventListener('touchstart', changeColors);
toggle.addEventListener('touchend', () => {
    setTimeout(revertColors, revertTimeout); // Delay reverting colors
});

document.addEventListener("DOMContentLoaded", function () {
    // Define the screen size limit for when the scroll effect should apply
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches; // Adjust 768px as needed

    if (isSmallScreen) {
        // Select all the boxes (cs-items)
        const boxes = document.querySelectorAll("#why-choose-289 .cs-item");

        // Create an Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            // Remove 'in-view' class from all boxes first
            boxes.forEach(box => box.classList.remove("in-view"));

            entries.forEach(entry => {
                // Get the center coordinates of the screen
                const centerX = window.innerWidth / 2;
                const centerY = window.innerHeight / 2;

                // Get the position and dimensions of the intersecting box
                const rect = entry.boundingClientRect;

                // Check if the center of the screen is within the box
                const isCenterWithinBox = (
                    centerX >= rect.left &&
                    centerX <= rect.right &&
                    centerY >= rect.top &&
                    centerY <= rect.bottom
                );

                // If the center is within the box, add the 'in-view' class
                if (entry.isIntersecting && isCenterWithinBox) {
                    entry.target.classList.add("in-view");
                }
            });
        }, {
            root: null, // Use the viewport as the root
            rootMargin: '0px', // No additional margins
            threshold: 0 // Trigger on any intersection
        });

        // Observe each box for intersection
        boxes.forEach(box => observer.observe(box));
    }
});
