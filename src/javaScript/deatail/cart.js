document.addEventListener('DOMContentLoaded', () => {
    const addToCartBtn = document.getElementById('add-to-cart');
    const quantityInput = document.getElementById('quantity');
    
    if (!addToCartBtn || !quantityInput) return;

    addToCartBtn.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value);
        const selectedOptions = {
            processor: document.querySelector('.product-option-btn[data-option="processor"].border-primary')?.getAttribute('data-value'),
            memory: document.querySelector('.product-option-btn[data-option="memory"].border-primary')?.getAttribute('data-value'),
            storage: document.querySelector('.product-option-btn[data-option="storage"].border-primary')?.getAttribute('data-value'),
            color: document.querySelector('.product-option-btn[data-option="color"].border-primary')?.getAttribute('data-value') || 'space-gray'
        };
        
        console.log('Added to cart:', {
            product: 'MacBook Pro 16-inch (M2 Max, 2023)',
            quantity: quantity,
            options: selectedOptions,
            price: 3499,
            total: quantity * 3499
        });
        
        alert(`${quantity} MacBook Pro 16" added to cart!`);
    });
});