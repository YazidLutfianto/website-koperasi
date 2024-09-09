document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const arrow = document.getElementById('arrow');

    // Fungsi untuk memeriksa posisi scroll dan mengubah arah panah
    function updateArrowDirection() {
        const scrollPosition = window.scrollY + window.innerHeight;
        const halfHeight = document.documentElement.scrollHeight / 2;

        if (scrollPosition < halfHeight) {
            // Posisi scroll di atas 50%
            arrow.classList.remove('down');
            arrow.classList.add('up');
        } else {
            // Posisi scroll di bawah 50%
            arrow.classList.remove('up');
            arrow.classList.add('down');
        }
    }

    // Event listener untuk scroll
    window.addEventListener('scroll', updateArrowDirection);

    // Event listener untuk tombol
    toggleButton.addEventListener('click', function() {
        const isArrowDown = arrow.classList.contains('down');

        if (isArrowDown) {
            // Scroll ke atas
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // Scroll ke bawah
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        }

        // Toggle panah
        arrow.classList.toggle('down');
        arrow.classList.toggle('up');
    });

    // Perbarui arah panah saat halaman dimuat
    updateArrowDirection();
});
