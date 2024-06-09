document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.navbar-toggle');
    const navbar = document.querySelector('.navbar');

    toggleButton.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});



document.addEventListener('DOMContentLoaded', function() {
    function setupQuantityControls(cardId) {
        const decreaseBtn = document.getElementById(`decrease-btn-${cardId}`);
        const increaseBtn = document.getElementById(`increase-btn-${cardId}`);
        const quantityDisplay = document.getElementById(`quantity-${cardId}`);
        let quantity = 1;

        decreaseBtn.addEventListener('click', function() {
            if (quantity > 1) {
                quantity--;
                quantityDisplay.textContent = quantity;
            }
        });

        increaseBtn.addEventListener('click', function() {
            quantity++;
            quantityDisplay.textContent = quantity;
        });
    }

    // Setup quantity controls for each card
    for (let i = 1; i <= 10; i++) {
        setupQuantityControls(i);
    }

    // Function to handle wishlist toggle
    function setupWishlistToggle(cardId) {
        const wishlistIcon = document.getElementById(`wishlist-${cardId}`);

        wishlistIcon.addEventListener('click', function() {
            wishlistIcon.classList.toggle('filled');
        });
    }

    // Setup wishlist toggle for each card
    for (let i = 1; i <= 10; i++) {
        setupWishlistToggle(i);
    }
});
