
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

// Delegate event handling to the parent element
const library = document.querySelector('.grid');
library.addEventListener('click', e => {
    if (e.target.classList.contains('libraryImg')) {
        const img = document.createElement('img');
        img.src = e.target.src;
        lightbox.innerHTML = ''; // Clear existing content
        lightbox.appendChild(img);
        lightbox.classList.add('active');
    }
});

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) {
        return;
    }
    lightbox.classList.remove('active');
});

const images = [
    {
        url: 'https://source.unsplash.com/400x400?mountain',
        alt:'image'
    },
    {
        url: 'https://source.unsplash.com/400x400?sea',
        alt:'image'
    },
    {
        url: 'https://source.unsplash.com/400x400?car',
        alt:'image'
    },
    ,    {
        url: 'https://source.unsplash.com/400x400?landskape',
        alt:'image'
    }
    ,    {
        url: 'https://source.unsplash.com/400x400?ocean',
        alt:'image'
    },
    {
        url: 'https://source.unsplash.com/400x400?beach',
        alt:'image'
    },
    {
        url: 'https://source.unsplash.com/400x400?field',
        alt:'image'
    },
    {
        url: 'https://source.unsplash.com/400x400?mountain',
        alt:'image'
    },
    {
        url: 'https://source.unsplash.com/400x400?skyscreaper',
        alt:'image'
    }
];

const loadMoreBtn = document.querySelector('.libraryBtn');
loadMoreBtn.addEventListener('click', () => {
    images.forEach(image => {
        library.insertAdjacentHTML('beforeend', `<img src=${image.url} class="libraryImg"></img>`);
    });
});