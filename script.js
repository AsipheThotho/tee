// Create floating decorations
function createDecorations() {
    const container = document.getElementById('decorations');
    const decorations = 30;
    const symbols = ['❤️', '⭐', '✨', '🎈'];
    
    for (let i = 0; i < decorations; i++) {
        const decoration = document.createElement('div');
        decoration.className = 'decoration';
        decoration.textContent = symbols[i % symbols.length];
        decoration.style.left = `${Math.random() * 100}%`;
        decoration.style.top = `${Math.random() * 100}%`;
        decoration.style.fontSize = `${Math.random() * 20 + 20}px`;
        decoration.style.animationDelay = `${Math.random() * 3}s`;
        decoration.style.opacity = '0.8';
        container.appendChild(decoration);
    }
}

// Initialize when page loads
window.addEventListener('DOMContentLoaded', createDecorations);