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

