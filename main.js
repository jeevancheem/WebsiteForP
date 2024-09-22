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
    var position = element.getBoundingClientRect().top;
    var windowHeight = this.window.innerHeight;

    if (position < windowHeight - 200 && position > 0) {
        element.classList.add('show');
    } else {
        element.classList.remove('show');
    }
});