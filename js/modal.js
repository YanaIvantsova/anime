const modal = document.querySelector('.search-model');
const modalBtn = document.querySelector('.icon_search');
const modalClose = modal.querySelector('.search-close-switch');

modalBtn.addEventListener('click', () => {
    modal.style.display = 'block'
})

modalClose.addEventListener('click', () => {
    modal.style.display = 'none'
})

const search = modal.querySelector('#search-input');

search.addEventListener('input', () => {
    console.log(search.value)
})