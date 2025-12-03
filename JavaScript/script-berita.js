document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Interaksi Menu Sidebar
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Cek jika linknya hanya '#' (dummy)
            const href = this.getAttribute('href');
            if(href === '#') {
                e.preventDefault();
                
                // Pindahkan kelas 'active' secara visual (jika tidak pindah halaman)
                menuItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // 2. Interaksi Klik Kartu Berita
    const newsCards = document.querySelectorAll('.custom-card');
    
    newsCards.forEach(card => {
        card.addEventListener('click', function() {
            // Ambil Judul dan Tanggal dari dalam kartu
            const title = this.querySelector('h6').innerText;
            const dateText = this.querySelector('small') ? this.querySelector('small').innerText.trim() : '';

            // Simulasi membuka halaman detail berita
            // Nanti bisa diganti dengan: window.location.href = 'detail-berita.html';
            alert(`Membaca Berita:\n"${title}"\n\nTanggal: ${dateText}`);
        });
    });

});