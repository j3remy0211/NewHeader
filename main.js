// MTech - Main JavaScript File

// Smooth scroll behavior
document.addEventListener('DOMContentLoaded', function() {
    console.log('MTech website loaded successfully');

    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe portfolio cards for animation
    document.querySelectorAll('.portfolio-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Social links click tracking (optional)
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const platform = this.getAttribute('aria-label');
            console.log(`Social link clicked: ${platform}`);
            // Here you can add analytics tracking if needed
        });
    });

    // Portfolio cards click tracking (optional)
    document.querySelectorAll('.portfolio-card').forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('.portfolio-card-title').textContent;
            console.log(`Portfolio card clicked: ${title}`);
            // Here you can add navigation or modal logic if needed
        });
    });

    // Add parallax effect to hero section (optional)
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroVisual = document.querySelector('.hero-visual');
        if (heroVisual) {
            heroVisual.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });

    // Example website link handler
    const exampleLink = document.querySelector('.example-link');
    if (exampleLink) {
        exampleLink.addEventListener('click', function(e) {
            // Uncomment if you want to prevent default and add custom logic
            // e.preventDefault();
            console.log('Example website link clicked');
        });
    }

    // Twitter follow button handler
    const twitterBtn = document.querySelector('.twitter-follow-btn');
    if (twitterBtn) {
        twitterBtn.addEventListener('click', function(e) {
            // Uncomment if you want to prevent default and add custom logic
            // e.preventDefault();
            console.log('Twitter follow button clicked');
        });
    }
});

// Optional: Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(function() {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
