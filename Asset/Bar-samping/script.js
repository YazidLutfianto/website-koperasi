const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    sidebar.classList.toggle('show');
});

searchButton.addEventListener('click', () => {
    searchInput.classList.toggle('show');
});