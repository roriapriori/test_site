// Бургер-меню
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

// Открытие/закрытие мобильного меню по кнопке
burger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('active');
    burger.classList.toggle('active', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
});

// Закрытие мобильного меню при клике на ссылку
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        mobileMenu.classList.remove('active');
        burger.setAttribute('aria-expanded', 'false');
    });
});

// Закрытие меню клавишей Escape
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        burger.classList.remove('active');
        burger.setAttribute('aria-expanded', 'false');
        burger.focus();
    }
});

// Анимация появления блоков при скролле
const sections = document.querySelectorAll('section');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Кнопка «Наверх»: показывается после прокрутки вниз и плавно возвращает к началу
const scrollTopBtn = document.getElementById('scrollTop');

const toggleScrollTopBtn = () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
};

window.addEventListener('scroll', toggleScrollTopBtn, { passive: true });
toggleScrollTopBtn();

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
