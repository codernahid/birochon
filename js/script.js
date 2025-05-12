// Smooth scrolling for navigation links (only for same-page anchors)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    if (anchor.getAttribute('href') !== '#') {  // Only for actual anchor links
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
    } else {
        navbar.style.backgroundColor = 'var(--bg-darker)';
    }
});

// Mobile menu toggle
const createMobileMenu = () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    // Create hamburger menu button
    const menuButton = document.createElement('button');
    menuButton.classList.add('menu-toggle');
    menuButton.innerHTML = '☰';
    menuButton.setAttribute('aria-label', 'Toggle navigation menu');
    menuButton.style.display = 'none';
    
    // Insert button before nav links
    navbar.insertBefore(menuButton, navLinks);
    
    // Toggle menu on click
    menuButton.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        menuButton.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target)) {
            navLinks.classList.remove('active');
            menuButton.innerHTML = '☰';
        }
    });

    // Handle window resize
    const handleResize = () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            menuButton.style.display = 'none';
            navLinks.style.display = 'flex';
        } else {
            menuButton.style.display = 'block';
            if (!navLinks.classList.contains('active')) {
                navLinks.style.display = 'none';
            }
        }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial setup
};

// Initialize mobile menu
document.addEventListener('DOMContentLoaded', () => {
    createMobileMenu();
    
    // Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.color = 'var(--accent-color)';
        }
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    const navLinks = document.querySelector('.nav-links');
    const menuButton = document.querySelector('.menu-toggle');
    
    if (window.innerWidth > 768) {
        navLinks.style.display = 'flex';
        menuButton.style.display = 'none';
    } else {
        navLinks.style.display = 'none';
        menuButton.style.display = 'block';
    }
});

// Form handling
function handleSubmit(event) {
    event.preventDefault();
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    // Basic validation
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();
    
    if (!name || !email || !subject || !message) {
        showFormMessage('সকল তথ্য পূরণ করুন', false);
        return;
    }
    
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showFormMessage('সঠিক ইমেইল ঠিকানা দিন', false);
        return;
    }
    
    // Success message (in a real application, you would send this to a server)
    showFormMessage('আপনার বার্তা সফলভাবে পাঠানো হয়েছে। আমরা শীঘ্রই যোগাযোগ করব।', true);
    form.reset();
}

function showFormMessage(message, isSuccess) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.className = 'form-message ' + (isSuccess ? 'success' : 'error');
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}
