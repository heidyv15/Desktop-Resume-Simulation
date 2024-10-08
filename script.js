// Password unlock functionality
document.getElementById('password-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const password = document.getElementById('password-input').value;
        if (password === '12345') { // Replace 'yourpassword' with the actual password
            document.getElementById('lock-screen').style.display = 'none'; // Hide lock screen
        } else {
            alert('Incorrect password. Try again.');
        }
    }
});



// Function to open a window
function openWindow(windowId) {
    document.getElementById(windowId).style.display = 'block';
}

// Function to close a window
function closeWindow(windowId) {
    document.getElementById(windowId).style.display = 'none';
}

// Add event listeners for desktop icons
document.getElementById('about-me').addEventListener('click', function() {
    openWindow('about-window');
});

document.getElementById('skills').addEventListener('click', function() {
    openWindow('skills-window');
});

document.getElementById('projects').addEventListener('click', function() {
    openWindow('projects-window');
});

document.getElementById('work-experience').addEventListener('click', function() {
    openWindow('work-experience-window');
});

// Add event listener for taskbar buttons
document.getElementById('contact-btn').addEventListener('click', function() {
    openWindow('contact-window');
});
