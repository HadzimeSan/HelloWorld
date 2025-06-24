document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling functionality for hero button
    const scrollButton = document.querySelector('.hero-btn');
    const gamesSection = document.querySelector('.games');
    const miniGamesSection = document.querySelector('.mini-games');

    scrollButton.addEventListener('click', function(e) {
        e.preventDefault();
        if (window.innerWidth <= 768) {
            miniGamesSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            gamesSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Game cards click functionality
    const gameCards = document.querySelectorAll('.game-card');
    
    gameCards.forEach(card => {
        card.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const headerMenu = document.querySelector('.header-menu');
    const spans = Array.from(headerMenu.querySelectorAll('span'));
    let position = 0;
    const speed = 1;
    let lastTime = 0;
    const delay = 16;

    // Создаем контейнер для анимации
    const container = document.createElement('div');
    container.style.display = 'inline-block';
    container.style.whiteSpace = 'nowrap';
    
    // Очищаем header-menu и добавляем контейнер
    headerMenu.innerHTML = '';
    headerMenu.appendChild(container);

    // Добавляем все элементы в контейнер
    spans.forEach(span => {
        container.appendChild(span);
    });

    // Клонируем все элементы для бесконечной прокрутки
    spans.forEach(span => {
        const clone = span.cloneNode(true);
        container.appendChild(clone);
    });

    function animate(currentTime) {
        if (!lastTime) lastTime = currentTime;
        const elapsed = currentTime - lastTime;

        if (elapsed > delay) {
            position -= speed;
            
            // Если контейнер полностью вышел за пределы видимой области
            if (position <= -container.offsetWidth / 2) {
                position = 0;
            }

            container.style.transform = `translateX(${position}px)`;
            lastTime = currentTime;
        }

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}); 