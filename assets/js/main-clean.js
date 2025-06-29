/**
 * DR. FELIPE COSTA - MICROTRANSPLANTE CAPILAR
 * JavaScript LIMPIO Y FUNCIONAL
 */

// VARIABLES GLOBALES
let isLoaded = false;
let isMobileMenuOpen = false;

// =============================================
// 1. LOADER FUNCTIONALITY
// =============================================
function initLoader() {
    const loader = document.getElementById('loading-screen');
    if (!loader) {
        forceContentVisibility();
        isLoaded = true;
        return;
    }
    
    // Configuración inicial
    loader.style.display = 'flex';
    loader.style.opacity = '1';
    loader.style.visibility = 'visible';
    document.body.style.overflow = 'hidden';
    
    function hideLoader() {
        if (loader) {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
            
            setTimeout(() => {
                if (loader) {
                    loader.style.display = 'none';
                    loader.classList.add('hidden');
                }
                document.body.style.overflow = 'auto';
                document.body.classList.add('content-loaded');
                isLoaded = true;
                forceContentVisibility();
            }, 300);
        }
    }
    
    // Múltiples formas de ocultar el loader
    setTimeout(hideLoader, 1200);
    
    if (document.readyState === 'complete') {
        setTimeout(hideLoader, 500);
    } else {
        window.addEventListener('load', () => {
            setTimeout(hideLoader, 300);
        });
    }
    
    // Fallbacks
    setTimeout(() => {
        if (!isLoaded) {
            hideLoader();
        }
    }, 2500);
    
    loader.addEventListener('click', hideLoader);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
            if (!isLoaded) {
                hideLoader();
            }
        }
    });
}

// =============================================
// 2. CONTENT VISIBILITY
// =============================================
function forceContentVisibility() {
    const mainElements = [
        'section', '.hero-section', '.container', 'header', 'footer',
        '.top-contact-bar', '.header-nav', 'main', 'nav'
    ];
    
    mainElements.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.style.opacity = '1';
            el.style.visibility = 'visible';
            el.style.display = el.style.display || 'block';
        });
    });
    
    forceFloatingButtons();
}

// =============================================
// 3. FLOATING BUTTONS
// =============================================
function forceFloatingButtons() {
    // WhatsApp Button
    const whatsappBtn = document.getElementById('whatsapp-float');
    if (whatsappBtn) {
        whatsappBtn.style.position = 'fixed';
        whatsappBtn.style.bottom = '1.5rem';
        whatsappBtn.style.right = '1.5rem';
        whatsappBtn.style.width = '4rem';
        whatsappBtn.style.height = '4rem';
        whatsappBtn.style.background = '#25d366';
        whatsappBtn.style.color = 'white';
        whatsappBtn.style.borderRadius = '50%';
        whatsappBtn.style.display = 'flex';
        whatsappBtn.style.alignItems = 'center';
        whatsappBtn.style.justifyContent = 'center';
        whatsappBtn.style.fontSize = '1.5rem';
        whatsappBtn.style.zIndex = '9999';
        whatsappBtn.style.boxShadow = '0 4px 20px rgba(37, 211, 102, 0.5)';
        whatsappBtn.style.transition = 'all 0.3s ease';
        whatsappBtn.style.textDecoration = 'none';
        whatsappBtn.style.opacity = '1';
        whatsappBtn.style.visibility = 'visible';
        whatsappBtn.style.pointerEvents = 'auto';
    }
    
    // Back to Top Button
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        backToTopBtn.style.position = 'fixed';
        backToTopBtn.style.bottom = '6rem';
        backToTopBtn.style.right = '1.5rem';
        backToTopBtn.style.width = '3.5rem';
        backToTopBtn.style.height = '3.5rem';
        backToTopBtn.style.background = '#4a5f74';
        backToTopBtn.style.color = 'white';
        backToTopBtn.style.borderRadius = '50%';
        backToTopBtn.style.display = 'flex';
        backToTopBtn.style.alignItems = 'center';
        backToTopBtn.style.justifyContent = 'center';
        backToTopBtn.style.fontSize = '1.2rem';
        backToTopBtn.style.zIndex = '9999';
        backToTopBtn.style.border = 'none';
        backToTopBtn.style.cursor = 'pointer';
        backToTopBtn.style.boxShadow = '0 4px 15px rgba(74, 95, 116, 0.4)';
        backToTopBtn.style.transition = 'all 0.3s ease';
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.visibility = 'visible';
        backToTopBtn.style.pointerEvents = 'auto';
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// =============================================
// 4. MOBILE MENU
// =============================================
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const links = document.querySelectorAll('.mobile-menu-link');
    
    if (!btn || !menu) {
        return;
    }
    
    // Configuración inicial
    menu.style.position = 'fixed';
    menu.style.top = '0';
    menu.style.left = '0';
    menu.style.width = '100vw';
    menu.style.height = '100vh';
    menu.style.background = 'rgba(255, 255, 255, 0.98)';
    menu.style.backdropFilter = 'blur(15px)';
    menu.style.webkitBackdropFilter = 'blur(15px)';
    menu.style.zIndex = '9999';
    menu.style.display = 'flex';
    menu.style.alignItems = 'center';
    menu.style.justifyContent = 'center';
    menu.style.transition = 'transform 0.3s ease';
    menu.style.transform = 'translateX(100%)';
    menu.style.visibility = 'visible';
    menu.style.opacity = '1';
    
    isMobileMenuOpen = false;
    
    // Toggle del menú
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        if (isMobileMenuOpen) {
            menu.style.transform = 'translateX(100%)';
            document.body.style.overflow = 'auto';
            isMobileMenuOpen = false;
        } else {
            menu.style.transform = 'translateX(0)';
            document.body.style.overflow = 'hidden';
            isMobileMenuOpen = true;
        }
    });
    
    // Cerrar al hacer clic en enlaces
    links.forEach((link) => {
        link.addEventListener('click', function() {
            menu.style.transform = 'translateX(100%)';
            document.body.style.overflow = 'auto';
            isMobileMenuOpen = false;
        });
    });
    
    // Cerrar con escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isMobileMenuOpen) {
            menu.style.transform = 'translateX(100%)';
            document.body.style.overflow = 'auto';
            isMobileMenuOpen = false;
        }
    });
}

// =============================================
// 5. FAQ - FUNCIONAL Y LIMPIO
// =============================================
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length === 0) {
        return;
    }
    
    faqItems.forEach((item, index) => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');
        
        if (!question || !answer || !icon) {
            return;
        }
        
        // Configuración inicial del answer
        answer.style.display = 'none';
        answer.style.opacity = '0';
        answer.style.maxHeight = '0';
        answer.style.overflow = 'hidden';
        answer.style.transition = 'all 0.3s ease';
        answer.style.background = '#f8f9fa';
        answer.style.marginTop = '0.5rem';
        answer.style.borderRadius = '0.5rem';
        answer.style.border = '1px solid #e5e7eb';
        answer.style.padding = '1.5rem';
        answer.style.lineHeight = '1.6';
        answer.style.color = '#6b7280';
        answer.style.fontSize = '1rem';
        
        // Configuración inicial del icono
        icon.style.transform = 'rotate(0deg)';
        icon.style.transition = 'transform 0.3s ease';
        
        // Agregar data attribute para tracking
        item.setAttribute('data-faq-index', index);
        answer.setAttribute('data-faq-open', 'false');
        
        // Event listener para el click
        question.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isCurrentlyOpen = answer.getAttribute('data-faq-open') === 'true';
            
            // Cerrar todas las respuestas primero
            faqItems.forEach((otherItem) => {
                const otherAnswer = otherItem.querySelector('.faq-answer');
                const otherIcon = otherItem.querySelector('.faq-icon');
                
                if (otherAnswer && otherIcon) {
                    otherAnswer.style.display = 'none';
                    otherAnswer.style.opacity = '0';
                    otherAnswer.style.maxHeight = '0';
                    otherAnswer.setAttribute('data-faq-open', 'false');
                    otherIcon.style.transform = 'rotate(0deg)';
                }
            });
            
            // Si la pregunta no estaba abierta, abrirla
            if (!isCurrentlyOpen) {
                answer.style.display = 'block';
                answer.style.maxHeight = '500px';
                answer.setAttribute('data-faq-open', 'true');
                
                // Delay para la animación suave
                setTimeout(() => {
                    answer.style.opacity = '1';
                }, 50);
                
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
}

// =============================================
// 6. GALLERY OVERLAYS
// =============================================
function initGalleryOverlays() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (galleryItems.length === 0) {
        return;
    }
    
    galleryItems.forEach((item) => {
        const overlay = item.querySelector('.gallery-overlay');
        
        if (!overlay) {
            return;
        }
        
        // Configuración inicial
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.right = '0';
        overlay.style.bottom = '0';
        overlay.style.background = 'rgba(74, 95, 116, 0.9)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
        overlay.style.transition = 'all 0.3s ease';
        overlay.style.backdropFilter = 'blur(5px)';
        overlay.style.zIndex = '10';
        
        // Event listeners
        item.addEventListener('mouseenter', function() {
            overlay.style.opacity = '1';
            overlay.style.visibility = 'visible';
        });
        
        item.addEventListener('mouseleave', function() {
            overlay.style.opacity = '0';
            overlay.style.visibility = 'hidden';
        });
    });
}

// =============================================
// 7. STICKY HEADER
// =============================================
function initStickyHeader() {
    const header = document.querySelector('.header-nav');
    const topBar = document.querySelector('.top-contact-bar');
    
    if (!header || !topBar) {
        return;
    }
    
    function handleScroll() {
        const scrolled = window.scrollY > 50;
        
        if (scrolled) {
            header.classList.add('scrolled');
            topBar.style.transform = 'translateY(-100%)';
        } else {
            header.classList.remove('scrolled');
            topBar.style.transform = 'translateY(0)';
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
}

// =============================================
// 8. SMOOTH SCROLL
// =============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// =============================================
// 9. MAIN INITIALIZATION
// =============================================
function initializeApp() {
    initLoader();
    
    setTimeout(() => {
        initMobileMenu();
        initFAQ();
        initGalleryOverlays();
        initStickyHeader();
        initSmoothScroll();
        forceFloatingButtons();
        
        // Forzar visibilidad periódicamente
        let count = 0;
        const interval = setInterval(() => {
            forceContentVisibility();
            forceFloatingButtons();
            count++;
            
            if (count >= 3) {
                clearInterval(interval);
            }
        }, 1000);
    }, 500);
}

// =============================================
// EVENT LISTENERS
// =============================================
document.addEventListener('DOMContentLoaded', initializeApp);

window.addEventListener('load', () => {
    setTimeout(() => {
        forceContentVisibility();
        forceFloatingButtons();
    }, 500);
});

// Fallback
setTimeout(() => {
    if (!isLoaded) {
        initializeApp();
    }
}, 3000);

// Fallbacks adicionales para el loader
setTimeout(() => {
    const loader = document.getElementById('loading-screen');
    if (loader && loader.style.display !== 'none') {
        loader.style.display = 'none';
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        document.body.style.overflow = 'auto';
        isLoaded = true;
        forceContentVisibility();
    }
}, 3000);

let fallbackCount = 0;
const fallbackInterval = setInterval(() => {
    const loader = document.getElementById('loading-screen');
    if (loader && loader.style.display !== 'none') {
        loader.style.display = 'none';
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        document.body.style.overflow = 'auto';
        isLoaded = true;
        forceContentVisibility();
        clearInterval(fallbackInterval);
    }
    
    fallbackCount++;
    if (fallbackCount >= 5) {
        clearInterval(fallbackInterval);
    }
}, 2000);
