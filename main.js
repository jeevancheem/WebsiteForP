// Add a smooth scroll effect for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function openNav() {
    document.getElementById("myNav").style.width = "100%";

}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

window.addEventListener('scroll', function() {
    var element = this.document.getElementById('hero-content');
    var backingOverlay = this.document.querySelector('.backing')
    var position = element.getBoundingClientRect().top;
    var windowHeight = this.window.innerHeight;

    if (position < windowHeight && position > -windowHeight*0.175) {
        element.classList.add('show');
        backingOverlay.classList.add('show')
    } else {
        element.classList.remove('show');
        backingOverlay.classList.remove('show')
    }
});

