// Function to handle theme preferences
function handleThemePreference() {
    const themeSelect = document.getElementById('themeSelect');
    
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    themeSelect.value = savedTheme;

    // Event listener for theme changes
    themeSelect.addEventListener('change', (e) => {
        const selectedTheme = e.target.value;
        document.body.setAttribute('data-theme', selectedTheme);
        localStorage.setItem('theme', selectedTheme);
    });
}

// Function to handle animation
function handleAnimation() {
    const element = document.querySelector('.animated-element');
    
    element.addEventListener('click', () => {
        element.classList.add('active');
        
        // Remove the class after animation completes
        setTimeout(() => {
            element.classList.remove('active');
        }, 500);
    });
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
    handleThemePreference();
    handleAnimation();
});