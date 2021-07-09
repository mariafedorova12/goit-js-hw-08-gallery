import galleryItems from "./app.js";
const galleryBox = document.querySelector('.js-gallery');
const galleryMarkup = createGallery(galleryItems);

galleryBox.insertAdjacentHTML('beforeend', galleryMarkup);

function createGallery(cards) {
   return cards.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
    <a class="gallery__link"
        href= "#">
    <img class="gallery__image"
        src= "${preview}"
        data-source= "${original}"
        alt= "${description}"/>
    </a>
    </li>`;
  }).join('');
 
  // console.log(markup)
}
 
galleryBox.addEventListener('click', onGalleryBoxClick)

const modalOpen = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox__image')

function onGalleryBoxClick(e) {

  if (!e.target.classList.contains('gallery__image')) {
    return
  } else {

    modalOpen.classList.add('is-open');

    lightboxImg.src = e.target.dataset.source;
    lightboxImg.alt = e.target.alt;
  }
}

function closeModal(e) {
  modalOpen.classList.remove('is-open');

  lightboxImg.src = "";
  lightboxImg.alt = "";
}

const buttonClose = document.querySelector('.lightbox__button');
// console.log(buttonClose);

buttonClose.addEventListener('click', closeModal);

// document.addEventListener('keydown', function(e) {
//   if (e.key === 'Escape') {
 
//   hideModal()
//   }
//   });