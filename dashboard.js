// Populate user information
function populateUserInfo() {
    const userName = localStorage.getItem('userName');
    document.getElementById('userName').textContent = userName || 'User';

    // Populate profile information
    const profileInfo = document.getElementById('profileInfo');
    profileInfo.innerHTML = `
        <p><strong>Name:</strong> ${userName}</p>
        <p><strong>Email:</strong> demo@example.com</p>
        <p><strong>Member Since:</strong> ${new Date().toLocaleDateString()}</p>
    `;

    // Populate recent orders (demo data)
    const recentOrders = document.getElementById('recentOrders');
    recentOrders.innerHTML = `
        <div class="order">
            <p><strong>Order #1234</strong></p>
            <p>Date: ${new Date().toLocaleDateString()}</p>
            <p>Status: Delivered</p>
        </div>
        <div class="order">
            <p><strong>Order #1235</strong></p>
            <p>Date: ${new Date().toLocaleDateString()}</p>
            <p>Status: Processing</p>
        </div>
    `;
}

// Run when page loads
document.addEventListener('DOMContentLoaded', () => {
    populateUserInfo();
}); 