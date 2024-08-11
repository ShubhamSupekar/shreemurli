document.addEventListener('DOMContentLoaded', () => {
    // Video playback rate adjustment
    const video = document.getElementById('backgroundVideo');
    if (video) {
        video.playbackRate = 0.5; // Adjust this value to slow down or speed up the video
    }

    // Card rotation functionality
    const cards = document.querySelectorAll('.card');
    if (cards.length > 0) {
        let currentIndex = 0;

        function showNextCard() {
            // Hide the current card
            cards[currentIndex].classList.remove('active');

            // Update the index to the next card
            currentIndex = (currentIndex + 1) % cards.length;

            // Show the next card
            cards[currentIndex].classList.add('active');
        }

        // Initial setup
        cards[currentIndex].classList.add('active');

        // Change cards every 5 seconds
        setInterval(showNextCard, 5000);
    }

    // Slider hover functionality
    const slides = document.querySelector('.slides');
    if (slides) {
        let isHovered = false;

        slides.addEventListener('mouseenter', () => {
            isHovered = true;
            slides.style.animationPlayState = 'paused';
        });

        slides.addEventListener('mouseleave', () => {
            isHovered = false;
            slides.style.animationPlayState = 'running';
        });
    }

    // Intersection Observer for highlighting cards on scroll
    const observerOptions = {
        root: null, // Use viewport as root
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the card is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all cards
                cards.forEach(card => card.classList.remove('active'));

                // Add active class to the currently visible card
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Observe each card
    cards.forEach(card => observer.observe(card));
});
