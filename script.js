document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Scroll Animations (Intersection Observer)
    const fadeElements = document.querySelectorAll('.fade-in');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => scrollObserver.observe(el));

    // 3. Mobile Navigation Menu Toggle
    const header = document.querySelector('.header');
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-btn');

    const toggleMenu = (open) => {
        if (open) {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    if (mobileNavToggle) mobileNavToggle.addEventListener('click', () => toggleMenu(true));
    if (mobileMenuClose) mobileMenuClose.addEventListener('click', () => toggleMenu(false));
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });

    // Header scroll background effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '8px 0';
            header.style.backgroundColor = 'rgba(15, 8, 6, 0.9)';
        } else {
            header.style.padding = '0';
            header.style.backgroundColor = 'rgba(15, 8, 6, 0.75)';
        }
    });

    // 4. Interactive Mobile Simulator & Formats Showcase
    const formatData = {
        video: {
            title: "3 Videos Verticales por Semana",
            desc: "Los reels y videos verticales son ideales para la viralidad orgánica. Capturamos la esencia en alta definición y con sonido ambiental (ASMR) para activar las papilas gustativas de tu público.",
            examples: [
                "<strong>El Ritual del Filtrado:</strong> Vertido de agua en cámara lenta sobre café en V60 con iluminación cálida.",
                "<strong>ASMR Crujiente:</strong> Corte de un croissant recién horneado junto a un Flat White humeante.",
                "<strong>Detrás de Barra:</strong> El barista diseñando un cisne perfecto en el arte latte de un capuchino."
            ],
            caption: "El arte del vertido lento. V60 preparado al momento con granos de origen Chiapas. ☕✨ ¿Ya lo probaste? #CafeDeEspecialidad #LatteArt #Foodies",
            mediaHtml: `
                <div class="video-overlay-play">
                    <i data-lucide="play"></i>
                </div>
                <div class="mock-video-placeholder" style="width: 100%; height: 100%; background: linear-gradient(rgba(18,10,7,0.4), rgba(18,10,7,0.7)), url('hero_coffee_shop.png') center/cover no-repeat; display: flex; align-items: center; justify-content: center; position: relative;">
                    <div style="text-align: center; color: white; padding: 20px; text-shadow: 0 2px 10px rgba(0,0,0,0.5)">
                        <p style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 5px; color: #D4A373;">Vista Previa Video</p>
                        <p style="font-size: 0.95rem; font-weight: 600;">El vertido perfecto de un espresso doble</p>
                    </div>
                </div>
            `
        },
        carousel: {
            title: "1 Carrusel de Fotos por Semana",
            desc: "El formato carrusel educa a tu audiencia, aumenta el tiempo de interacción con tu perfil y ayuda a guardar la publicación para futuras visitas.",
            examples: [
                "<strong>Maridajes ideales:</strong> Desliza para conocer qué pan dulce combina mejor con cada tipo de extracción.",
                "<strong>Nuestros Orígenes:</strong> Historia y fotos de las familias productoras que cosechan nuestro café.",
                "<strong>Guía del Café:</strong> Diferencias rápidas entre un Latte, un Capuchino y un Flat White."
            ],
            caption: "Guía rápida: ¿Flat White, Latte o Capuccino? Desliza para aprender a diferenciarlos y encontrar tu favorito de esta tarde. 👉📱 #TipsCafe #AmantesDelCafe",
            mediaHtml: `
                <div class="carousel-arrow-btn prev"><i data-lucide="chevron-left"></i></div>
                <div class="carousel-arrow-btn next"><i data-lucide="chevron-right"></i></div>
                <div class="carousel-dots">
                    <span class="carousel-dot active"></span>
                    <span class="carousel-dot"></span>
                    <span class="carousel-dot"></span>
                </div>
                <div id="carousel-slide-content" style="width: 100%; height: 100%; background: linear-gradient(45deg, #2c160e, #3e271d); display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 24px; text-align: center; color: #fff;">
                    <i data-lucide="help-circle" style="width: 32px; height: 32px; color: #D4A373; margin-bottom: 12px;"></i>
                    <h4 style="font-family: 'Outfit'; font-size: 1.1rem; margin-bottom: 8px;">Slide 1: ¿Conoces la diferencia?</h4>
                    <p style="font-size: 0.75rem; color: #D3C6C0;">Muchos confunden la cantidad de espuma y espresso. Desliza para ver la guía de preparación.</p>
                </div>
            `,
            slides: [
                {
                    title: "Slide 1: ¿Conoces la diferencia?",
                    desc: "Muchos confunden la cantidad de espuma y espresso. Desliza para ver la guía de preparación.",
                    icon: "help-circle"
                },
                {
                    title: "Slide 2: Latte vs. Flat White",
                    desc: "El Flat White tiene una capa muy fina de microespuma y sabor a café más intenso.",
                    icon: "info"
                },
                {
                    title: "Slide 3: Capuccino Ideal",
                    desc: "Equilibrio perfecto de 1/3 de espresso, 1/3 de leche vaporizada y 1/3 de espuma de leche.",
                    icon: "coffee"
                }
            ]
        },
        image: {
            title: "1 Imagen Única por Semana",
            desc: "Fotografías estéticas o piezas de diseño gráfico premium destinadas a lanzamientos de nuevos productos, promociones puntuales o eventos especiales.",
            examples: [
                "<strong>Promoción:</strong> Anuncio estético de '2x1 en Cold Brew los días jueves de calor'.",
                "<strong>Lifestyle:</strong> Un cliente leyendo un libro en nuestra mesa junto a la ventana.",
                "<strong>Novedad:</strong> Presentación oficial de la nueva tarta de zanahoria con frosting de queso."
            ],
            caption: "El rincón perfecto para tu mañana de home office. Conexión rápida a internet, aire fresco y el mejor café de la ciudad. 💻☕ #HomeOffice #Cafeteria #Aesthetic",
            mediaHtml: `
                <div style="width: 100%; height: 100%; background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url('hero_coffee_shop.png') center/cover no-repeat; display: flex; align-items: flex-end; padding: 16px;">
                    <div style="background: rgba(18,10,7,0.85); backdrop-filter: blur(8px); padding: 8px 12px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.1); width: 100%;">
                        <span style="font-size: 0.6rem; color: #D4A373; font-weight: 700; text-transform: uppercase;">Nuevo Lanzamiento</span>
                        <p style="font-size: 0.8rem; color: #fff; font-weight: 600;">Panadería artesanal horneada a diario</p>
                    </div>
                </div>
            `
        }
    };

    const tabButtons = document.querySelectorAll('.format-tab-btn');
    const mockMediaArea = document.getElementById('mock-media-area');
    const mockCaptionText = document.getElementById('mock-caption-text');
    const formatInfoTitle = document.getElementById('format-info-title');
    const formatInfoDesc = document.getElementById('format-info-desc');
    const formatExamplesUl = document.getElementById('format-examples-ul');

    const updateSimulator = (formatKey) => {
        const data = formatData[formatKey];
        if (!data) return;

        // Active button styling
        tabButtons.forEach(btn => {
            if (btn.getAttribute('data-format') === formatKey) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update Phone Mockup Media
        mockMediaArea.innerHTML = data.mediaHtml;
        mockCaptionText.textContent = data.caption;

        // Re-initialize icons inside dynamic HTML
        if (typeof lucide !== 'undefined') {
            lucide.createIcons({
                attrs: {
                    class: 'action-btn'
                },
                nameAttr: 'data-lucide',
                node: mockMediaArea
            });
        }

        // Update Side Info Card
        formatInfoTitle.textContent = data.title;
        formatInfoDesc.textContent = data.desc;
        
        formatExamplesUl.innerHTML = '';
        data.examples.forEach(ex => {
            const li = document.createElement('li');
            li.innerHTML = ex;
            formatExamplesUl.appendChild(li);
        });

        // Setup Carousel interaction if active
        if (formatKey === 'carousel') {
            setupCarouselLogic(data);
        }
    };

    const setupCarouselLogic = (carouselData) => {
        let currentSlide = 0;
        const slideContent = document.getElementById('carousel-slide-content');
        const prevBtn = mockMediaArea.querySelector('.carousel-arrow-btn.prev');
        const nextBtn = mockMediaArea.querySelector('.carousel-arrow-btn.next');
        const dots = mockMediaArea.querySelectorAll('.carousel-dot');

        const updateSlide = () => {
            const slide = carouselData.slides[currentSlide];
            dots.forEach((dot, index) => {
                if (index === currentSlide) dot.classList.add('active');
                else dot.classList.remove('active');
            });

            slideContent.innerHTML = `
                <i data-lucide="${slide.icon}" style="width: 32px; height: 32px; color: #D4A373; margin-bottom: 12px;"></i>
                <h4 style="font-family: 'Outfit'; font-size: 1.1rem; margin-bottom: 8px;">${slide.title}</h4>
                <p style="font-size: 0.75rem; color: #D3C6C0;">${slide.desc}</p>
            `;

            if (typeof lucide !== 'undefined') {
                lucide.createIcons({
                    node: slideContent
                });
            }
        };

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                currentSlide = (currentSlide - 1 + carouselData.slides.length) % carouselData.slides.length;
                updateSlide();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                currentSlide = (currentSlide + 1) % carouselData.slides.length;
                updateSlide();
            });
        }
    };

    // Add click event to simulator tabs
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const format = btn.getAttribute('data-format');
            updateSimulator(format);
        });
    });

    // Initialize Simulator with video content on start
    updateSimulator('video');

    // 5. Dynamic Investment Calculator & WhatsApp Link Sync
    const feeInput = document.getElementById('fee-val');
    const adsInput = document.getElementById('ads-val');
    const adsValText = document.getElementById('ads-val-text');
    const totalValText = document.getElementById('total-val-text');

    const updateCalculations = () => {
        const fee = 9000; // Fixed fee
        const ads = parseInt(adsInput.value, 10);
        const total = fee + ads;

        adsValText.textContent = `$${ads.toLocaleString('es-MX')} MXN`;
        totalValText.textContent = `$${total.toLocaleString('es-MX')} MXN`;

        // Update accept proposal button WhatsApp href dynamically with current selected budget
        const acceptProposalBtn = document.getElementById('accept-proposal-btn');
        if (acceptProposalBtn) {
            const message = `¡Hola! Leímos la propuesta de marketing digital de AromaMedia para Flavor Cup Coffee y estamos listos para iniciar.\n\n` +
                            `*Detalles del plan seleccionado:*\n` +
                            `• *Fee de Gestión:* $9,000 MXN / mes\n` +
                            `• *Pauta de Ads:* $${ads.toLocaleString('es-MX')} MXN / mes\n` +
                            `• *Inversión Total:* $${total.toLocaleString('es-MX')} MXN / mes\n\n` +
                            `¡Coordinemos la primera sesión de grabación de cortesía!`;
            acceptProposalBtn.href = `https://api.whatsapp.com/send?phone=525512345678&text=${encodeURIComponent(message)}`;
        }
    };

    if (adsInput) {
        adsInput.addEventListener('input', updateCalculations);
    }

    // Initialize Calculations
    updateCalculations();

    // 6. FAQ Accordion Functionality
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const isActive = item.classList.contains('active');
            
            // Close all items
            document.querySelectorAll('.faq-item').forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-answer').style.maxHeight = null;
            });

            // Open selected item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                const answer = item.querySelector('.faq-answer');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
});
