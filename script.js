(function () {
    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                console.warn(`Elemento não encontrado: ${targetId}`);
            }
        });
    });

    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 200);
            } else {
                // Remove a classe quando sair da tela (opcional, se quiser resetar a animação)
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => observer.observe(section));
    

    sections.forEach(section => {
        observer.observe(section);
    });

    // Carrossel de Serviços
    const carouselInner = document.querySelector('.carousel-inner');
    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');
    const slides = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showSlide(index) {
        if (index >= slides.length) {
            currentIndex = 0; // Volta ao primeiro slide
        } else if (index < 0) {
            currentIndex = slides.length - 1; // Vai para o último slide
        } else {
            currentIndex = index;
        }
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

 

    // Adiciona eventos aos botões de navegação
    if (prevButton && nextButton) {
        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);
    }

    // Inicializa o carrossel
    showSlide(currentIndex);
})();