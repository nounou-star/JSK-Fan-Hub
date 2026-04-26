

document.addEventListener('DOMContentLoaded', function() {
    
    console.log('JSK Website loaded successfully!');
    
    // ============================================================
    // 2. DYNAMIC FOOTER YEAR (auto-updates to current year)
    // ============================================================
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = currentYear;
    }
    
    // ============================================================
    // 3. DARK MODE / LIGHT MODE TOGGLE
    // ============================================================
    const themeToggle = document.getElementById('themeToggle');
    
    if (themeToggle) {
        // Check if user has a saved preference in localStorage
        const savedTheme = localStorage.getItem('jskTheme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggle.textContent = '☀️ Mode Clair';
        }
        
        // Add click event to toggle button
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            // Update button text and save preference
            if (document.body.classList.contains('dark-mode')) {
                themeToggle.textContent = '☀️ Mode Clair';
                localStorage.setItem('jskTheme', 'dark');
            } else {
                themeToggle.textContent = '🌙 Mode Sombre';
                localStorage.setItem('jskTheme', 'light');
            }
        });
    }
    
    // ============================================================
    // 4. INTERACTIVE TROPHY COUNTER (for honours page)
    // ============================================================
    const incrementBtn = document.getElementById('incrementCounter');
    const decrementBtn = document.getElementById('decrementCounter');
    const counterDisplay = document.getElementById('trophyCounter');
    
    if (incrementBtn && counterDisplay) {
        let count = 28; // JSK has 28 titles
        
        counterDisplay.textContent = count;
        
        incrementBtn.addEventListener('click', function() {
            count++;
            counterDisplay.textContent = count;
            // Add a little animation effect
            counterDisplay.style.transform = 'scale(1.1)';
            setTimeout(function() {
                counterDisplay.style.transform = 'scale(1)';
            }, 200);
        });
        
        decrementBtn.addEventListener('click', function() {
            if (count > 0) {
                count--;
                counterDisplay.textContent = count;
                counterDisplay.style.transform = 'scale(0.9)';
                setTimeout(function() {
                    counterDisplay.style.transform = 'scale(1)';
                }, 200);
            }
        });
    }
    
    // ============================================================
    // 5. MOBILE MENU BUTTON (for small screens)
    // ============================================================
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('show');
        });
    }
    
    // ============================================================
    // 6. "BACK TO TOP" BUTTON (appears when scrolling)
    // ============================================================
    const backToTop = document.getElementById('backToTop');
    
    if (backToTop) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTop.style.display = 'flex';
            } else {
                backToTop.style.display = 'none';
            }
        });
        
        // Scroll to top when clicked
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ============================================================
    // 7. SIMPLE FORM VALIDATION (if contact form exists)
    // ============================================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual form submission
            
            const name = document.getElementById('contactName');
            const email = document.getElementById('contactEmail');
            const message = document.getElementById('contactMessage');
            let isValid = true;
            
            // Simple validation
            if (name.value.trim() === '') {
                alert('Veuillez entrer votre nom');
                name.style.border = '2px solid red';
                isValid = false;
            } else {
                name.style.border = '1px solid #ccc';
            }
            
            if (email.value.trim() === '') {
                alert('Veuillez entrer votre email');
                email.style.border = '2px solid red';
                isValid = false;
            } else if (!email.value.includes('@')) {
                alert('Veuillez entrer un email valide (avec @)');
                email.style.border = '2px solid red';
                isValid = false;
            } else {
                email.style.border = '1px solid #ccc';
            }
            
            if (message.value.trim() === '') {
                alert('Veuillez écrire votre message');
                message.style.border = '2px solid red';
                isValid = false;
            } else {
                message.style.border = '1px solid #ccc';
            }
            
            if (isValid) {
                alert('Merci ' + name.value + ' ! Votre message a été envoyé.');
                contactForm.reset();
            }
        });
    }
    
    // ============================================================
    // 8. ADD ACTIVE CLASS TO CURRENT PAGE IN NAVIGATION
    // ============================================================
    const currentPage = window.location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('.nav-links a');
    
    navItems.forEach(function(link) {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else if (currentPage === '' && linkPage === 'index.html') {
            link.classList.add('active');
        }
    });
    
    // ============================================================
    // 9. SIMPLE GREETING BASED ON TIME OF DAY
    // ============================================================
    const greetingElement = document.getElementById('greeting');
    
    if (greetingElement) {
        const hour = new Date().getHours();
        let greeting = '';
        
        if (hour < 12) {
            greeting = '🌅 Bonjour';
        } else if (hour < 18) {
            greeting = '☀️ Bon après-midi';
        } else {
            greeting = '🌙 Bonsoir';
        }
        
        greetingElement.textContent = greeting + ', les Canaris !';
    }
    
    // ============================================================
    // 10. IMAGE SLIDER FOR GALLERY PAGE (if exists)
    // ============================================================
    let slideIndex = 0;
    const prevSlide = document.getElementById('prevSlide');
    const nextSlide = document.getElementById('nextSlide');
    const slides = document.querySelectorAll('.slide');
    
    function showSlides() {
        if (slides.length > 0) {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none';
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            if (slides[slideIndex - 1]) {
                slides[slideIndex - 1].style.display = 'block';
            }
        }
    }
    
    if (prevSlide && nextSlide && slides.length > 0) {
        showSlides();
        
        nextSlide.addEventListener('click', function() {
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none';
            }
            slides[slideIndex - 1].style.display = 'block';
        });
        
        prevSlide.addEventListener('click', function() {
            slideIndex--;
            if (slideIndex < 1) {
                slideIndex = slides.length;
            }
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none';
            }
            slides[slideIndex - 1].style.display = 'block';
        });
    }
    
});