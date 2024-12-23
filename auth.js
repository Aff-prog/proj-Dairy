// Check authentication state on page load
document.addEventListener('DOMContentLoaded', function() {
    checkAuthState();
});

function checkAuthState() {
    const user = JSON.parse(localStorage.getItem('user'));
    const dashboardLink = document.getElementById('dashboardLink');
    const loginLink = document.getElementById('loginLink');
    const logoutLink = document.getElementById('logoutLink');
    const userName = document.getElementById('userName');

    if (user) {
        // User is logged in
        if (dashboardLink) dashboardLink.style.display = 'block';
        if (loginLink) loginLink.style.display = 'none';
        if (logoutLink) logoutLink.style.display = 'block';
        if (userName) {
            userName.style.display = 'inline';
            userName.textContent = `Welcome, ${user.name}`;
        }
    } else {
        // User is logged out
        if (dashboardLink) dashboardLink.style.display = 'none';
        if (loginLink) loginLink.style.display = 'block';
        if (logoutLink) logoutLink.style.display = 'none';
        if (userName) userName.style.display = 'none';
    }
}

// Handle logout
document.addEventListener('DOMContentLoaded', function() {
    const logoutLink = document.getElementById('logoutLink');
    if (logoutLink) {
        logoutLink.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('user');
            checkAuthState();
            window.location.href = 'index.html';
        });
    }
});

// Handle registration
if (document.getElementById('registerForm')) {
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const user = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
        };
        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = 'index.html';
    });
}

// Handle login
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const user = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
        };
        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = 'index.html';
    });
} 