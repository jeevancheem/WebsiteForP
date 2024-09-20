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