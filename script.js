// Script_Law.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('dark-mode-toggle');
    
    // Check if dark mode preference is stored in local storage
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        toggleSwitch.checked = true;
    }

    toggleSwitch.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
        
        // Save the user's preference in local storage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});
