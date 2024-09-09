// Mendapatkan elemen-elemen yang dibutuhkan
const hamMenu = document.querySelector('.ham-menu');
const nav = document.querySelector('nav');
const offScreenMenu = document.querySelector('.off-screen-menu');
const searchButton = document.querySelector('#searchButton');
const searchInput = document.querySelector('#searchInput');
const menuLinks = document.querySelectorAll('.off-screen-menu a');



// Background Partikel START ---------------------------------------------------------------------------------
// Particles Canvas
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = document.querySelector('.content').clientHeight;

let particlesArray = [];
const numberOfParticles = 1000;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.1;
    }

    draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

function initParticles() {
    particlesArray = [];
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}

function handleParticles() {
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        if (particlesArray[i].size <= 0.3) {
            particlesArray[i].x = Math.random() * canvas.width;
            particlesArray[i].y = Math.random() * canvas.height;
            particlesArray[i].size = Math.random() * 5 + 1;
        }
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animateParticles);
}

// Inisialisasi dan animasi partikel
initParticles();
animateParticles();

// Update canvas size on window resize
window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = document.querySelector('.content').clientHeight;
});
// Background Partikel END --------------------------------------------------------------------------------------
// Background horizontal scrolling effect
window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let backgroundPositionX = -(scrollPosition * 0.2); // Adjust scroll speed
    document.querySelector('.background').style.transform = `translateX(${backgroundPositionX}px)`;
});
// Scroll Fixed Content START------------------------------------------------------------------------------------------
document.addEventListener('scroll', function() {
    const content = document.querySelector('.konten2');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const distanceFromBottom = documentHeight - (scrollPosition + windowHeight);

    if (distanceFromBottom < 600) {
        content.classList.add('hidden'); // Sembunyikan konten dengan transisi
    } else if (scrollPosition > 600) {
        content.style.position = 'fixed';
        content.style.top = '80px'; /* Posisi fixed di atas viewport */
        content.style.left = '20px';
        content.style.width = '200px'; /* Pastikan lebar tetap */
        content.classList.remove('hidden'); // Tampilkan konten dengan transisi
    } else if (scrollPosition > 640) {
        content.style.position = 'fixed';
        content.style.top = '80px'; /* Posisi fixed di atas viewport */
        content.style.left = '20px';
        content.style.width = '200px'; /* Pastikan lebar tetap */
        content.classList.remove('hidden'); // Tampilkan konten dengan transisi
    } else {
        content.style.position = 'absolute';
        content.style.top = '680px';
        content.style.left = '20px';
        content.style.height = '500px';
        content.style.width = '200px';
        content.classList.remove('hidden'); // Tampilkan konten dengan transisi
    }
});


// Scroll Fixed Content END --------------------------------------------------------------------------------------------
// Background Partikel START --------------------------------------------------------------------------------------
// Particles Canvas
// const canvas = document.createElement('canvas');
// canvas.id = 'particles';
// document.body.appendChild(canvas);
// const ctx = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// let particlesArray = [];
// const numberOfParticles = 100;

// class Particle {
//     constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.size = Math.random() * 3 + 1;
//         this.speedX = Math.random() * 1 - 0.5;
//         this.speedY = Math.random() * 1 - 0.5;
//     }

//     update() {
//         this.x += this.speedX;
//         this.y += this.speedY;

//         if (this.size > 0.2) this.size -= 0.1;
//     }

//     draw() {
//         ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.closePath();
//         ctx.fill();
//     }
// }

// function initParticles() {
//     particlesArray = [];
//     for (let i = 0; i < numberOfParticles; i++) {
//         particlesArray.push(new Particle());
//     }
// }

// function handleParticles() {
//     for (let i = 0; i < particlesArray.length; i++) {
//         particlesArray[i].update();
//         particlesArray[i].draw();

//         if (particlesArray[i].size <= 0.3) {
//             particlesArray[i].x = Math.random() * canvas.width;
//             particlesArray[i].y = Math.random() * canvas.height;
//             particlesArray[i].size = Math.random() * 5 + 1;
//         }
//     }
// }

// function animateParticles() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     handleParticles();
//     requestAnimationFrame(animateParticles);
// }

// // Inisialisasi dan animasi partikel
// initParticles();
// animateParticles();

// // Update canvas size on window resize
// window.addEventListener('resize', function() {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// });
// Background Partikel END --------------------------------------------------------------------------------------



// Toggle untuk hamburger menu
if (hamMenu && offScreenMenu) {
    hamMenu.addEventListener('click', () => {
        hamMenu.classList.toggle('active');
        offScreenMenu.classList.toggle('active');
    });

    // Menutup menu saat link diklik
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamMenu.classList.remove('active');
            offScreenMenu.classList.remove('active');
        });
    });
}

// Fokus pada input pencarian saat tombol pencarian diklik
if (searchButton && searchInput) {
    searchButton.addEventListener('click', () => {
        searchInput.focus();
    });
}

// Atur ulang ukuran canvas saat jendela diubah ukurannya
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});





// Kolom Komentar START --------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentList = document.getElementById('comment-list');
    const userAvatarURL = '../../Gambar/BG/avatar.jpg'; // Link gambar avatar Anda

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Mencegah pengiriman form secara default

        const commentText = commentInput.value.trim();
        console.log('Komentar yang dikirim:', commentText); // Debugging

        if (commentText) {
            // Buat elemen komentar baru
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');

            // Buat elemen pengguna
            const userDiv = document.createElement('div');
            userDiv.classList.add('comment-user');
            userDiv.innerHTML = `
                <img src="${userAvatarURL}" alt="User Avatar" class="user-avatar">
                <span class="username">Nama Pengguna</span>
            `;

            // Buat elemen teks komentar
            const textP = document.createElement('p');
            textP.classList.add('comment-text');
            textP.textContent = commentText;

            // Tambahkan elemen pengguna dan teks ke komentar
            commentDiv.appendChild(userDiv);
            commentDiv.appendChild(textP);

            // Tambahkan komentar ke daftar
            commentList.appendChild(commentDiv);

            // Kosongkan input komentar
            commentInput.value = '';
        } else {
            alert('Komentar tidak boleh kosong!');
        }
    });
});



// Kolom Komentar END ----------------------------------------------------------------------------------------