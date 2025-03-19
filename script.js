const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function moveSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

setInterval(() => moveSlide(1), 5000);

showSlide(currentSlide);


document.querySelector('.quote-btn').addEventListener('click', () => {
    alert('Redirecting to the quote page!');
});

document.querySelectorAll('.socials a').forEach(icon => {
    icon.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
