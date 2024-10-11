document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Toggle menu when clicking the hamburger icon
    menuToggle.addEventListener('click', function(event) {
        event.stopPropagation();
        navMenu.classList.toggle('active');
    });

    // Close menu only when clicking anywhere on the screen
    document.addEventListener('click', function(event) {
        if (navMenu.classList.contains('active') && !navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            navMenu.classList.remove('active');
        }
    });

    // Prevent menu from closing on scroll
    document.addEventListener('scroll', function(event) {
        event.stopPropagation();
    }, true);

    // Close menu when clicking a nav link (for mobile)
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
            }
        });
    });

    const form = document.getElementById('emailForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fullname = document.getElementById('fullname').value;
        const phone = document.getElementById('phone').value;

        const templateParams = {
            to_email: 'rodomahmoud121@gmail.com',
            from_name: fullname,
            mobile: phone,
        };

        emailjs.send('service_ru4mgr8', 'template_8325sf3', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('تم إرسال البيانات بنجاح!'); // Success message in Arabic
            }, function(error) {
                console.log('FAILED...', error);
                alert('حدث خطأ أثناء إرسال البيانات. يرجى المحاولة مرة أخرى.'); // Error message in Arabic
            });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('#why-choose-us .slider');
    const slides = document.querySelectorAll('#why-choose-us .slide');
    const prevBtn = document.querySelector('#why-choose-us .prev');
    const nextBtn = document.querySelector('#why-choose-us .next');
    let currentIndex = 0;

    function showSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        slider.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
    }

    prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));

    // Optional: Auto-slide
    setInterval(() => showSlide(currentIndex + 1), 5000);
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});