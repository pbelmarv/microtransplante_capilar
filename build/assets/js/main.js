// =============================================
// SOLUTION SIMPLE QUE FUNCIONA
// =============================================

document.addEventListener("DOMContentLoaded", function () {
    console.log("Inicializando página...");

    // 1. LOADER
    initLoader();

    // 2. MOBILE MENU
    initMobileMenu();

    // 3. FAQ
    initFAQ();

    // 4. STICKY HEADER
    initStickyHeader();

    // 5. FLOATING BUTTONS
    initBackToTop();

    // 6. SMOOTH SCROLL
    initSmoothScroll();
});

// =============================================
// 1. LOADER
// =============================================
function initLoader() {
    const loader = document.getElementById("loading-screen");
    if (loader) {
        // Ocultar loader después de 2 segundos
        setTimeout(() => {
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
            }, 500);
        }, 2000);

        // También permitir click para saltar
        loader.addEventListener("click", () => {
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
            }, 300);
        });
    }
}

// =============================================
// 2. MOBILE MENU
// =============================================
function initMobileMenu() {
    const btn = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");
    const links = document.querySelectorAll(".mobile-menu-link");

    if (!btn || !menu) return;

    let isOpen = false;

    // Toggle del menú
    btn.addEventListener("click", function (e) {
        e.preventDefault();

        if (isOpen) {
            // Cerrar
            menu.classList.remove("open");
            menu.classList.add("closed");
            document.body.style.overflow = "auto";
            isOpen = false;
        } else {
            // Abrir
            menu.classList.remove("closed");
            menu.classList.add("open");
            document.body.style.overflow = "hidden";
            isOpen = true;
        }
    });

    // Cerrar al hacer click en los links
    links.forEach((link) => {
        link.addEventListener("click", () => {
            menu.classList.remove("open");
            menu.classList.add("closed");
            document.body.style.overflow = "auto";
            isOpen = false;
        });
    });
}

// =============================================
// 3. FAQ
// =============================================
function initFAQ() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const icon = item.querySelector(".faq-icon");

        if (!question || !answer || !icon) return;

        // Remover cualquier estado previo
        answer.classList.remove('show');
        icon.classList.remove('open');

        question.addEventListener("click", function () {
            // Cerrar todas las respuestas
            document.querySelectorAll('.faq-answer.show').forEach(a => a.classList.remove('show'));
            document.querySelectorAll('.faq-icon.open').forEach(i => i.classList.remove('open'));

            // Abrir la actual
            answer.classList.add('show');
            icon.classList.add('open');
        });
    });
}

// =============================================
// 4. STICKY HEADER
// =============================================
function initStickyHeader() {
    const header = document.querySelector(".header-nav");
    const contactBar = document.querySelector(".top-contact-bar");

    if (!header || !contactBar) return;

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            header.classList.add("scrolled");
            contactBar.style.transform = "translateY(-100%)";
        } else {
            header.classList.remove("scrolled");
            contactBar.style.transform = "translateY(0)";
        }
    });
}

// =============================================
// 5. FLOATING BUTTONS
// =============================================
function initBackToTop() {
    const backToTopBtn = document.querySelector("#back-to-top");
    const divbtt = document.querySelector("#div-back-to-top");

    if (backToTopBtn) {
        // Estado inicial: oculto
        backToTopBtn.style.opacity = "0";
        divbtt.classList.add("hidden");
        backToTopBtn.style.transform = "translateY(20px)";

        // Evento de scroll
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                // Mostrar cuando el usuario ha scrolleado más de 400px
                backToTopBtn.style.opacity = "1";
                backToTopBtn.style.visibility = "visible";
                divbtt.classList.remove("hidden");
                divbtt.classList.add("block");
                backToTopBtn.style.transform = "translateY(0)";
            } else {
                // Ocultar cuando está cerca del top
                backToTopBtn.style.opacity = "0";
                divbtt.classList.remove("block");
                divbtt.classList.add("hidden");
                backToTopBtn.style.transform = "translateY(20px)";
            }
        });

        // Click para volver arriba
        backToTopBtn.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
    }
}

// =============================================
// 6. SMOOTH SCROLL
// =============================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = 120; // Altura del header
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth",
                });
            }
        });
    });
}
