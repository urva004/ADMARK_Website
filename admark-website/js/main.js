/*
========================================================================
   AD Mark Logistics — Central Interactive JavaScript
   Pure Vanilla JS — Zero Third-Party Libraries — Fully Optimized
========================================================================
*/

// Configure Tailwind CSS dynamically (Zero inline scripts in HTML)
if (typeof tailwind !== 'undefined') {
    tailwind.config = {
        darkMode: 'class',
        theme: {
            extend: {
                colors: {
                    "on-tertiary": "#ffffff",
                    "caution-red": "#D32F2F",
                    "tertiary-fixed-dim": "#c7c6c6",
                    "inverse-surface": "#2f3131",
                    "on-secondary-fixed": "#1c1b1b",
                    "surface-container-lowest": "#ffffff",
                    "inverse-on-surface": "#f1f1f1",
                    "on-secondary": "#ffffff",
                    "on-surface": "#1a1c1c",
                    "outline": "#81765f",
                    "surface-tint": "#755b00",
                    "on-error-container": "#93000a",
                    "secondary-container": "#e2dfde",
                    "surface-dim": "#dadada",
                    "surface-bright": "#f9f9f9",
                    "secondary": "#5f5e5e",
                    "on-secondary-fixed-variant": "#474746",
                    "error-container": "#ffdad6",
                    "surface-container-high": "#e8e8e8",
                    "safety-yellow": "#FFC800",
                    "primary-fixed-dim": "#f4bf00",
                    "steel-gray": "#666666",
                    "tertiary-container": "#d0cfcf",
                    "primary-container": "#ffc800",
                    "tertiary-fixed": "#e4e2e2",
                    "on-error": "#ffffff",
                    "primary": "#755b00",
                    "secondary-fixed": "#e5e2e1",
                    "error": "#ba1a1a",
                    "inverse-primary": "#f4bf00",
                    "surface": "#f9f9f9",
                    "on-surface-variant": "#4f4632",
                    "on-primary": "#ffffff",
                    "outline-variant": "#d2c5ab",
                    "on-tertiary-fixed": "#1b1c1c",
                    "on-primary-container": "#6e5500",
                    "surface-container": "#eeeeee",
                    "surface-container-low": "#f3f3f3",
                    "background": "#f9f9f9",
                    "surface-variant": "#e2e2e2",
                    "on-primary-fixed": "#241a00",
                    "on-tertiary-container": "#585858",
                    "on-primary-fixed-variant": "#594400",
                    "on-secondary-container": "#636262",
                    "on-background": "#1a1c1c",
                    "tertiary": "#5e5e5e",
                    "port-black": "#1A1A1A",
                    "surface-container-highest": "#e2e2e2",
                    "primary-fixed": "#ffdf92",
                    "on-tertiary-fixed-variant": "#464747",
                    "secondary-fixed-dim": "#c8c6c5",
                    "intelligence-purple": "#8e44ad"
                },
                borderRadius: {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
                },
                spacing: {
                    "xs": "4px",
                    "xl": "80px",
                    "lg": "48px",
                    "base": "8px",
                    "container-max": "1280px",
                    "md": "24px",
                    "sm": "12px",
                    "gutter": "24px"
                },
                fontFamily: {
                    "headline-md": ["Chivo"],
                    "headline-xl-mobile": ["Chivo"],
                    "body-md": ["Inter"],
                    "label-md": ["Inter"],
                    "headline-lg": ["Chivo"],
                    "headline-sm": ["Chivo"],
                    "body-lg": ["Inter"],
                    "body-sm": ["Inter"],
                    "label-bold": ["Inter"],
                    "headline-xl": ["Chivo"]
                },
                fontSize: {
                    "headline-md": ["32px", {"lineHeight": "40px", "fontWeight": "700"}],
                    "headline-xl-mobile": ["40px", {"lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "800"}],
                    "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                    "label-md": ["12px", {"lineHeight": "16px", "fontWeight": "500"}],
                    "headline-lg": ["48px", {"lineHeight": "56px", "fontWeight": "700"}],
                    "headline-sm": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                    "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                    "body-sm": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
                    "label-bold": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "700"}],
                    "headline-xl": ["64px", {"lineHeight": "72px", "letterSpacing": "-0.02em", "fontWeight": "800"}]
                }
            }
        }
    };
}


document.addEventListener('DOMContentLoaded', () => {
    // Initialize Systems Core
    initComponentLoader();
    initScrollReveal();
    initStickyNav();
    initImageSliders();
    initMetricCountUp();
    initProgressBars();
});

/* ========================================================================
   1. Component Loader (Navbar & Footer Injection + Active State Highlights)
   ======================================================================== */
function initComponentLoader() {
    const navbarContainer = document.getElementById('global-navbar');
    const footerContainer = document.getElementById('global-footer');

    // Loader helper
    const loadComponent = (url, container, callback) => {
        if (!container) return;
        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error(`Failed to load component: ${url}`);
                return res.text();
            })
            .then(html => {
                container.innerHTML = html;
                if (callback) callback();
            })
            .catch(err => console.error(err));
    };

    // Load Navbar
    loadComponent('admark-website/components/navbar.html', navbarContainer, () => {
        // Activate mobile drawers and active nav highlights
        initMobileMenu();
        initActiveNavHighlights();
    });

    // Load Footer
    loadComponent('admark-website/components/footer.html', footerContainer);
}

/* ========================================================================
   2. Navbar Active Links & Services Highlighting
   ======================================================================== */
function initActiveNavHighlights() {
    const currentPath = window.location.pathname;
    const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

    // Page mapping list
    const navHome = document.getElementById('nav-home');
    const navAbout = document.getElementById('nav-about');
    const navServicesParent = document.getElementById('nav-services-parent');
    
    const mobHome = document.getElementById('mob-home');
    const mobAbout = document.getElementById('mob-about');
    const mobServicesParent = document.getElementById('mob-services-parent');

    // Individual service paths
    const servicePages = [
        'warehousing.html',
        'transport.html',
        'cfs.html',
        'consulting.html',
        'control-tower.html'
    ];

    // Reset active
    const links = document.querySelectorAll('.nav-link, .dropdown-item, .mobile-link, .mobile-sublink');
    links.forEach(l => l.classList.remove('active'));

    // Desktop highlighting
    if (pageName === 'index.html') {
        if (navHome) navHome.classList.add('active');
        if (mobHome) mobHome.classList.add('active');
    } else if (pageName === 'about.html') {
        if (navAbout) navAbout.classList.add('active');
        if (mobAbout) mobAbout.classList.add('active');
    } else if (servicePages.includes(pageName)) {
        // Highlight active dropdown parent
        if (navServicesParent) {
            const toggleBtn = navServicesParent.querySelector('.dropdown-toggle');
            if (toggleBtn) toggleBtn.classList.add('active');
        }
        if (mobServicesParent) mobServicesParent.classList.add('active');

        // Highlight exact dropdown item child
        const cleanIdName = pageName.replace('.html', '');
        const desktopChild = document.getElementById(`nav-${cleanIdName}`);
        const mobileChild = document.getElementById(`mob-${cleanIdName}`);
        
        if (desktopChild) desktopChild.classList.add('active');
        if (mobileChild) mobileChild.classList.add('active');
    }
}

/* ========================================================================
   3. Mobile Hamburger Navigation Menu Drawer
   ======================================================================== */
function initMobileMenu() {
    const toggleBtn = document.getElementById('mobile-toggle');
    const closeBtn = document.getElementById('mobile-close');
    const drawer = document.getElementById('mobile-drawer');
    const servicesAccordionBtn = document.getElementById('mob-services-parent');

    if (!toggleBtn || !drawer) return;

    // Toggle menu slide-in open
    toggleBtn.addEventListener('click', () => {
        drawer.classList.add('nav--open');
        document.body.style.overflow = 'hidden'; // Stop page scrolling
    });

    // Close menu drawer
    const closeMenu = () => {
        drawer.classList.remove('nav--open');
        document.body.style.overflow = ''; // Restore scrolling
    };

    if (closeBtn) closeBtn.addEventListener('click', closeMenu);

    // Close on outside overlay clicks
    drawer.addEventListener('click', (e) => {
        if (e.target === drawer) closeMenu();
    });

    // Close on keyboard ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer.classList.contains('nav--open')) {
            closeMenu();
        }
    });

    // Mobile services accordion collapsible trigger
    if (servicesAccordionBtn) {
        servicesAccordionBtn.addEventListener('click', () => {
            const accordionParent = servicesAccordionBtn.closest('.mobile-accordion');
            if (accordionParent) {
                accordionParent.classList.toggle('open');
            }
        });
    }
}

/* ========================================================================
   4. Image Sliders & Touch-Enabled Carousels
   ======================================================================== */
function initImageSliders() {
    // 4a. Snap Slider (Home Gallery styling with arrows)
    const snapSlider = document.getElementById('sliderContainer');
    if (snapSlider) {
        // Double check auto play features if needed
        let isDown = false;
        let startX;
        let scrollLeft;

        // Scroll grab gestures on desktop
        snapSlider.addEventListener('mousedown', (e) => {
            isDown = true;
            snapSlider.classList.add('active');
            startX = e.pageX - snapSlider.offsetLeft;
            scrollLeft = snapSlider.scrollLeft;
        });
        snapSlider.addEventListener('mouseleave', () => {
            isDown = false;
            snapSlider.classList.remove('active');
        });
        snapSlider.addEventListener('mouseup', () => {
            isDown = false;
            snapSlider.classList.remove('active');
        });
        snapSlider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - snapSlider.offsetLeft;
            const walk = (x - startX) * 2; // Drag multiplier
            snapSlider.scrollLeft = scrollLeft - walk;
        });
    }

    // 4b. About Page Fading Hero Slider Logic
    const fadeSlider = document.getElementById('hero-slider');
    if (fadeSlider) {
        const slides = fadeSlider.querySelectorAll('.slider-item-fade');
        if (slides.length > 0) {
            let currentSlide = 0;
            let slideInterval;

            const nextSlide = () => {
                slides[currentSlide].classList.remove('active');
                slides[currentSlide].style.position = 'absolute';
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add('active');
                slides[currentSlide].style.position = 'relative';
            };

            const startAutoplay = () => {
                slideInterval = setInterval(nextSlide, 5000);
            };

            const stopAutoplay = () => {
                clearInterval(slideInterval);
            };

            // Start playing
            startAutoplay();

            // Hover interactions
            fadeSlider.addEventListener('mouseenter', stopAutoplay);
            fadeSlider.addEventListener('mouseleave', startAutoplay);
        }
    }
}

/* ========================================================================
   5. Dynamic Count-Up Animate IntersectionObserver
   ======================================================================== */
function initMetricCountUp() {
    const counterElements = document.querySelectorAll('.animate-metric-count');
    
    if (counterElements.length === 0) return;

    const countUpObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const endValString = target.getAttribute('data-target');
                
                // Parse float or int
                const isPlus = endValString.includes('+');
                const isPercent = endValString.includes('%');
                const isMillion = endValString.includes('M');
                
                // Extract bare digits
                const endVal = parseFloat(endValString.replace(/[^\d.]/g, ''));
                
                if (!isNaN(endVal)) {
                    animateDigits(target, 0, endVal, 2000, {
                        plus: isPlus,
                        percent: isPercent,
                        million: isMillion
                    });
                }
                
                // Disconnect to animate only once
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.1 });

    counterElements.forEach(el => countUpObserver.observe(el));
}

function animateDigits(obj, start, end, duration, options) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Linear or easeOut progress
        const currentVal = progress * (end - start) + start;
        
        let output = "";
        
        // Decimals handling (e.g. 2.5M sq ft)
        if (end % 1 !== 0) {
            output = currentVal.toFixed(1);
        } else {
            output = Math.floor(currentVal).toLocaleString();
        }

        // Apply suffix values
        if (options.million) output += "M";
        if (options.plus) output += "+";
        if (options.percent) output += "%";
        
        obj.innerHTML = output;
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

/* ========================================================================
   6. Viewport Scroll Reveal & Animate Entry Transitions
   ======================================================================== */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length === 0) return;

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Keep observing if you want reveal on every scroll, or unobserve
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before viewport center
    });

    revealElements.forEach(el => revealObserver.observe(el));
}

/* ========================================================================
   7. Sticky Navbar Scrolled Transition
   ======================================================================== */
function initStickyNav() {
    const navbar = document.getElementById('global-navbar');
    if (!navbar) return;

    const handleScroll = () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    // Execute on load just in case page starts scrolled
    handleScroll();
}

/* ========================================================================
   8. Public Helper APIs (Exposed globally for pages inline triggers)
   ======================================================================== */
window.ADMark = {
    // Manages Home tab switcher
    switchTab: function(sector, dataMap) {
        const content = document.getElementById('tab-content');
        if (!content || !dataMap[sector]) return;

        content.style.opacity = '0';
        
        setTimeout(() => {
            const data = dataMap[sector];
            document.getElementById('tab-title').innerText = data.title;
            document.getElementById('tab-desc').innerText = data.desc;
            
            // If image is supplied, swap src safely
            const tabImg = document.getElementById('tab-img');
            if (tabImg && data.imgUrl) {
                tabImg.setAttribute('src', data.imgUrl);
            }

            // Update active states on tab elements
            const btns = document.querySelectorAll('.tab-btn');
            btns.forEach(btn => {
                btn.classList.remove('bg-safety-yellow', 'text-port-black');
                btn.classList.add('text-white');
                if (btn.getAttribute('onclick').includes(sector)) {
                    btn.classList.add('bg-safety-yellow', 'text-port-black');
                    btn.classList.remove('text-white');
                }
            });

            content.style.opacity = '1';
        }, 300);
    },

    // Handles FAQ Accordion expands
    toggleFaq: function(btn) {
        const faqCard = btn.closest('.faq-card');
        const ans = faqCard.querySelector('.faq-ans');
        
        if (!faqCard || !ans) return;

        const isOpen = faqCard.classList.contains('open');

        // Close all cards in container
        document.querySelectorAll('.faq-card').forEach(card => {
            card.classList.remove('open');
            const a = card.querySelector('.faq-ans');
            if (a) a.classList.remove('open');
        });

        if (!isOpen) {
            faqCard.classList.add('open');
            ans.classList.add('open');
        }
    },

    // Auto-initiator for image carousels (called from respective pages)
    startCarousels: function() {
        initImageSliders();
    },

    // Auto-initiator for count-up observers
    startCountUps: function() {
        initMetricCountUp();
    },

    // Triggers progress fill animators
    animateProgress: function() {
        initProgressBars();
    }
};

function initProgressBars() {
    const progressFills = document.querySelectorAll('.progress-fill');
    if (progressFills.length === 0) return;
    
    const progressObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const percent = fill.getAttribute('data-percent') || '0%';
                fill.style.width = percent;
                observer.unobserve(fill);
            }
        });
    }, { threshold: 0.1 });

    progressFills.forEach(f => progressObserver.observe(f));
}
