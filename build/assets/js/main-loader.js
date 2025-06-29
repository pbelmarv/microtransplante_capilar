/**
 * DR. FELIPE COSTA - MICROTRANSPLANTE CAPILAR
 * JavaScript FINAL ULTRA ROBUSTO - Versión Definitiva
 */

console.log('🚀 INICIANDO DR. FELIPE COSTA WEBSITE - VERSIÓN DEFINITIVA');

// VARIABLES GLOBALES
let isLoaded = false;
let isMobileMenuOpen = false;

// 1. LOADER FUNCTIONALITY
function initLoader() {
    console.log('⏳ Inicializando loader...');
    
    const loader = document.getElementById('loading-screen');
    if (!loader) {
        console.warn('⚠️ Loading screen no encontrado');
        forceContentVisibility();
        isLoaded = true;
        return;
    }
    
    // Asegurar que el loader sea visible inicialmente
    loader.style.display = 'flex';
    loader.style.opacity = '1';
    loader.style.visibility = 'visible';
    
    // Ocultar contenido principal mientras carga
    document.body.style.overflow = 'hidden';
    
    function hideLoader() {
        console.log('🎯 Ocultando loader...');
        
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
                
                // Forzar visibilidad del contenido
                forceContentVisibility();
                
                console.log('✅ Loader ocultado y contenido visible');
            }, 300);
        }
    }
    
    // MÚLTIPLES FALLBACKS PARA OCULTAR EL LOADER
    
    // 1. Después de tiempo corto
    setTimeout(hideLoader, 1200);
    
    // 2. Cuando todo esté cargado
    if (document.readyState === 'complete') {
        setTimeout(hideLoader, 500);
    } else {
        window.addEventListener('load', () => {
            setTimeout(hideLoader, 300);
        });
    }
    
    // 3. Fallback de emergencia
    setTimeout(() => {
        if (!isLoaded) {
            console.log('🚨 FALLBACK DE EMERGENCIA - Forzando ocultación del loader');
            hideLoader();
        }
    }, 2500);
    
    // 4. Click para saltarse
    loader.addEventListener('click', () => {
        console.log('🖱️ Click en loader - ocultando');
        hideLoader();
    });
    
    // 5. Fallback con tecla
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
            if (!isLoaded) {
                console.log('⌨️ Tecla presionada - ocultando loader');
                hideLoader();
            }
        }
    });
}

// 2. FORZAR VISIBILIDAD DEL CONTENIDO
function forceContentVisibility() {
    console.log('👁️ Forzando visibilidad del contenido...');
    
    // Elementos principales
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
    
    // Forzar visibilidad de botones flotantes
    forceFloatingButtons();
    
    console.log('✅ Contenido principal forzado a ser visible');
}

// 3. BOTONES FLOTANTES - ULTRA ROBUSTO
function forceFloatingButtons() {
    console.log('🔘 Forzando visibilidad de botones flotantes...');
    
    // WhatsApp Button
    const whatsappBtn = document.getElementById('whatsapp-float');
    if (whatsappBtn) {
        console.log('📱 Configurando botón WhatsApp...');
        
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
        
        console.log('✅ Botón WhatsApp configurado');
    } else {
        console.error('❌ Botón WhatsApp no encontrado');
    }
    
    // Back to Top Button
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        console.log('⬆️ Configurando botón Back to Top...');
        
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
        
        // Click handler
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        console.log('✅ Botón Back to Top configurado');
    } else {
        console.error('❌ Botón Back to Top no encontrado');
    }
}

// 4. MENÚ MÓVIL/TABLET - ULTRA ROBUSTO
function initMobileMenu() {
    console.log('📱 Inicializando menú móvil/tablet...');
    
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const links = document.querySelectorAll('.mobile-menu-link');
    
    console.log('📱 Elementos encontrados:', {
        btn: !!btn,
        menu: !!menu,
        linksCount: links.length
    });
    
    if (!btn) {
        console.error('❌ Botón del menú móvil no encontrado');
        return;
    }
    
    if (!menu) {
        console.error('❌ Menú móvil no encontrado');
        return;
    }
    
    // Configuración inicial ULTRA FORZADA del menú
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
    
    // Estado inicial
    isMobileMenuOpen = false;
    menu.classList.add('closed');
    menu.classList.remove('open');
    
    // Configurar enlaces del menú
    links.forEach((link, index) => {
        link.style.display = 'block';
        link.style.fontSize = '2rem';
        link.style.color = '#4a5f74';
        link.style.textDecoration = 'none';
        link.style.fontWeight = '500';
        link.style.margin = '1rem 0';
        link.style.padding = '0.5rem 1rem';
        link.style.borderRadius = '0.5rem';
        link.style.transition = 'all 0.3s ease';
        console.log(`📱 Link ${index} configurado:`, link.textContent);
    });
    
    // Toggle del menú
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        console.log('🔄 Toggle menú móvil - Estado actual:', isMobileMenuOpen);
        
        if (isMobileMenuOpen) {
            // Cerrar
            menu.style.transform = 'translateX(100%)';
            menu.classList.remove('open');
            menu.classList.add('closed');
            document.body.style.overflow = 'auto';
            isMobileMenuOpen = false;
            console.log('📴 Menú cerrado');
        } else {
            // Abrir
            menu.style.transform = 'translateX(0)';
            menu.classList.remove('closed');
            menu.classList.add('open');
            document.body.style.overflow = 'hidden';
            isMobileMenuOpen = true;
            console.log('📖 Menú abierto');
        }
    });
    
    // Cerrar al hacer clic en enlaces
    links.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            console.log(`🔗 Click en enlace ${index}: ${link.textContent}`);
            menu.style.transform = 'translateX(100%)';
            menu.classList.remove('open');
            menu.classList.add('closed');
            document.body.style.overflow = 'auto';
            isMobileMenuOpen = false;
            console.log('🔗 Menú cerrado por enlace');
        });
    });
    
    // Cerrar con escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isMobileMenuOpen) {
            menu.style.transform = 'translateX(100%)';
            menu.classList.remove('open');
            menu.classList.add('closed');
            document.body.style.overflow = 'auto';
            isMobileMenuOpen = false;
            console.log('⌨️ Menú cerrado con ESC');
        }
    });
    
    console.log('✅ Menú móvil/tablet inicializado correctamente');
}

// 5. FAQ - ULTRA ROBUSTO
function initFAQ() {
    console.log('❓ Inicializando FAQ...');
    
    const faqItems = document.querySelectorAll('.faq-item');
    console.log('❓ FAQ items encontrados:', faqItems.length);
    
    if (faqItems.length === 0) {
        console.error('❌ No se encontraron elementos FAQ');
        return;
    }
    
    faqItems.forEach((item, index) => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');
        
        if (!question || !answer || !icon) {
            console.warn(`⚠️ FAQ ${index}: elementos faltantes`);
            return;
        }
        
        // Configuración inicial forzada
        answer.style.display = 'none';
        answer.style.opacity = '0';
        answer.style.padding = '1.5rem';
        answer.style.background = '#f8f9fa';
        answer.style.borderRadius = '0.5rem';
        answer.style.marginTop = '0.5rem';
        answer.style.lineHeight = '1.6';
        answer.style.border = '1px solid #e5e7eb';
        answer.style.transition = 'all 0.3s ease';
        
        icon.style.transition = 'transform 0.3s ease';
        icon.style.transform = 'rotate(0deg)';
        icon.style.fontSize = '1.2rem';
        icon.style.color = '#4a5f74';
        
        question.style.cursor = 'pointer';
        question.style.width = '100%';
        question.style.padding = '1.5rem';
        question.style.background = 'white';
        question.style.border = '1px solid #e5e7eb';
        question.style.borderRadius = '0.75rem';
        question.style.display = 'flex';
        question.style.justifyContent = 'space-between';
        question.style.alignItems = 'center';
        question.style.transition = 'all 0.3s ease';
        question.style.textAlign = 'left';
        
        // Hover effect para la pregunta
        question.addEventListener('mouseenter', () => {
            question.style.background = '#f8f9fa';
            question.style.borderColor = '#4a5f74';
        });
        
        question.addEventListener('mouseleave', () => {
            question.style.background = 'white';
            question.style.borderColor = '#e5e7eb';
        });
        
        // Event listener ultra robusto
        question.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log(`🔄 FAQ ${index}: click detectado`);
            
            // Cerrar todos los otros FAQs
            faqItems.forEach((otherItem, otherIndex) => {
                if (otherIndex !== index) {
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherIcon = otherItem.querySelector('.faq-icon');
                    
                    if (otherAnswer && otherIcon) {
                        otherAnswer.style.display = 'none';
                        otherAnswer.style.opacity = '0';
                        otherIcon.style.transform = 'rotate(0deg)';
                    }
                }
            });
            
            // Toggle del FAQ actual
            const isOpen = answer.style.display === 'block';
            
            if (isOpen) {
                // Cerrar
                answer.style.opacity = '0';
                setTimeout(() => {
                    answer.style.display = 'none';
                }, 300);
                icon.style.transform = 'rotate(0deg)';
                console.log(`📝 FAQ ${index}: cerrado`);
            } else {
                // Abrir
                answer.style.display = 'block';
                setTimeout(() => {
                    answer.style.opacity = '1';
                }, 10);
                icon.style.transform = 'rotate(180deg)';
                console.log(`📖 FAQ ${index}: abierto`);
            }
        });
        
        console.log(`✅ FAQ ${index} configurado correctamente`);
    });
    
    console.log('✅ FAQ completamente inicializado');
}

// =============================================
// 6. HEADER STICKY
// =============================================
function initStickyHeader() {
    console.log('📌 Inicializando header sticky...');
    
    const header = document.querySelector('.header-nav');
    const topBar = document.querySelector('.top-contact-bar');
    
    if (!header || !topBar) {
        console.warn('⚠️ Header o top bar no encontrados');
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
    handleScroll(); // Ejecutar una vez al inicio
    
    console.log('✅ Header sticky inicializado');
}

// =============================================
// 7. SMOOTH SCROLL
// =============================================
function initSmoothScroll() {
    console.log('🔄 Inicializando smooth scroll...');
    
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
    
    console.log('✅ Smooth scroll inicializado');
}

// =============================================
// 8. INICIALIZACIÓN PRINCIPAL
// =============================================
function initializeApp() {
    console.log('🎯 Inicializando aplicación completa...');
    
    // Primero el loader
    initLoader();
    
    // Después de un pequeño delay, inicializar todo lo demás
    setTimeout(() => {
        initMobileMenu();
        initFAQ();
        initStickyHeader();
        initSmoothScroll();
        forceFloatingButtons();
        
        // Forzar visibilidad cada segundo durante los primeros 5 segundos
        let forcedVisibilityCount = 0;
        const forceInterval = setInterval(() => {
            forceContentVisibility();
            forceFloatingButtons();
            forcedVisibilityCount++;
            
            if (forcedVisibilityCount >= 5) {
                clearInterval(forceInterval);
            }
        }, 1000);
        
        console.log('✅ Aplicación completamente inicializada');
    }, 100);
}

// =============================================
// 9. EVENT LISTENERS PRINCIPALES
// =============================================
document.addEventListener('DOMContentLoaded', initializeApp);

window.addEventListener('load', () => {
    console.log('📄 Página completamente cargada');
    setTimeout(() => {
        forceContentVisibility();
        forceFloatingButtons();
    }, 500);
});

// Fallback de seguridad
setTimeout(() => {
    if (!isLoaded) {
        console.log('🚨 Fallback de seguridad activado');
        initializeApp();
    }
}, 3000);

// =============================================
// FALLBACK DE EMERGENCIA PARA EL LOADER
// =============================================
setTimeout(() => {
    const loader = document.getElementById('loading-screen');
    if (loader && loader.style.display !== 'none') {
        console.log('🚨 FALLBACK CRÍTICO - Ocultando loader por fuerza');
        loader.style.display = 'none';
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        document.body.style.overflow = 'auto';
        isLoaded = true;
        forceContentVisibility();
    }
}, 3000);

// FALLBACK ADICIONAL - cada 2 segundos durante 10 segundos
let fallbackCount = 0;
const fallbackInterval = setInterval(() => {
    const loader = document.getElementById('loading-screen');
    if (loader && loader.style.display !== 'none') {
        console.log(`🚨 FALLBACK ${fallbackCount + 1} - Forzando ocultación`);
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

console.log('✅ Script principal cargado correctamente');
