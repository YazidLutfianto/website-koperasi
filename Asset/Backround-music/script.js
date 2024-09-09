// Ambil elemen
const musicBtn = document.getElementById('music-btn');
const musicIcon = document.getElementById('music-icon');
const backgroundMusic = document.getElementById('background-music');

// Atur volume musik menjadi lebih pelan
backgroundMusic.volume = 0.3;

// Event listener untuk tombol musik
musicBtn.addEventListener('click', function() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicBtn.classList.add('active'); // Tambahkan kelas 'active' ketika musik menyala
        musicIcon.classList.remove('fa-play');
        musicIcon.classList.add('fa-pause');
    } else {
        backgroundMusic.pause();
        musicBtn.classList.remove('active'); // Hapus kelas 'active' ketika musik dimatikan
        musicIcon.classList.remove('fa-pause');
        musicIcon.classList.add('fa-play');
    }
});