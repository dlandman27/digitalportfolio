const portfolioContainer = document.querySelector('.portfolio-container');

// Function to handle the fade-in effect
const fadeInUp = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
};

// Create an Intersection Observer
const observer = new IntersectionObserver(fadeInUp);

// Observe the portfolio container
observer.observe(portfolioContainer);
