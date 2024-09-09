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