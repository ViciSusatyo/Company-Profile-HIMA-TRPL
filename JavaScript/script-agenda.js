document.addEventListener('DOMContentLoaded', function() {
    
    // --- DATABASE ACARA (EDIT DI SINI) ---
    // Format: "YYYY-MM-DD" : [{ title, time, desc }]
    const events = {
        // --- Kegiatan HIMA TRPL (Data Asli) ---
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
        ],

        // --- Tambahan Hari Besar Dunia/Nasional (Desember 2025 - Desember 2026) ---

        // Desember 2025
        "2025-12-25": [
            { title: "Hari Raya Natal", time: "Sepanjang Hari", desc: "Perayaan Kelahiran Yesus Kristus." }
        ],
        "2025-12-31": [
            { title: "Malam Tahun Baru Masehi", time: "Malam Hari", desc: "Persiapan menyambut Tahun Baru 2026." }
        ],

        // Januari 2026
        "2026-01-01": [
            { title: "Tahun Baru Masehi", time: "Sepanjang Hari", desc: "Hari libur resmi Tahun Baru." }
        ],
        "2026-01-23": [
            { title: "Tahun Baru Imlek 2577", time: "Sepanjang Hari", desc: "Perayaan Tahun Baru Tionghoa (Tahun Ular)." }
        ],

        // Februari 2026
        "2026-02-14": [
            { title: "Hari Valentine", time: "Sepanjang Hari", desc: "Hari Kasih Sayang." }
        ],

        // Maret 2026
        "2026-03-08": [
            { title: "Hari Perempuan Internasional", time: "Sepanjang Hari", desc: "Peringatan pencapaian sosial, ekonomi, budaya, dan politik perempuan." }
        ],
        "2026-03-17": [
            { title: "Hari Raya Nyepi (Tahun Baru Saka 1948)", time: "Sepanjang Hari", desc: "Hari libur keagamaan Hindu. Hari Penyepian." }
        ],
        "2026-03-27": [
            { title: "Wafat Isa Al Masih/Jumat Agung", time: "Sepanjang Hari", desc: "Hari libur keagamaan Kristen." }
        ],

        // April 2026
        "2026-04-16": [
            { title: "Hari Raya Idul Fitri 1447 H", time: "Sepanjang Hari", desc: "Hari pertama perayaan Idul Fitri (Tanggal perkiraan)." }
        ],
        "2026-04-17": [
            { title: "Hari Raya Idul Fitri 1447 H (Hari Kedua)", time: "Sepanjang Hari", desc: "Hari kedua perayaan Idul Fitri (Tanggal perkiraan)." }
        ],
        "2026-04-22": [
            { title: "Hari Bumi (Earth Day)", time: "Sepanjang Hari", desc: "Aksi global untuk mendukung perlindungan lingkungan." }
        ],

        // Mei 2026
        "2026-05-01": [
            { title: "Hari Buruh Internasional", time: "Sepanjang Hari", desc: "Peringatan hak-hak pekerja." }
        ],
        "2026-05-14": [
            { title: "Kenaikan Isa Al Masih", time: "Sepanjang Hari", desc: "Hari libur keagamaan Kristen." }
        ],
        "2026-05-20": [
            { title: "Hari Kebangkitan Nasional", time: "Sepanjang Hari", desc: "Peringatan berdirinya organisasi Budi Utomo." }
        ],
        "2026-05-28": [
            { title: "Hari Raya Waisak 2570 BE", time: "Sepanjang Hari", desc: "Hari libur keagamaan Buddha (Tanggal perkiraan)." }
        ],
        
        // Juni 2026
        "2026-06-01": [
            { title: "Hari Lahir Pancasila", time: "Sepanjang Hari", desc: "Peringatan Hari Lahir Pancasila." }
        ],
        "2026-06-05": [
            { title: "Hari Lingkungan Hidup Sedunia", time: "Sepanjang Hari", desc: "Didukung PBB untuk meningkatkan kesadaran lingkungan." }
        ],

        // Juli 2026
        "2026-07-06": [
            { title: "Hari Raya Idul Adha 1447 H", time: "Pagi Hari", desc: "Hari Raya Kurban (Tanggal perkiraan)." }
        ],

        // Agustus 2026
        "2026-08-17": [
            { title: "Hari Kemerdekaan RI ke-81", time: "Pagi Hari", desc: "Upacara dan perayaan Hari Ulang Tahun Republik Indonesia." }
        ],
        
        // September 2026
        "2026-09-01": [
            { title: "Tahun Baru Islam 1448 H", time: "Sepanjang Hari", desc: "Peringatan Tahun Baru Hijriah (Tanggal perkiraan)." }
        ],
        
        // Oktober 2026
        "2026-10-09": [
            { title: "Maulid Nabi Muhammad SAW", time: "Sepanjang Hari", desc: "Peringatan kelahiran Nabi Muhammad SAW (Tanggal perkiraan)." }
        ],
        "2026-10-28": [
            { title: "Hari Sumpah Pemuda", time: "Sepanjang Hari", desc: "Peringatan keputusan Sumpah Pemuda 1928." }
        ],

        // November 2026
        "2026-11-10": [
            { title: "Hari Pahlawan Nasional", time: "Sepanjang Hari", desc: "Peringatan Pertempuran Surabaya 1945." }
        ],

        // Desember 2026
        "2026-12-25": [
            { title: "Hari Raya Natal", time: "Sepanjang Hari", desc: "Perayaan Kelahiran Yesus Kristus." }
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