document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".reveal");
    setTimeout(() => {
        reveals.forEach(reveal => {
            reveal.classList.add("active"); // C'est cette ligne qui rend le texte visible !
        });
    }, 1500);
});


// --- EFFET GLITCH CYBERPUNK RÉACTIF À LA SOURIS ---

const logo = document.getElementById("glitch-logo");
const originalText = "StormTrAaper";
const glitchChars = "無明暗幻電網神龍13370X$€@#%&*+<>".split("");

// Gestion de "l'excitation" du glitch
let glitchProbability = 0.02; 
const baseProbability = 0.02;
const maxProbability = 0.10;  

window.addEventListener("mousemove", () => {
    glitchProbability = maxProbability;
});

// La boucle d'animation tourne très vite (toutes les 50 millisecondes)
setInterval(() => {
    let newText = "";
    
    // On boucle sur chaque lettre
    for (let i = 0; i < originalText.length; i++) {

        if (Math.random() < glitchProbability) {
            const randomChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
            newText += randomChar;
        } else {
            newText += originalText[i];
        }
    }
    
    logo.innerText = newText;
    
    if (glitchProbability > baseProbability) {
        glitchProbability -= 0.07; 
    }
}, 70);
document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const galleryTitle = document.querySelector('.gallery-title');
    const wrapper = document.querySelector('.gallery-scroll-wrapper');

    window.addEventListener('scroll', () => {
        const rect = wrapper.getBoundingClientRect();
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            // Progression du scroll (0 à 1)
            const scrollPercent = Math.min(1, Math.max(0, -rect.top / (wrapper.offsetHeight - window.innerHeight)));
            
            // Animation des Tableaux
            galleryItems.forEach(item => {
                const speedY = parseFloat(item.getAttribute('data-speed-y')) || 0;
                const speedScale = parseFloat(item.getAttribute('data-speed-scale')) || 0;
                
                const moveY = scrollPercent * speedY;
                const scale = 1 + (scrollPercent * speedScale);
                
                item.style.transform = `translateY(${moveY}px) scale(${scale})`;
            });

            // Animation du Titre (Mouvement vers le centre)
            if (galleryTitle) {
                const speedX = parseFloat(galleryTitle.getAttribute('data-speed-x'));
                const speedY = parseFloat(galleryTitle.getAttribute('data-speed-y'));
                const speedScale = parseFloat(galleryTitle.getAttribute('data-speed-scale'));

                const moveX = scrollPercent * speedX; // Déplacement vers la droite
                const moveY = scrollPercent * speedY; // Déplacement vers le bas
                const scale = 1 + (scrollPercent * (speedScale - 1));

                galleryTitle.style.transform = `translate(${moveX}vw, ${moveY}vh) scale(${scale})`;
                galleryTitle.style.opacity = 0.15 + (scrollPercent * 0.35); // Il devient un peu plus visible
            }
        }
    });
}); 