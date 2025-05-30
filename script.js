/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary: #B784E0;    /* Lilás suave */
    --secondary: #D4B0ED;  /* Lilás claro */
    --accent: #F3E6FF;     /* Lavanda muito claro */
    --dark: #8B62A8;       /* Roxo médio suave */
    --light: #FBF8FF;      /* Branco com tom lilás */
    --text: #4A3B5C;       /* Roxo escuro suave para texto */
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--text);
    background-color: var(--light);
}

/* Header Styles */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 5%;
    background-color: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    height: 70px; /* Altura fixa para a navbar */
}

.logo {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.logo-image {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    border-radius: 50%;
    box-shadow: 0 2px 10px rgba(183, 132, 224, 0.3);
}

.logo-text {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--dark);
    margin: 0;
}

.logo-text span {
    display: block;
    font-size: 0.9rem;
    font-weight: 400;
    color: var(--primary);
    letter-spacing: 2px;
    text-transform: uppercase;
}

.nav-links {
    display: flex;
    gap: 2rem;
}

.nav-links a {
    text-decoration: none;
    color: var(--text);
    font-size: 0.95rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    transition: all 0.3s ease;
    position: relative;
}

.nav-links a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: var(--primary);
    transition: all 0.3s ease;
    transform: translateX(-50%);
}

.nav-links a:hover {
    color: var(--primary);
    background: rgba(183, 132, 224, 0.1);
    transform: translateY(-2px);
}

.nav-links a:hover::after {
    width: 70%;
}

.nav-links a.active {
    color: var(--primary);
    background: rgba(183, 132, 224, 0.15);
}

.nav-links a.active::after {
    width: 70%;
}

.nav-icons {
    display: flex;
    gap: 1.2rem;
}

.nav-icons a {
    color: var(--text);
    text-decoration: none;
    position: relative;
    font-size: 1.1rem;
    padding: 0.5rem;
    border-radius: 50%;
    transition: all 0.3s ease;
}

.nav-icons a:hover {
    color: var(--primary);
    background: rgba(183, 132, 224, 0.1);
    animation: navButtonPop 0.3s ease;
}

.cart-count {
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: #e74c3c;
    color: white;
    border-radius: 50%;
    padding: 0.2rem 0.5rem;
    font-size: 0.8rem;
}

/* Hero Section */
.hero {
    position: relative;
    min-height: 85vh;
    background-image: 
        url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
        linear-gradient(
            135deg,
            rgba(183, 132, 224, 0.85) 0%,
            rgba(139, 98, 168, 0.85) 100%
        ),
        url('https://images.unsplash.com/photo-1621798744697-49b3ace027fe?ixlib=rb-4.0.3');
    background-size: auto, cover, cover;
    background-position: center;
    background-repeat: repeat, no-repeat, no-repeat;
    background-attachment: scroll, fixed, fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 80px;
    overflow: hidden;
}

.hero::before {
    display: none;
}

.hero-content {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.hero-text {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.main-title {
    font-size: 3.5rem;
    color: white;
    margin: 0;
    line-height: 1.2;
    font-weight: 600;
    margin-bottom: 0.5rem;
    letter-spacing: -0.5px;
}

.subtitle {
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.95);
    margin: 0;
    font-weight: 400;
    margin-bottom: 1.5rem;
}

.hero-description {
    color: rgba(255, 255, 255, 0.95);
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
}

.cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.8rem 2rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    font-size: 1rem;
    border: none;
    backdrop-filter: blur(5px);
}

.cta-button i {
    font-size: 1.2rem;
}

.cta-button.primary {
    background: white;
    color: var(--primary);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.cta-button.secondary {
    background: rgba(255, 255, 255, 0.15);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.cta-button:hover {
    transform: translateY(-2px);
}

.cta-button.primary:hover {
    background: #f8f8f8;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.cta-button.secondary:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
}

/* Hero Section */
.hero {
    position: relative;
    min-height: 85vh;
    background: linear-gradient(135deg, var(--primary) 0%, var(--dark) 100%);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
    padding-top: 90px;
}

.hero-content {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1fr 350px;
    gap: 3rem;
    align-items: start;
}

.hero-features {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    max-width: 350px;
    margin: 2rem auto;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.feature {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.8rem 1rem;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.feature:hover {
    transform: translateX(5px);
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.2);
}

.feature-icon {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: white;
    flex-shrink: 0;
}

.feature-text {
    flex: 1;
}

.feature-text strong {
    display: block;
    color: white;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.2rem;
}

.feature-text span {
    display: block;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.85rem;
    font-weight: 400;
}

/* Animações suaves */
@keyframes featureSlideIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.feature {
    animation: featureSlideIn 0.4s ease forwards;
}

.feature:nth-child(1) { animation-delay: 0.1s; }
.feature:nth-child(2) { animation-delay: 0.2s; }
.feature:nth-child(3) { animation-delay: 0.3s; }

/* Responsividade */
@media (max-width: 1024px) {
    .hero-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .hero-text {
        text-align: center;
        padding-top: 1rem;
    }

    .hero-features {
        margin: 1rem auto;
    }
}

@media (max-width: 768px) {
    .hero {
        background-position: 70% center;
    }

    .main-title {
        font-size: 2.5rem;
    }

    .subtitle {
        font-size: 1.5rem;
    }

    .hero-description {
        font-size: 1rem;
        padding: 0 1rem;
    }

    .hero-buttons {
        flex-direction: column;
        width: 100%;
        padding: 0 1rem;
    }

    .cta-button {
        width: 100%;
        justify-content: center;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    .main-title {
        font-size: 3rem;
    }

    .subtitle {
        font-size: 1.8rem;
    }

    .hero-features {
        flex-wrap: wrap;
        justify-content: center;
    }

    .hero-features .feature {
        flex: 0 1 calc(50% - 1rem);
    }
}

/* Services Section */
.featured-services {
    padding: 5rem 0;
    background-color: #FBF8FF;
}

.featured-services h2 {
    text-align: center;
    font-size: 2.5rem;
    color: #4A3B5C;
    margin-bottom: 3rem;
    position: relative;
}

.featured-services h2::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, #B784E0, #D4B0ED);
    border-radius: 2px;
}

.service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.service-card {
    background: #fff;
    border-radius: 25px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20L0 20z' fill='%23f9f5ff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
    background-size: 20px 20px;
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(183, 132, 224, 0.2);
}

.service-image {
    border-radius: 25px 25px 0 0;
    position: relative;
    height: 250px;
    overflow: hidden;
}

.service-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.service-card:hover .service-image img {
    transform: scale(1.1);
}

.service-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent, rgba(74, 59, 92, 0.8));
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 1.5rem;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.service-card:hover .service-overlay {
    opacity: 1;
}

.book-now {
    background: #fff;
    color: #B784E0;
    padding: 0.8rem 2rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transform: translateY(20px);
    transition: all 0.3s ease;
}

.service-card:hover .book-now {
    transform: translateY(0);
}

.service-card:hover .book-now:hover {
    background: #B784E0;
    color: #fff;
}

.service-info {
    padding: 1.5rem;
}

.service-info h3 {
    color: #4A3B5C;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.service-info .description {
    color: #666;
    margin-bottom: 1rem;
    line-height: 1.6;
}

.service-info .price {
    color: #B784E0;
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.service-features {
    display: flex;
    gap: 1rem;
    color: #8B62A8;
    font-size: 0.9rem;
}

.service-features span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.service-features i {
    color: #D4B0ED;
}

@media (max-width: 768px) {
    .featured-services h2 {
        font-size: 2rem;
    }

    .service-grid {
        grid-template-columns: 1fr;
        padding: 0 1rem;
    }

    .service-card {
        max-width: 400px;
        margin: 0 auto;
    }
}

/* About Section */
.about {
    padding: 5rem 5%;
    background-color: var(--accent);
}

.about h2 {
    text-align: center;
    margin-bottom: 3rem;
    color: var(--dark);
    font-size: 2.5rem;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.feature-card {
    text-align: center;
    padding: 2rem;
    background: white;
    border-radius: 25px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
}

.feature-card i {
    font-size: 2.5rem;
    color: var(--primary);
    margin-bottom: 1rem;
}

.feature-card h3 {
    color: var(--dark);
    margin-bottom: 1rem;
}

.feature-card p {
    color: var(--text);
}

/* Contact Section */
.contact {
    padding: 5rem 5%;
    background-color: white;
}

.contact-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}

.contact h2 {
    margin-bottom: 1rem;
    color: var(--dark);
    font-size: 2.5rem;
}

.contact p {
    margin-bottom: 2rem;
    color: var(--text);
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact-form input,
.contact-form textarea {
    padding: 1rem;
    border: 1px solid var(--accent);
    border-radius: 15px;
    font-size: 1rem;
}

.contact-form textarea {
    height: 150px;
    resize: vertical;
}

.contact-form button {
    padding: 1rem;
    background-color: var(--primary);
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    transition: all 0.3s ease;
}

.contact-form button:hover {
    background-color: var(--dark);
    transform: translateY(-2px);
}

/* Footer */
footer {
    background-color: var(--dark);
    color: white;
    padding: 4rem 5% 2rem;
    position: relative;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239b71b7' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-section h3 {
    color: var(--secondary);
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 0.8rem;
    color: var(--accent);
}

.footer-section a {
    color: var(--accent);
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-section a:hover {
    color: var(--secondary);
}

.social-links {
    display: flex;
    gap: 1.5rem;
}

.social-links a {
    color: var(--accent);
    font-size: 1.5rem;
    transition: all 0.3s ease;
}

.social-links a:hover {
    color: var(--secondary);
    transform: translateY(-3px);
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--accent);
}

/* Booking Modal */
.booking-modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 2000;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.booking-modal.active {
    opacity: 1;
}

.modal-content {
    background-color: white;
    border-radius: 30px;
    width: 95%;
    max-width: 1000px;
    position: relative;
    display: flex;
    height: 90vh;
    max-height: 700px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transform: scale(0.95);
    opacity: 0;
    transition: all 0.3s ease;
}

.booking-modal.active .modal-content {
    transform: scale(1);
    opacity: 1;
}

.calendar-section {
    flex: 1;
    padding: 2.5rem;
    border-right: 1px solid var(--accent);
    background-color: var(--light);
    overflow-y: auto;
}

.time-section {
    width: 250px;
    padding: 1.5rem;
    background-color: white;
    overflow-y: auto;
}

.close-modal {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--text);
    z-index: 1;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.3s;
    background-color: var(--light);
}

.close-modal:hover {
    background-color: var(--accent);
    color: var(--primary);
}

.calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}

.calendar-title {
    font-size: 1.2rem;
    color: var(--text);
}

.calendar-nav {
    display: flex;
    gap: 1rem;
}

.calendar-nav button {
    background: none;
    border: none;
    color: var(--primary);
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    transition: background-color 0.3s;
}

.calendar-nav button:hover {
    background-color: var(--accent);
}

.calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0.5rem;
}

.calendar-day.today {
    background-color: var(--accent);
    color: var(--primary);
    font-weight: bold;
    border: 2px solid var(--primary);
}

.calendar-day {
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.3s;
    font-size: 0.9rem;
    padding: 0.5rem;
    margin: 2px;
    border: 2px solid transparent;
}

.calendar-day:hover:not(.disabled) {
    background-color: var(--accent);
    color: var(--primary);
    transform: scale(1.1);
}

.calendar-day.selected {
    background-color: var(--primary);
    color: white;
    font-weight: bold;
    transform: scale(1.1);
}

.calendar-day.disabled {
    color: #ccc;
    cursor: not-allowed;
    opacity: 0.5;
}

.weekday-headers {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.weekday-header {
    text-align: center;
    color: var(--text);
    font-size: 0.8rem;
    padding: 0.5rem 0;
}

.time-slot {
    padding: 1rem;
    margin: 0.5rem 0;
    background-color: white;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
    text-align: center;
    border: 2px solid var(--accent);
    font-weight: 500;
}

.time-slot:hover {
    background-color: var(--accent);
    color: var(--primary);
    transform: translateY(-2px);
}

.time-slot.selected {
    background-color: var(--primary);
    color: white;
    border-color: var(--primary);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(183, 132, 224, 0.3);
}

.booking-form {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 3rem;
    flex-direction: column;
    gap: 1.5rem;
    opacity: 0;
    transform: translateX(20px);
    transition: all 0.3s ease;
    overflow-y: auto;
}

.booking-form.active {
    opacity: 1;
    transform: translateX(0);
}

.booking-form h2 {
    color: var(--dark);
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: 600;
}

.booking-form input,
.booking-form select,
.booking-form textarea {
    padding: 1rem 1.5rem;
    border: 2px solid var(--accent);
    border-radius: 20px;
    font-size: 1rem;
    transition: all 0.3s;
    background-color: var(--light);
    width: 100%;
}

.booking-form input:focus,
.booking-form select:focus,
.booking-form textarea:focus {
    border-color: var(--primary);
    outline: none;
    box-shadow: 0 0 0 3px rgba(183, 132, 224, 0.2);
}

.booking-form button[type="submit"] {
    padding: 1.2rem;
    background-color: var(--primary);
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s;
    margin-top: 1rem;
    width: 100%;
}

.booking-form button[type="submit"]:hover {
    background-color: var(--dark);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(139, 98, 168, 0.3);
}

.back-to-calendar {
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    background: none;
    border: none;
    color: var(--primary);
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.3s;
}

.back-to-calendar:hover {
    background-color: var(--accent);
}

/* Responsividade do Modal */
@media (max-width: 768px) {
    .modal-content {
        flex-direction: column;
        height: 95vh;
    }

    .calendar-section {
        border-right: none;
        border-bottom: 1px solid var(--accent);
    }

    .time-section {
        width: 100%;
        max-height: 200px;
    }

    .booking-form {
        padding: 1.5rem;
    }
}

/* WhatsApp Button */
.whatsapp-button {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    background-color: #25D366;
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
    transition: all 0.3s;
    z-index: 1000;
}

.whatsapp-button:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 15px rgba(37, 211, 102, 0.4);
}

/* Features Section */
.features {
    position: relative;
    padding: 5rem 5%;
    background-color: white;
    margin-top: -30px;
    z-index: 2;
    border-radius: 30px 30px 0 0;
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f6f0ff' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
    background-size: 40px 40px;
}

.features .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.features .feature-card {
    position: relative;
    text-align: center;
    padding: 3rem 2rem;
    background: var(--light);
    border-radius: 20px;
    transition: all 0.3s ease;
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f0e6ff' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
    background-size: 20px 20px;
}

.features .feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(183, 132, 224, 0.2);
}

.features .feature-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    padding: 20px;
    box-shadow: 0 5px 15px rgba(183, 132, 224, 0.3);
}

.features .feature-icon svg {
    width: 100%;
    height: 100%;
    fill: white;
}

.features .feature-card h3 {
    color: var(--dark);
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.features .feature-card p {
    color: var(--text);
    font-size: 1.1rem;
    line-height: 1.6;
}

/* Services Preview Section */
.services-preview {
    padding: 5rem 5%;
    background-color: var(--light);
    position: relative;
    background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b784e0' fill-opacity='0.05'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.services-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
}

.service-image {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.service-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.service-image:hover img {
    transform: scale(1.05);
}

.service-info {
    padding: 2rem;
}

.service-info h2 {
    color: var(--dark);
    font-size: 2.5rem;
    margin-bottom: 2rem;
    font-weight: 700;
}

.service-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 2rem;
}

.service-item {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
}

.service-item i {
    color: var(--primary);
    font-size: 1.5rem;
    background: var(--accent);
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    flex-shrink: 0;
}

.service-text h4 {
    color: var(--dark);
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
}

.service-text p {
    color: var(--text);
    margin-bottom: 0.5rem;
    line-height: 1.6;
}

.service-text .price {
    color: var(--primary);
    font-weight: 600;
    font-size: 1.1rem;
}

.cta-button.secondary {
    background-color: var(--primary);
    color: white;
    margin-top: 2rem;
}

.cta-button.secondary:hover {
    background-color: var(--dark);
    color: white;
}

/* Responsive Design Updates */
@media (max-width: 992px) {
    .services-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .service-image {
        height: 400px;
    }
}

@media (max-width: 768px) {
    .hero-content h1 {
        font-size: 3rem;
    }

    .hero-content p {
        font-size: 1.2rem;
    }

    .features .feature-card {
        padding: 2rem 1.5rem;
    }

    .service-info {
        padding: 1rem;
    }

    .service-info h2 {
        font-size: 2rem;
    }

    .service-image {
        height: 300px;
    }
}

/* Instagram Feed Section */
.instagram-feed {
    padding: 5rem 0;
    background-color: #fff;
}

.instagram-header {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 4rem;
    padding: 0 20px;
}

.instagram-header h2 {
    color: #4A3B5C;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    position: relative;
}

.instagram-header h2::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, #B784E0, #D4B0ED);
    border-radius: 2px;
}

.instagram-header p {
    color: #B784E0;
    font-size: 1.2rem;
    font-weight: 500;
}

.instagram-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.instagram-item {
    position: relative;
    aspect-ratio: 1;
    overflow: hidden;
    border-radius: 25px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.instagram-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(183, 132, 224, 0.2);
}

.instagram-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.instagram-item:hover img {
    transform: scale(1.1);
}

.instagram-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent, rgba(74, 59, 92, 0.8));
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.instagram-item:hover .instagram-overlay {
    opacity: 1;
}

.instagram-overlay i {
    color: #fff;
    font-size: 2rem;
    transform: translateY(20px);
    transition: transform 0.3s ease;
}

.instagram-item:hover .instagram-overlay i {
    transform: translateY(0);
}

.instagram-follow-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: #B784E0;
    color: #fff;
    padding: 1rem 2rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    margin: 3rem auto 0;
    width: fit-content;
    transition: all 0.3s ease;
}

.instagram-follow-button:hover {
    background: #8B62A8;
    transform: translateY(-2px);
}

.instagram-follow-button i {
    font-size: 1.2rem;
}

@media (max-width: 768px) {
    .instagram-feed {
        padding: 4rem 0;
    }

    .instagram-header h2 {
        font-size: 2rem;
    }

    .instagram-grid {
        grid-template-columns: repeat(2, 1fr);
        padding: 0 1rem;
    }
}

@media (max-width: 480px) {
    .instagram-grid {
        grid-template-columns: 1fr;
    }
}

/* Video Showcase Section */
.video-showcase {
    padding: 5rem 5%;
    background-color: var(--light);
    position: relative;
}

.video-container {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    border-radius: 25px;
    overflow: hidden;
    box-shadow: 0 15px 40px rgba(183, 132, 224, 0.2);
    background-color: var(--dark);
}

.video-container::before {
    content: "";
    display: block;
    padding-top: 177.78%; /* Proporção para vídeos do Pinterest (9:16) */
}

.video-container iframe,
.video-container video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: none;
}

.video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4));
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    opacity: 1;
    transition: opacity 0.3s ease;
}

.video-container:hover .video-overlay {
    opacity: 0;
}

.video-content {
    text-align: center;
    color: white;
    padding: 2rem;
    transform: translateY(0);
    transition: transform 0.3s ease;
    max-width: 600px;
    margin: 0 auto;
}

.video-container:hover .video-content {
    transform: translateY(10px);
}

.video-content h2 {
    font-size: 2.2rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.video-content p {
    font-size: 1.1rem;
    max-width: 500px;
    margin: 0 auto;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    line-height: 1.6;
}

.video-wrapper {
    position: relative;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    border-radius: 25px;
    overflow: hidden;
}

.pinterest-video {
    width: 100%;
    height: 100%;
    border: none;
}

@media (max-width: 768px) {
    .video-showcase {
        padding: 4rem 1rem;
    }

    .video-content h2 {
        font-size: 1.8rem;
    }

    .video-content p {
        font-size: 1rem;
        padding: 0 1rem;
    }

    .video-container {
        margin: 0 1rem;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    .video-container {
        max-width: 600px;
    }

    .video-content h2 {
        font-size: 2rem;
    }
}

/* Testimonials Section */
.testimonials {
    padding: 5rem 0;
    background: linear-gradient(135deg, #FBF8FF 0%, #F3E6FF 100%);
}

.testimonials-header {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 4rem;
    padding: 0 20px;
}

.testimonials-header h2 {
    color: #4A3B5C;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    position: relative;
}

.testimonials-header h2::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, #B784E0, #D4B0ED);
    border-radius: 2px;
}

.testimonials-header p {
    color: #666;
    font-size: 1.1rem;
    line-height: 1.6;
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.testimonial-card {
    background: #fff;
    border-radius: 25px;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    position: relative;
}

.testimonial-card::before {
    content: '"';
    position: absolute;
    top: -20px;
    left: 20px;
    font-size: 8rem;
    color: #D4B0ED;
    opacity: 0.2;
    font-family: serif;
    line-height: 1;
}

.testimonial-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(183, 132, 224, 0.2);
}

.testimonial-image {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 1.5rem;
    border: 3px solid #B784E0;
    position: relative;
}

.testimonial-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.testimonial-content {
    text-align: center;
}

.rating {
    color: #FFD700;
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.testimonial-text {
    color: #666;
    font-size: 1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-style: italic;
}

.testimonial-author h4 {
    color: #4A3B5C;
    font-size: 1.2rem;
    margin-bottom: 0.25rem;
}

.testimonial-author span {
    color: #B784E0;
    font-size: 0.9rem;
}

@media (max-width: 768px) {
    .testimonials {
        padding: 4rem 0;
    }

    .testimonials-header h2 {
        font-size: 2rem;
    }

    .testimonials-grid {
        grid-template-columns: 1fr;
        padding: 0 1rem;
    }

    .testimonial-card {
        max-width: 400px;
        margin: 0 auto;
    }
}

/* Mobile Navigation */
@media (max-width: 768px) {
    .navbar {
        padding: 0.8rem 4%;
    }

    .logo-image {
        width: 40px;
        height: 40px;
    }

    .logo-text {
        font-size: 1.2rem;
    }

    .logo-text span {
        font-size: 0.8rem;
    }

    .nav-links {
        display: none;
        position: fixed;
        top: 70px;
        left: 0;
        width: 100%;
        background: white;
        padding: 1rem 0;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        flex-direction: column;
        align-items: center;
    }

    .nav-links.active {
        display: flex;
    }

    .nav-links a {
        padding: 1rem 0;
        width: 100%;
        text-align: center;
    }

    .nav-icons {
        gap: 1rem;
    }

    /* Mobile Menu Button */
    .menu-button {
        display: block;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: var(--text);
        cursor: pointer;
        padding: 0.5rem;
    }

    /* Hero Section Mobile */
    .hero {
        min-height: 80vh;
        padding-top: 80px;
    }

    .hero-content {
        padding: 0 1rem;
        gap: 2rem;
    }

    .hero-text-container {
        max-width: 100%;
    }

    .main-title {
        font-size: 2.2rem;
    }

    .subtitle {
        font-size: 1.3rem;
    }

    .hero-description {
        font-size: 1rem;
        padding: 0 1rem;
    }

    .hero-buttons {
        flex-direction: column;
        width: 100%;
        padding: 0 1rem;
    }

    .cta-button {
        width: 100%;
        min-width: auto;
        justify-content: center;
    }

    .hero-features {
        flex-direction: column;
        padding: 0 1rem;
    }

    .hero-features .feature {
        width: 100%;
    }
}

/* Tablet Styles */
@media (min-width: 769px) and (max-width: 1024px) {
    .main-title {
        font-size: 3rem;
    }

    .subtitle {
        font-size: 1.5rem;
    }

    .hero-features {
        flex-wrap: wrap;
        justify-content: center;
    }

    .hero-features .feature {
        flex: 0 1 calc(50% - 1rem);
    }
}

/* Additional Mobile Styles */
@media (max-width: 480px) {
    .main-title {
        font-size: 2rem;
    }

    .subtitle {
        font-size: 1rem;
    }

    .hero-description {
        font-size: 1rem;
    }

    .cta-button {
        padding: 0.8rem 1.5rem;
        font-size: 1rem;
    }

    .cta-button i {
        font-size: 1.2rem;
    }

    .hero-features .feature {
        padding: 0.8rem 1.2rem;
    }

    .hero-features .feature-icon {
        width: 40px;
        height: 40px;
        font-size: 1.2rem;
    }

    /* Services Section Mobile */
    .service-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        padding: 0 1rem;
    }

    .service-card {
        margin: 0 auto;
    }

    .service-image {
        height: 200px;
    }

    /* Contact Section Mobile */
    .contact {
        padding: 3rem 1rem;
    }

    .contact-form {
        padding: 0 1rem;
    }

    /* Footer Mobile */
    footer {
        padding: 3rem 1rem 1.5rem;
    }

    .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
        
    }

    .social-links {
        justify-content: center;
    }

    /* WhatsApp Button Mobile */
    .whatsapp-button {
        width: 50px;
        height: 50px;
        font-size: 1.5rem;
        bottom: 1.5rem;
        right: 1.5rem;
    }
}

/* Booking Modal Mobile */
@media (max-width: 768px) {
    .modal-content {
        width: 95%;
        height: 95vh;
        flex-direction: column;
    }

    .calendar-section {
        padding: 1.5rem;
    }

    .time-section {
        width: 100%;
        max-height: 200px;
    }

    .booking-form {
        padding: 1.5rem;
    }

    .calendar-day {
        font-size: 0.8rem;
    }

    .time-slot {
        padding: 0.8rem;
        font-size: 0.9rem;
    }
}

/* Enhanced Services Section */
.services-showcase {
    padding: 5rem 5%;
    background: linear-gradient(135deg, var(--light) 0%, var(--accent) 100%);
}

.services-showcase h2 {
    text-align: center;
    color: var(--dark);
    font-size: 2.5rem;
    margin-bottom: 3rem;
    position: relative;
}

.services-showcase h2::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, var(--primary), var(--secondary));
    border-radius: 2px;
}

.services-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.service-card-enhanced {
    background: white;
    border-radius: 25px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    position: relative;
}

.service-card-enhanced:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(183, 132, 224, 0.2);
}

.service-image-container {
    position: relative;
    height: 250px;
    overflow: hidden;
}

.service-image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.service-card-enhanced:hover .service-image-container img {
    transform: scale(1.1);
}

.service-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    padding: 2rem 1.5rem;
    color: white;
    transform: translateY(100%);
    transition: transform 0.3s ease;
}

.service-card-enhanced:hover .service-overlay {
    transform: translateY(0);
}

.service-content {
    padding: 2rem;
}

.service-title {
    color: var(--dark);
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
}

.service-description {
    color: var(--text);
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

.service-features-list {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-bottom: 1.5rem;
}

.service-feature-item {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: var(--text);
}

.service-feature-item i {
    color: var(--primary);
    font-size: 1.2rem;
}

.service-price {
    font-size: 1.5rem;
    color: var(--primary);
    font-weight: 600;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
}

.service-price small {
    font-size: 1rem;
    color: var(--text);
    font-weight: normal;
}

.service-action {
    display: flex;
    gap: 1rem;
}

.service-button {
    flex: 1;
    padding: 1rem;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
    text-decoration: none;
}

.service-button.primary {
    background: var(--primary);
    color: white;
}

.service-button.secondary {
    background: var(--accent);
    color: var(--primary);
}

.service-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(183, 132, 224, 0.3);
}

.service-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: var(--primary);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
    z-index: 1;
}

/* Service Card Variations */
.service-card-enhanced.popular {
    border: 2px solid var(--primary);
}

.service-card-enhanced.popular .service-badge {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
}

/* Mobile Responsiveness for Services */
@media (max-width: 768px) {
    .services-showcase {
        padding: 3rem 1rem;
    }

    .services-cards {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .service-card-enhanced {
        max-width: 400px;
        margin: 0 auto;
    }

    .service-image-container {
        height: 200px;
    }

    .service-content {
        padding: 1.5rem;
    }

    .service-title {
        font-size: 1.3rem;
    }

    .service-price {
        font-size: 1.3rem;
    }

    .service-action {
        flex-direction: column;
    }
}

/* Service Benefits Section */
.service-benefits {
    padding: 4rem 5%;
    background: white;
}

.benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.benefit-item {
    text-align: center;
    padding: 2rem;
}

.benefit-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 1.5rem;
    background: var(--accent);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: var(--primary);
}

.benefit-title {
    color: var(--dark);
    font-size: 1.3rem;
    margin-bottom: 1rem;
}

.benefit-description {
    color: var(--text);
    line-height: 1.6;
}

@media (max-width: 768px) {
    .service-benefits {
        padding: 3rem 1rem;
    }

    .benefit-item {
        padding: 1.5rem;
    }
}

/* Booking Section with Phone Mockup */
.booking-section {
    display: flex;
    align-items: center;
    gap: 3rem;
    margin: 2rem auto;
    padding: 0;
    position: relative;
    justify-content: center;
}

.booking-btn {
    flex: 0 0 auto;
    min-width: 250px;
    display: flex;
    align-items: center;
    gap: 1rem;
    background: white;
    color: var(--primary);
    padding: 1rem 2rem;
    border-radius: 20px;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.booking-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.booking-btn i {
    font-size: 1.5rem;
    color: var(--primary);
}

.button-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.button-text strong {
    font-size: 1.1rem;
    color: var(--primary);
}

.button-text span {
    font-size: 0.85rem;
    color: var(--text);
    opacity: 0.8;
}

.phone-mockup,
.phone-frame,
.phone-content,
.app-header,
.app-calendar,
.calendar-header,
.calendar-nav,
.day-names,
.days-grid,
.time-slots,
.slots-grid,
.status-bar,
.booking-section {
    display: none;
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes floatPhone {
    0%, 100% {
        transform: translateY(-50%) translateZ(0);
    }
    50% {
        transform: translateY(-60%) translateZ(20px);
    }
}

/* Animações para os botões de navegação */
@keyframes navButtonPop {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
}

.hero-features {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    max-width: 350px;
    margin: 2rem auto;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.feature {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.8rem 1rem;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.feature:hover {
    transform: translateX(5px);
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.2);
}

.feature-icon {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: white;
    flex-shrink: 0;
}

.feature-text {
    flex: 1;
}

.feature-text strong {
    display: block;
    color: white;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.2rem;
}

.feature-text span {
    display: block;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.85rem;
    font-weight: 400;
}

/* Animações mais suaves */
@keyframes featureSlideIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.feature {
    animation: featureSlideIn 0.4s ease forwards;
}

.feature:nth-child(1) { animation-delay: 0.1s; }
.feature:nth-child(2) { animation-delay: 0.2s; }
.feature:nth-child(3) { animation-delay: 0.3s; }

/* Responsividade */
@media (max-width: 1024px) {
    .hero-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .hero-text {
        text-align: center;
        padding-top: 1rem;
    }

    .hero-features {
        margin: 1rem auto;
    }
}

@media (max-width: 768px) {
    .hero-features {
        max-width: 300px;
        padding: 1rem;
    }

    .feature {
        padding: 0.6rem 0.8rem;
    }

    .feature-icon {
        width: 35px;
        height: 35px;
        font-size: 1rem;
    }

    .feature-text strong {
        font-size: 0.9rem;
    }

    .feature-text span {
        font-size: 0.8rem;
    }
}

/* Efeito de glassmorphism melhorado */
.hero-features::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.05)
    );
    z-index: -1;
} 
