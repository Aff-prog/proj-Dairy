const products = [
    { id: 1, name: 'Fresh Milk', price: 50, image: 'https://static.vecteezy.com/system/resources/previews/031/697/471/non_2x/glass-pitcher-with-fresh-milk-on-a-wooden-table-ai-generated-free-photo.jpg' },
    // { id: 2, name: 'Cheddar Cheese', price: 120, image: 'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80' },
    { id: 3, name: 'Greek Yogurt', price: 60, image: 'https://images.unsplash.com/photo-1571212515416-fef01fc43637?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80' },
    { id: 4, name: 'Salted Butter', price: 80, image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80' },
    { id: 5, name: 'Cottage Cheese', price: 90, image: 'https://images.unsplash.com/photo-1624806992066-5ffcf7ca186b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80' },
    { id: 6, name: 'Whipped Cream', price: 70, image: 'https://cdn.pixabay.com/photo/2024/03/01/10/52/ai-generated-8606229_640.jpg' },
    { id: 9, name: 'Flavored Milk', price: 55, image: 'https://media.istockphoto.com/id/534831661/photo/strawberry-regular-and-chocolate-milk-in-bottles-isolated.jpg?s=612x612&w=0&k=20&c=satdFw-w_CM-XXN2-FQwf17INx8hMo3HSTqT8l5ZhEI=' },
    { id: 11, name: 'Ghee', price: 150, image: 'https://media.istockphoto.com/id/914640804/photo/ghee-clarified-butter.jpg?s=612x612&w=0&k=20&c=5kClNIiT5LrIUcMiyIlPuEgWKPILXKJmOx34fKwcPps=' },
    { id: 12, name: 'Lassi', price: 40, image: 'https://st3.depositphotos.com/8120940/15354/i/450/depositphotos_153541124-stock-photo-traditional-indian-lassi-curd-with.jpg' },
    { id: 13, name: 'Milk Chocolate', price: 85, image: 'https://media.istockphoto.com/id/623372420/vector/chocolate-and-milk-splash.jpg?s=612x612&w=0&k=20&c=V3GYZlcb-BaFdYP9bnMwe9KghyCjdzTLuXf1JWgRLvU=' },
    { id: 14, name: 'Dark Chocolate', price: 95, image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80' },
    { id: 15, name: 'White Chocolate', price: 90, image: 'https://sugarfreelondoner.com/wp-content/uploads/2020/09/Sugar-Free-White-Chocolate-1200-500x500.jpg' },
    { id: 16, name: 'Vanilla Ice Cream', price: 120, image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=600&auto=format&fit=crop&q=60' },
    { id: 17, name: 'Chocolate Ice Cream', price: 130, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=60' },
    { id: 18, name: 'Strawberry Ice Cream', price: 130, image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&auto=format&fit=crop&q=60' },
    { id: 19, name: 'Butter Scotch Ice Cream', price: 140, image: 'https://images.pexels.com/photos/2846337/pexels-photo-2846337.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 20, name: 'Mango Ice Cream', price: 130, image: 'https://img.onmanorama.com/content/dam/mm/en/food/readers-recipe/images/2020/6/21/mango-ice-cream.jpg' },
    { id: 21, name: 'Kulfi', price: 40, image: 'https://c1.staticflickr.com/8/7746/27322593351_38dbe74a22_o.jpg' },
    { id: 22, name: 'Flavored Yogurt', price: 70, image: 'https://tse3.mm.bing.net/th?id=OIP.bMbVVmqRi34bhSQUpMS1-wHaFJ&pid=Api&P=0&h=180' },
    { id: 24, name: 'Cottage Cheese Spread', price: 110, image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600&auto=format&fit=crop&q=60' },
    { id: 25, name: 'Cheese Slices', price: 130, image: 'https://media.istockphoto.com/photos/the-cheddar-cheese-picture-id685847528?k=6&m=685847528&s=612x612&w=0&h=aYd19-8dYRAtval1sEU9QY50Mt1KX2I1rbG9KvLf2Ok=' },
    { id: 26, name: 'Cookies', price: 80, image: 'https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=600&auto=format&fit=crop&q=60' },
    { id: 27, name: 'Cake', price: 300, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=60' },
    { id: 28, name: 'Cream Cheese', price: 140, image: 'https://rogueproduce.com/wp-content/uploads/2019/08/Plain-Cream-Cheese.jpg' },
    { id: 29, name: 'Whey Protein', price: 200, image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&auto=format&fit=crop&q=60' },
    { id: 30, name: 'Ice Cream Cake', price: 350, image: 'https://www.halfbakedharvest.com/wp-content/uploads/2016/07/Triple-Layer-Chocolate-Fudge-Ice-Cream-Cake-1.jpg' }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add these category mappings after the products array
const productCategories = {
    dairy: [1, 3, 4, 5, 24, 25, 28],
    icecream: [16, 17, 18, 19, 20, 21, 30],
    desserts: [13, 14, 15, 26, 27],
    beverages: [9, 12, 22]
};

function displayTopProducts() {
    const topProductList = document.getElementById('top-product-list');
    if (topProductList) {
        topProductList.innerHTML = '';
        const topProducts = [
            products[0],  // Fresh Milk
            products[15], // Vanilla Ice Cream
            products[16], // Chocolate Ice Cream
            products[17], // Strawberry Ice Cream
            products[20], // Kulfi
            products[29]  // Ice Cream Cake
        ];

        topProducts.forEach(product => {
            const productDiv = createProductElement(product);
            topProductList.appendChild(productDiv);
        });
    }
}

function displayAllProducts(filterCategory = 'all', searchQuery = '') {
    const productList = document.getElementById('product-list');
    if (productList) {
        productList.innerHTML = '';
        
        let filteredProducts = products;
        
        // Apply category filter
        if (filterCategory !== 'all') {
            filteredProducts = products.filter(product => 
                productCategories[filterCategory].includes(product.id)
            );
        }
        
        // Apply search filter
        if (searchQuery) {
            filteredProducts = filteredProducts.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (filteredProducts.length === 0) {
            productList.innerHTML = '<div class="no-results">No products found</div>';
            return;
        }

        filteredProducts.forEach(product => {
            const productDiv = createProductElement(product);
            productList.appendChild(productDiv);
        });
    }
}

function createProductElement(product) {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" onclick="addToCart(${product.id}); event.stopPropagation();">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button class="btn" onclick="addToCart(${product.id}); event.stopPropagation();">Add to Cart</button>
    `;
    productDiv.addEventListener('click', () => toggleProductClick(productDiv));
    return productDiv;
}

function toggleProductClick(productDiv) {
    productDiv.classList.toggle('clicked');
    setTimeout(() => {
        productDiv.classList.remove('clicked');
    }, 300);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
    saveCart();
    showNotification(`${product.name} added to cart!`);

    // Add a visual feedback for the clicked product
    const productElement = document.querySelector(`.product img[alt="${product.name}"]`);
    if (productElement) {
        productElement.classList.add('added-to-cart');
        setTimeout(() => {
            productElement.classList.remove('added-to-cart');
        }, 300);
    }
}

function removeFromCart(index) {
    const item = cart[index];
    if (item.quantity > 1) {
        item.quantity -= 1;
    } else {
        cart.splice(index, 1);
    }
    updateCart();
    saveCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');
    
    if (cartCount) {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }
    
    if (cartItems && cartTotal) {
        cartItems.innerHTML = '';

        let total = 0;

        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <span class="cart-item-name">${item.name}</span>
                    <span class="cart-item-price">₹${item.price} x ${item.quantity}</span>
                </div>
                <div class="cart-item-actions">
                    <button class="btn decrease-btn" onclick="removeFromCart(${index})">-</button>
                    <span class="cart-item-quantity">${item.quantity}</span>
                    <button class="btn increase-btn" onclick="addToCart(${item.id})">+</button>
                </div>
            `;
            cartItems.appendChild(cartItem);
            total += item.price * item.quantity;
        });

        cartTotal.textContent = total;
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    
    // Remove any existing animation classes
    notification.classList.remove('fadeInOut');
    
    // Trigger a reflow to restart the animation
    void notification.offsetWidth;
    
    // Add the animation class
    notification.classList.add('fadeInOut');
    
    // Hide the notification after the animation ends
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// Add this function to your existing script.js file
function handlePaymentMethodChange() {
    const paymentMethod = document.getElementById('payment').value;
    const paymentDetails = document.getElementById('payment-details');
    paymentDetails.innerHTML = '';
    paymentDetails.style.display = 'block';

    switch (paymentMethod) {
        case 'card':
            paymentDetails.innerHTML = `
                <label for="card-number">Card Number:</label>
                <input type="text" id="card-number" required>
                <label for="card-expiry">Expiry Date:</label>
                <input type="text" id="card-expiry" placeholder="MM/YY" required>
                <label for="card-cvv">CVV:</label>
                <input type="text" id="card-cvv" required>
            `;
            break;
        case 'upi':
        case 'paytm':
        case 'gpay':
        case 'phonepe':
        case 'amazonpay':
            paymentDetails.innerHTML = `
                <label for="upi-id">UPI ID / Mobile Number:</label>
                <input type="text" id="upi-id" required>
            `;
            break;
        default:
            paymentDetails.style.display = 'none';
    }
}

function displayOrderSuccess() {
    const orderSuccessSection = document.getElementById('order-success');
    if (orderSuccessSection) {
        const lastOrder = JSON.parse(localStorage.getItem('lastOrder'));
        if (lastOrder) {
            document.getElementById('order-id').textContent = lastOrder.orderId;
            document.getElementById('order-details').innerHTML = `
                <p><strong>Name:</strong> ${lastOrder.name}</p>
                <p><strong>Email:</strong> ${lastOrder.email}</p>
                <p><strong>Phone:</strong> ${lastOrder.phone}</p>
                <p><strong>Address:</strong> ${lastOrder.address}</p>
                <p><strong>Payment Method:</strong> ${lastOrder.payment}</p>
                <h3>Order Summary:</h3>
                <ul>
                    ${lastOrder.items.map(item => `
                        <li>
                            <img src="${item.image}" alt="${item.name}" class="order-item-image">
                            ${item.name} - ₹${item.price} x ${item.quantity}
                        </li>
                    `).join('')}
                </ul>
                <p><strong>Total:</strong> ₹${lastOrder.total}</p>
            `;
        } else {
            orderSuccessSection.innerHTML = '<p>No order details found. Please place an order.</p>';
        }
    }
}

function clearOrderAndGoHome() {
    localStorage.removeItem('lastOrder');
    window.location.href = 'index.html';
}

// Modify the DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    displayTopProducts();
    displayAllProducts();
    updateCart();

    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        const orderSummary = document.getElementById('order-summary');
        if (orderSummary) {
            orderSummary.innerHTML = `
                <h3>Order Summary:</h3>
                <ul>
                    ${cart.map(item => `
                        <li>
                            <img src="${item.image}" alt="${item.name}" class="order-item-image">
                            ${item.name} - ₹${item.price} x ${item.quantity}
                        </li>
                    `).join('')}
                </ul>
                <p><strong>Total:</strong> ₹${cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}</p>
            `;
        }

        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const street = document.getElementById('street').value;
            const city = document.getElementById('city').value;
            const state = document.getElementById('state').value;
            const pincode = document.getElementById('pincode').value;
            const payment = document.getElementById('payment').value;

            const address = `${street}, ${city}, ${state} - ${pincode}`;

            const orderId = Math.random().toString(36).substr(2, 9).toUpperCase();

            // Store order details in localStorage
            const orderDetails = {
                orderId: orderId,
                name: name,
                email: email,
                phone: phone,
                address: address,
                payment: payment,
                items: cart,
                total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
            };
            localStorage.setItem('lastOrder', JSON.stringify(orderDetails));

            // Clear the cart
            cart = [];
            updateCart();
            saveCart();

            // Redirect to order success page
            window.location.href = 'order-success.html';
        });
    }

    // Handle order success page
    if (document.body.contains(document.getElementById('order-success'))) {
        displayOrderSuccess();
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const message = document.getElementById('contact-message').value;

            // Here you would typically send this data to a server
            // For now, we'll just show a notification
            showNotification(`Thank you, ${name}! Your message has been sent.`);

            // Clear the form
            contactForm.reset();
        });
    }

    const paymentSelect = document.getElementById('payment');
    if (paymentSelect) {
        paymentSelect.addEventListener('change', handlePaymentMethodChange);
    }
});

// Close modals when clicking outside
window.onclick = (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
};

// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('#main-nav') && !event.target.closest('#menu-toggle')) {
            mainNav.classList.remove('active');
        }
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('#main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
            }
        });
    });
});

// Remove the category-related styles
const existingStyle = document.querySelector('style');
if (existingStyle) {
    existingStyle.remove();
}

// Add event listeners for search and filter
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');
    let currentCategory = 'all';

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            displayAllProducts(currentCategory, e.target.value);
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update current category and display
            currentCategory = button.dataset.category;
            displayAllProducts(currentCategory, searchInput.value);
        });
    });

    // Initial display
    displayAllProducts();
});

// Add this CSS for no results message
const style = document.createElement('style');
style.textContent = `
    .no-results {
        text-align: center;
        padding: 2rem;
        color: var(--text-color);
        font-size: 1.2rem;
        grid-column: 1 / -1;
    }
`;
document.head.appendChild(style);

