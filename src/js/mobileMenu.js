const menuBtn = document.querySelector('.mobMenuIcon');
const closeMenuBtn = document.querySelector('.mobileMenuClose');
const mobileMenu = document.querySelector('.mobileMenu');
const menuLink = document.querySelectorAll('.mobileMenuLink');

menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    mobileMenu.classList.remove('isHiden')
    mobileMenu.classList.add('isOpen')
})

closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('isOpen')
    mobileMenu.classList.add('isHiden')
})

menuLink.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('isOpen');
        mobileMenu.classList.add('isHiden');
    });
});