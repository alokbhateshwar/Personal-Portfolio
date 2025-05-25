// Initialize Typed.js with optimized settings
const typed = new Typed('.typed', {
    strings: ['Data Scientist', 'Web Developer', 'Python Enthusiast'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
    showCursor: false // Reduces repaints
});

// Optimize Particles.js configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80, // Reduced number of particles
            density: {
                enable: true,
                value_area: 1000
            }
        },
        color: {
            value: ['#007bff', '#00ff88'] // Reduced color variations
        },
        shape: {
            type: ['circle'], // Simplified shapes
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.5,
            random: false, // Disabled random opacity
            anim: {
                enable: false // Disabled opacity animation
            }
        },
        size: {
            value: 3,
            random: false, // Disabled random size
            anim: {
                enable: false // Disabled size animation
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#00ff88',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 1.5, // Reduced speed
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false // Disabled attraction
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
                enable: false // Disabled click interaction
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.5
                }
            }
        }
    },
    retina_detect: false // Disabled retina detection for better performance
});

// Optimize gradient background animation
const createGradientBackground = () => {
    const body = document.body;
    let hue = 0;
    
    // Reduced animation frequency
    setInterval(() => {
        hue = (hue + 0.5) % 360;
        body.style.background = `linear-gradient(${hue}deg, rgba(0,123,255,0.1), rgba(0,255,136,0.1))`;
    }, 100);
};

createGradientBackground();

// Initialize ScrollReveal with optimized settings
ScrollReveal().reveal('.section-header', {
    delay: 100,
    distance: '30px',
    origin: 'bottom',
    duration: 800,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    reset: false
});

ScrollReveal().reveal('.about-content', {
    delay: 200,
    distance: '30px',
    origin: 'left',
    duration: 800,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    reset: false
});

ScrollReveal().reveal('.project-card', {
    delay: 100,
    distance: '30px',
    origin: 'bottom',
    duration: 800,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 100,
    reset: false
});

// Optimize Vanilla Tilt
VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
    max: 15, // Reduced tilt angle
    speed: 300,
    glare: true,
    'max-glare': 0.3,
    scale: 1.02,
    perspective: 1000
});

// Optimize Skills Loading
document.addEventListener('DOMContentLoaded', function() {
    // Load skills with optimized rendering
    fetch('skills.json')
        .then(response => response.json())
        .then(data => {
            const skillsContainer = document.querySelector('.skills-container');
            const fragment = document.createDocumentFragment();
            
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
                
                fragment.appendChild(categoryElement);
            });
            
            skillsContainer.appendChild(fragment);
        });

    // Optimize Mobile Menu
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('active');
        });

        navLinksItems.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                menuBtn.classList.remove('active');
            });
        });
    }

    // Optimize Smooth Scrolling
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
});

// Optimize Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Optimize Project Click Handler
function handleProjectClick(projectId) {
    if (projectId === 'portfolio') {
        window.open('https://github.com/alokbhateshwar/Personal-Portfolio', '_blank');
    } else {
        window.location.href = 'maintenance.html';
    }
} 