document.addEventListener('DOMContentLoaded', () => {
    const quantityInput = document.getElementById('quantity');
    const decreaseBtn = document.getElementById('quantity-decrease');
    const increaseBtn = document.getElementById('quantity-increase');
    
    if (!quantityInput || !decreaseBtn || !increaseBtn) return;

    const updateAddToCartButton = () => {
        const quantity = parseInt(quantityInput.value);
        const price = 3499;
        const total = (quantity * price).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
        const addToCartBtn = document.getElementById('add-to-cart');
        if (addToCartBtn) {
            addToCartBtn.innerHTML = `<i class="fas fa-shopping-cart"></i> Add to Cart - ${total}`;
        }
    };

    decreaseBtn.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
            updateAddToCartButton();
        }
    });
    
    increaseBtn.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue < 10) {
            quantityInput.value = currentValue + 1;
            updateAddToCartButton();
        }
    });
    
    quantityInput.addEventListener('change', () => {
        let value = parseInt(quantityInput.value);
        if (isNaN(value)) value = 1;
        if (value < 1) value = 1;
        if (value > 10) value = 10;
        quantityInput.value = value;
        updateAddToCartButton();
    });
});