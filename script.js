document.addEventListener('DOMContentLoaded', () => {
    const hamMenu = document.getElementById('ham-menu');
    const offScreenMenu = document.getElementById('off-screen-menu');
    const navMenu = document.getElementById('nav');

    hamMenu.addEventListener('click', function() {
        hamMenu.classList.toggle('active');
        offScreenMenu.classList.toggle('active');
        navMenu.classList.toggle('active'); // Menggunakan kelas 'active' untuk menampilkan menu utama
    });

    // Close off-screen menu when clicking outside it
    document.addEventListener("click", function(event) {
        const isClickInsideMenu = offScreenMenu.contains(event.target);
        const isClickInsideHamMenu = hamMenu.contains(event.target);
        if (!isClickInsideMenu && !isClickInsideHamMenu && hamMenu.classList.contains("active")) {
            hamMenu.classList.remove("active");
            offScreenMenu.classList.remove("active");
            navMenu.classList.remove("active");
        }
    });
    
    // Menambahkan submenu ke menu Layanan
    const servicesMenu = document.querySelector('.nav a[href="#services"]');
    const submenu = document.createElement('div');
    submenu.classList.add('submenu');
    submenu.innerHTML = `
        <a href="#sub-service1">Sub Layanan 1</a>
        <a href="#sub-service2">Sub Layanan 2</a>
        <a href="#sub-service3">Sub Layanan 3</a>
    `;
    servicesMenu.parentNode.appendChild(submenu);
});

// ------ Start Menu Pencarian
function searchFunction() {
    // Ambil nilai input pencarian
    var searchText = document.getElementById('searchInput').value;
    // Lakukan sesuatu dengan nilai pencarian, misalnya, arahkan ke halaman pencarian
    window.location.href = 'https://www.contoh.com/cari?q=' + searchText;
}

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            // Lakukan aksi pencarian di sini, misalnya:
            alert('Melakukan pencarian untuk: ' + searchInput.value);
        }
    });
});

// ------ End Menu Pencarian


// Slideshow functionality
let slideIndex = 0;
let slideshowInterval;

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Sembunyikan semua gambar
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;  // Kembali ke gambar pertama setelah mencapai gambar terakhir
    }
    slides[slideIndex - 1].style.display = "block";  // Tampilkan gambar saat ini

    slideshowInterval = setTimeout(showSlides, 3000); // Ubah gambar setiap 3 detik
}

function pauseSlides() {
    clearTimeout(slideshowInterval);
}

function resumeSlides() {
    slideshowInterval = setTimeout(showSlides, 3000);
}

// Kontrol saat mouse di atas slideshow
document.querySelector('.slideshow-container').addEventListener('mouseover', pauseSlides);
document.querySelector('.slideshow-container').addEventListener('mouseout', resumeSlides);

showSlides(); // Panggil fungsi untuk memulai slideshow

// Comment Menu Start --------------------------
document.addEventListener('DOMContentLoaded', function () {
    let comments = [];

    function addComment(event) {
        event.preventDefault();
        const commentInput = document.getElementById('comment-input');
        const commentText = commentInput.value.trim();

        if (commentText !== '') {
            if (comments.length >=5){
                comments.pop(); // Hapus komentar tertua jika sudah ada 5 komentar
            }
            comments.unshift({ text: commentText, timestamp: new Date() });
            displayComments();
            showPopupNotification('Komentar Berhasil ditambahkan!')
            commentInput.value = ''; // Bersihkan input setelah pengiriman
            console.log("Input reset."); // Debug log
        } else {
            showPopupNotification('Komentar tidak boleh kosong!')
        }
    }

    function displayComments() {
        const commentList = document.getElementById('comment-list');
        commentList.innerHTML = ''; // Menghapus semua komentar sebelum menampilkan kembali

        comments.forEach(function(comment) {
            const commentItem = document.createElement('div');
            commentItem.classList.add('comment-item');
            commentItem.innerHTML = `
                <div class="comment-text">${comment.text}</div>
                <div class="comment-timestamp">${formatTimestamp(comment.timestamp)}</div>
            `;
            commentList.appendChild(commentItem);
        });
    }

    function formatTimestamp(timestamp) {
        return timestamp.toLocaleString('en-US', { hour12: false });
    }

    function showPopupNotification(message) {
        const popup = document.getElementById('popup-notification');
        console.log("Popup element:", popup); // Debug log
        popup.innerHTML = message;
        popup.classList.add('show');
        console.log("Popup notification displayed."); // Debug log

        setTimeout(() => {
            popup.classList.remove('show');
            console.log("Popup notification hidden."); // Debug log
        }, 10000); // Notifikasi akan menghilang setelah 3 detik
    }

    document.getElementById('comment-form').addEventListener('submit', addComment);
});
// Comment Menu End --------------------------

// Counter Animation with Intersection Observer --------------------- START 
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');

    const updateCount = (element) => {
        const target = +element.getAttribute('data-target');
        let count = 0;
        const interval = setInterval(() => {
            if (count >= target) {
                clearInterval(interval);
                element.textContent = target;
            } else {
                count += Math.ceil(target / 100); // Adjust the increment value for faster or slower animation
                element.textContent = count;
            }
        }, 30); // Adjust the interval time for animation speed
    };

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Element is intersecting:', entry.target); // Debugging
                const element = entry.target;
                updateCount(element);
                observer.unobserve(element);
            }
        });
    }, options);

    counters.forEach(counter => {
        observer.observe(counter);
    });
});


// Counter Animation with Intersection Observer --------------------- END