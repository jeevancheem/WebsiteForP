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

