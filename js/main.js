// Initialize Typed.js
const typed = new Typed('.typed', {
    strings: ['Data Scientist', 'Web Developer', 'Python Enthusiast'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
});

// Initialize Particles.js with enhanced configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 120,
            density: {
                enable: true,
                value_area: 900
            }
        },
        color: {
            value: ['#007bff', '#00ff88', '#ff00ff', '#ff8800', '#fff', '#ffd700']
        },
        shape: {
            type: ['circle', 'triangle', 'polygon', 'star'],
            stroke: {
                width: 0,
                color: '#000000'
            },
            polygon: {
                nb_sides: 5
            },
            star: {
                nb_points: 5
            }
        },
        opacity: {
            value: 0.7,
            random: true,
            anim: {
                enable: true,
                speed: 1.5,
                opacity_min: 0.15,
                sync: false
            }
        },
        size: {
            value: 4,
            random: true,
            anim: {
                enable: true,
                speed: 2.5,
                size_min: 0.2,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 140,
            color: '#00ff88',
            opacity: 0.3,
            width: 1.2
        },
        move: {
            enable: true,
            speed: 2.2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: true,
                rotateX: 800,
                rotateY: 1600
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 160,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 6
            }
        }
    },
    retina_detect: true
});

// Add gradient background animation
const createGradientBackground = () => {
    const body = document.body;
    let hue = 0;
    
    setInterval(() => {
        hue = (hue + 1) % 360;
        body.style.background = `linear-gradient(${hue}deg, rgba(0,123,255,0.1), rgba(0,255,136,0.1))`;
    }, 50);
};

createGradientBackground();

// Initialize ScrollReveal
ScrollReveal().reveal('.section-header', {
    delay: 200,
    distance: '50px',
    origin: 'bottom'
});

ScrollReveal().reveal('.about-content', {
    delay: 300,
    distance: '50px',
    origin: 'left'
});

ScrollReveal().reveal('.project-card', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    interval: 200
});

// Initialize Vanilla Tilt
VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
    max: 25,
    speed: 400,
    glare: true,
    'max-glare': 0.5
});

// Load Skills from JSON
fetch('skills.json')
    .then(response => response.json())
    .then(data => {
        const skillsContainer = document.querySelector('.skills-container');
        
        Object.entries(data).forEach(([category, categoryData]) => {
            const categoryElement = document.createElement('div');
            categoryElement.className = 'skill-category';
            
            categoryElement.innerHTML = `
                <div class="category-header">
                    <i class="${categoryData.icon}"></i>
                    <h3>${category}</h3>
                </div>
                <div class="skills-grid">
                    ${categoryData.skills.map(skill => `
                        <div class="skill-item">
                            <i class="${skill.icon}"></i>
                            <h4>${skill.name}</h4>
                            <div class="skill-bar">
                                <div class="skill-level" style="width: ${skill.level}%"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            
            skillsContainer.appendChild(categoryElement);
        });
    });

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    if (menuBtn && navLinks) {
        // Toggle menu when clicking the menu button
        menuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('active');
        });

        // Close menu when clicking a nav link
        navLinksItems.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                menuBtn.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
                navLinks.classList.remove('active');
                menuBtn.classList.remove('active');
            }
        });

        // Prevent clicks inside nav from closing the menu
        navLinks.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Handle Project Clicks
function handleProjectClick(projectId) {
    // Show maintenance message
    const maintenanceMessage = 'This project is currently under maintenance. Please check back soon!';
    alert(maintenanceMessage);
    
    // Redirect to maintenance page
    window.location.href = 'maintenance.html';
} 