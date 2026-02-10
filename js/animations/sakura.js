window.initSakura = function () {
    const petalCount = 25;

    for (let i = 0; i < petalCount; i++) {
        createPetal();
    }
}

window.createPetal = function () {
    const container = document.body;
    const petal = document.createElement('div');
    petal.className = 'sakura-petal';

    // Random properties
    const size = Math.random() * 10 + 10; // 10px - 20px
    const left = Math.random() * 100;
    const duration = Math.random() * 10 + 8; // 8s - 18s
    const delay = Math.random() * 10;
    const opacity = 1.0;

    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    petal.style.left = `${left}%`;
    petal.style.animationDuration = `${duration}s`;
    petal.style.animationDelay = `-${delay}s`;
    petal.style.opacity = opacity;

    container.appendChild(petal);

    // Reset petal after animation
    petal.addEventListener('animationiteration', () => {
        petal.style.left = `${Math.random() * 100}%`;
    });
}

