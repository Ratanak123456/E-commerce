document.addEventListener('DOMContentLoaded', function() {
    // Product Gallery Thumbnail Navigation
    const thumbnails = document.querySelectorAll('.product-gallery-thumbnail');
    const mainImage = document.getElementById('main-product-image');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked thumbnail
            this.classList.add('active');
            
            // Change main image
            const newImageSrc = this.getAttribute('data-image');
            mainImage.src = newImageSrc;
            
            // Add fade effect
            mainImage.style.opacity = 0;
            setTimeout(() => {
                mainImage.style.opacity = 1;
            }, 300);
        });
    });

    // Product Option Selection
    const optionButtons = document.querySelectorAll('.product-option-btn');
    
    optionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const optionType = this.getAttribute('data-option');
            const optionValue = this.getAttribute('data-value');
            
            // Remove selected styling from all options of this type
            document.querySelectorAll(`.product-option-btn[data-option="${optionType}"]`).forEach(btn => {
                btn.classList.remove('border-2', 'border-primary-600', 'bg-blue-50', 'dark:bg-blue-900/30');
                btn.classList.add('border', 'border-gray-300', 'dark:border-gray-600');
            });
            
            // Add selected styling to clicked option
            this.classList.remove('border', 'border-gray-300', 'dark:border-gray-600');
            this.classList.add('border-2', 'border-primary-600', 'bg-blue-50', 'dark:bg-blue-900/30');
            
            // Update price based on selections (simplified example)
            updatePrice();
        });
    });

    // Quantity Selector
    const quantityInput = document.getElementById('quantity');
    const decreaseBtn = document.getElementById('quantity-decrease');
    const increaseBtn = document.getElementById('quantity-increase');
    
    decreaseBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
            updatePrice();
        }
    });
    
    increaseBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue < 10) {
            quantityInput.value = currentValue + 1;
            updatePrice();
        }
    });
    
    quantityInput.addEventListener('change', function() {
        let value = parseInt(this.value);
        if (isNaN(value) || value < 1) {
            this.value = 1;
        } else if (value > 10) {
            this.value = 10;
        }
        updatePrice();
    });

    // Price Calculation
    function updatePrice() {
        const basePrice = 3499.00;
        let additionalCost = 0;
        
        // Get selected options
        const selectedProcessor = document.querySelector('.product-option-btn[data-option="processor"].border-primary-600');
        const selectedMemory = document.querySelector('.product-option-btn[data-option="memory"].border-primary-600');
        const selectedStorage = document.querySelector('.product-option-btn[data-option="storage"].border-primary-600');
        
        // Calculate additional costs
        if (selectedProcessor && selectedProcessor.getAttribute('data-value') === 'm2-max') {
            additionalCost += 300;
        }
        
        if (selectedMemory) {
            if (selectedMemory.getAttribute('data-value') === '32gb') {
                additionalCost += 200;
            } else if (selectedMemory.getAttribute('data-value') === '64gb') {
                additionalCost += 400;
            }
        }
        
        if (selectedStorage) {
            if (selectedStorage.getAttribute('data-value') === '1tb') {
                additionalCost += 200;
            } else if (selectedStorage.getAttribute('data-value') === '2tb') {
                additionalCost += 600;
            } else if (selectedStorage.getAttribute('data-value') === '4tb') {
                additionalCost += 1200;
            }
        }
        
        // Calculate total
        const quantity = parseInt(quantityInput.value);
        const totalPrice = (basePrice + additionalCost) * quantity;
        
        // Update display
        document.getElementById('add-to-cart').textContent = `Add to Cart - $${totalPrice.toFixed(2)}`;
    }

    // Product Tabs
    const tabButtons = document.querySelectorAll('[data-tab-target]');
    const tabContents = document.querySelectorAll('[role="tabpanel"]');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const target = document.getElementById(button.getAttribute('data-tab-target'));
            
            // Hide all tab contents
            tabContents.forEach(content => {
                content.classList.add('hidden');
            });
            
            // Remove active styling from all buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('border-primary-600', 'text-primary-600');
                btn.classList.add('border-transparent', 'hover:text-gray-600', 'dark:hover:text-gray-300');
            });
            
            // Show selected tab content
            target.classList.remove('hidden');
            target.classList.add('fade-in');
            
            // Add active styling to clicked button
            button.classList.add('border-primary-600', 'text-primary-600');
            button.classList.remove('border-transparent', 'hover:text-gray-600', 'dark:hover:text-gray-300');
        });
    });

    // Accordion functionality
    const accordionButtons = document.querySelectorAll('.hs-accordion-toggle');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const accordionContent = button.nextElementSibling;
            const isExpanded = accordionContent.classList.contains('hidden');
            
            // Close all accordions first
            document.querySelectorAll('.hs-accordion-content').forEach(content => {
                content.classList.add('hidden');
            });
            
            // Toggle the clicked accordion
            if (isExpanded) {
                accordionContent.classList.remove('hidden');
            }
        });
    });

    // Initialize price display
    updatePrice();
});