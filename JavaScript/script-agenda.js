document.addEventListener('DOMContentLoaded', function() {
    
    // --- DATABASE ACARA (EDIT DI SINI) ---
    // Format: "YYYY-MM-DD" : [{ title, time, desc }]
    const events = {
        "2025-11-10": [
            { title: "Rapat Rutin HIMA", time: "15:00 WIB", desc: "Pembahasan proker bulan depan di R. Sidang." }
        ],
        "2025-11-15": [
            { title: "Workshop Web Design", time: "08:00 WIB", desc: "Pemateri dari industri, wajib membawa laptop." }
        ],
        "2025-11-20": [
            { title: "Ujian Tengah Semester", time: "07:30 WIB", desc: "Dimulainya pekan UTS Semester Ganjil." },
            { title: "Batas Pengumpulan Tugas", time: "23:59 WIB", desc: "Deadline tugas akhir mata kuliah Pemrograman Web." }
        ],
        "2025-12-01": [
            { title: "Dies Natalis JTI", time: "07:00 WIB", desc: "Upacara pembukaan dan jalan sehat." }
        ]
    };

    const calendarDays = document.getElementById('calendarDays');
    const monthYearText = document.getElementById('monthYear');
    const prevBtn = document.getElementById('prevMonth');
    const nextBtn = document.getElementById('nextMonth');
    const eventDetails = document.getElementById('eventDetails');
    const eventList = document.getElementById('eventList');
    const selectedDateText = document.getElementById('selectedDateText');
    const noEventMsg = document.getElementById('noEventMsg');

    let currentDate = new Date(); // Tanggal hari ini
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    // Fungsi Render Kalender
    function renderCalendar() {
        calendarDays.innerHTML = "";
        
        // Nama Bulan Bahasa Indonesia
        const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
        monthYearText.innerText = `${monthNames[currentMonth]} ${currentYear}`;

        // Mencari hari pertama bulan ini (0=Minggu, 1=Senin, dst)
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        
        // Mencari jumlah hari dalam bulan ini
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        // Membuat kotak kosong untuk hari sebelum tanggal 1
        for (let i = 0; i < firstDay; i++) {
            const emptyDiv = document.createElement('div');
            emptyDiv.classList.add('empty');
            calendarDays.appendChild(emptyDiv);
        }

        // Membuat kotak tanggal 1 s/d 30/31
        for (let i = 1; i <= daysInMonth; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.innerText = i;
            
            // Format tanggal string "YYYY-MM-DD" untuk pencocokan data
            // (Kita tambah '0' di depan jika angka < 10 agar formatnya pas)
            const monthStr = (currentMonth + 1).toString().padStart(2, '0');
            const dayStr = i.toString().padStart(2, '0');
            const dateKey = `${currentYear}-${monthStr}-${dayStr}`;

            // Cek apakah hari ini?
            const today = new Date();
            if (i === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
                dayDiv.classList.add('today');
            }

            // Cek apakah ada event?
            if (events[dateKey]) {
                dayDiv.classList.add('has-event');
                // Tambah titik biru
                const dot = document.createElement('span');
                dot.classList.add('event-dot');
                dayDiv.appendChild(dot);
            }

            // Event Listener saat tanggal diklik
            dayDiv.addEventListener('click', function() {
                // Hapus seleksi lama
                document.querySelectorAll('.calendar-days div').forEach(d => d.classList.remove('selected'));
                // Tambah seleksi baru
                dayDiv.classList.add('selected');
                
                showEvents(dateKey, i, monthNames[currentMonth]);
            });

            calendarDays.appendChild(dayDiv);
        }
    }

    // Fungsi Menampilkan Detail Event di Bawah
    function showEvents(dateKey, day, monthName) {
        const dayEvents = events[dateKey];
        selectedDateText.innerText = `${day} ${monthName} ${currentYear}`;
        
        eventList.innerHTML = ""; // Bersihkan list lama

        if (dayEvents && dayEvents.length > 0) {
            noEventMsg.style.display = 'none';
            eventDetails.style.display = 'block';

            dayEvents.forEach(evt => {
                const itemHTML = `
                    <div class="event-item">
                        <div class="event-time"><i class="fa-regular fa-clock"></i> ${evt.time}</div>
                        <div class="event-title">${evt.title}</div>
                        <p class="event-desc">${evt.desc}</p>
                    </div>
                `;
                eventList.innerHTML += itemHTML;
            });
        } else {
            eventDetails.style.display = 'block';
            eventList.innerHTML = `<p class="text-muted text-center py-3">Tidak ada agenda kegiatan pada tanggal ini.</p>`;
            noEventMsg.style.display = 'none';
        }
    }

    // Tombol Ganti Bulan
    prevBtn.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar();
        eventDetails.style.display = 'none'; // Sembunyikan detail saat ganti bulan
        noEventMsg.style.display = 'block';
    });

    nextBtn.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar();
        eventDetails.style.display = 'none';
        noEventMsg.style.display = 'block';
    });

    // Jalankan render pertama kali
    renderCalendar();
});