// 1.GANTI TEMA
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click',() => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const nextTheme = currentTheme === 'dark'?'light':'dark';
    document.documentElement.setAttribute('data-theme',nextTheme);
    localStorage.setItem('theme',nextTheme);
});

// 2. NAVBAR RESPONSIF
const  menuToggle = document.getElementById('menu-toggle');
const  navLinks = document.getElementById('nav-links');
menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isOpen);
    menuToggle.textContent = isOpen ? '✕' : '☰';
});
navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.textContent = '☰';
    });
});

// 3. GALERI INTERKTIF
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.getElementById('lightbox-close');
document.querySelectorAll('.projek-item').forEach((img) => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxCaption.textContent = img.alt;
        lightbox.showModal();
    })
})
lightboxClose.addEventListener('click', () => {
    lightbox.close();
})
lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox){
        lightbox.close();
    }
})

// 4. VALIDASI FORMULIR
const contactForm = document.getElementById('contact-form');
const statusMsg = document.getElementById('form-status');

const setError = (input, message) => {
    const errorEl = input.parentElement.querySelector('.error-msg');
    errorEl.textContent = message;
    input.classList.toggle('invalid', Boolean(message));
};

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        statusMsg.textContent = '';

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const msgInput = document.getElementById('message');

        let isValid = true;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (nameInput.value.trim().length < 3) {
            setError(nameInput, 'Nama wajib diisi minimal 3 karakter.');
            isValid = false;
        } else {
            setError(nameInput, '');
        }

        if (!emailPattern.test(emailInput.value.trim())) {
            setError(emailInput, 'Masukkan alamat email yang valid.');
            isValid = false;
        } else {
            setError(emailInput, '');
        }

        if (msgInput.value.trim().length === 0) {
            setError(msgInput, 'Pesan wajib diisi.');
            isValid = false;
        } else if (msgInput.value.trim().length > 999) {
            setError(msgInput, 'Pesan maksimal 999 karakter.');
            isValid = false;
        } else {
            setError(msgInput, '');
        }

        if (isValid) {
            statusMsg.textContent = 'Pesan berhasil terkirim!';
            contactForm.reset();
        }
    });
}

// 5.KEMBALI KE ATAS
const backToTopButton = document.getElementById('back_to_top');
// Memunculkan tombol
window.addEventListener('scroll', () => {
if(window.scrollY > 300)
    {backToTopButton.style.display = 'block'} 
else
    {backToTopButton.style.display = 'none'}
});
// Gulir ke atas
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});