// Initialize Typed.js with optimized settings
const typed = new Typed('.typed', {
    strings: ['Data Scientist', 'Web Developer', 'Python Enthusiast'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
    showCursor: false // Reduces repaints
});

// Particles.js configuration with modern style
particlesJS('particles-js', {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 1200
            }
        },
        color: {
            value: ['#6366F1', '#8B5CF6', '#EC4899', '#F43F5E', '#0EA5E9'] // Modern indigo/purple/pink palette
        },
        shape: {
            type: ['circle', 'triangle'],
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.7,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#6366F1',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'bubble'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 200,
                size: 6,
                duration: 2,
                opacity: 0.8,
                speed: 3
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Modern gradient background animation
const createGradientBackground = () => {
    const body = document.body;
    let time = 0;
    
    const updateGradient = () => {
        time += 0.005;
        
        // Create a subtle wave effect
        const wave1 = Math.sin(time) * 20;
        const wave2 = Math.cos(time * 0.8) * 15;
        
        body.style.background = `
            linear-gradient(
                135deg,
                rgba(99, 102, 241, 0.05) ${wave1}%,
                rgba(139, 92, 246, 0.05) ${50 + wave2}%,
                rgba(236, 72, 153, 0.05) ${100 - wave1}%
            )
        `;
    };
    
    setInterval(updateGradient, 30);
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