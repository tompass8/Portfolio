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
const maxProbability = 0.40;  

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