const menuBtn = document.querySelector('.mobMenuIcon');
const closeMenuBtn = document.querySelector('.mobileMenuClose');
const mobileMenu = document.querySelector('.mobileMenu');

menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    mobileMenu.classList.remove('isHiden')
    mobileMenu.classList.add('isOpen')
    console.log('click');
})

closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('isOpen')
    mobileMenu.classList.add('isHiden')
    console.log('click');
})