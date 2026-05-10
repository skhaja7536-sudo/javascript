document.addEventListener('DOMContentLoaded', () => {
    const addButtons = document.querySelectorAll('.add-btn');

    addButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            const flavor = card.querySelector('h3').innerText;
            const price = card.querySelector('.price-tag').innerText;
            
            // Simple visual feedback
            const originalText = e.target.innerText;
            e.target.innerText = 'Added!';
            e.target.style.backgroundColor = '#7bed9f';
            e.target.style.color = '#2f3542';
            e.target.style.borderColor = '#7bed9f';
            
            alert(`Added ${flavor} (${price}) to your cart!`);

            setTimeout(() => {
                e.target.innerText = originalText;
                e.target.style.backgroundColor = '';
                e.target.style.color = '';
                e.target.style.borderColor = '';
            }, 2000);
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
