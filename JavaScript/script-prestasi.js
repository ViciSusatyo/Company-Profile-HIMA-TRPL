document.addEventListener('DOMContentLoaded', function() {
    
    // Sidebar Interaction
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if(href === '#') {
                e.preventDefault();
                menuItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Card Interaction
    const cards = document.querySelectorAll('.custom-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h4').innerText;
            const badge = this.querySelector('.badge').innerText;
            alert(`Detail Prestasi:\n${title} (${badge})\n\nLihat sertifikat dan dokumentasi lengkap?`);
        });
    });
});