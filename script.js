// Menu Mobile
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Carrossel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    const offset = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
    
    // Atualizar classe active
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

// Auto-play carrossel
setInterval(() => {
    moveSlide(1);
}, 5000);

// Toggle Lista de Convocados
function toggleSquad(id) {
    const list = document.getElementById(id);
    list.classList.toggle('hidden');
    
    // Mudar texto do botão
    const btn = list.previousElementSibling;
    if (list.classList.contains('hidden')) {
        btn.textContent = 'Ver Lista Completa';
    } else {
        btn.textContent = 'Ocultar Lista';
    }
}



// Smooth Scroll para links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Fechar menu mobile se estiver aberto
        navLinks.classList.remove('active');

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
