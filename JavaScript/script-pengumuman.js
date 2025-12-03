document.addEventListener('DOMContentLoaded', function() {
    
    // Efek Hover Menu Sidebar (Opsional karena sudah CSS, tapi untuk logika aktif)
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Logika ganti menu aktif
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Simulasi Klik pada Kartu Pengumuman
    const cards = document.querySelectorAll('.custom-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h6').innerText;
            // Di sini Anda bisa arahkan ke halaman detail, contoh:
            // window.location.href = 'detail.html?judul=' + encodeURIComponent(title);
            alert('Anda membuka pengumuman: ' + title);
        });
    });
});