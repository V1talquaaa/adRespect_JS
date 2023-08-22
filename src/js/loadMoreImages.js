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


const library = document.querySelector('.grid');
const loadMoreBtn = document.querySelector('.libraryBtn');

loadMoreBtn.addEventListener('click', () => {
    images.map(image => {
        return library.insertAdjacentHTML('beforeend', `<img src=${image.url} class="libraryImg"></img>`)
    })

})