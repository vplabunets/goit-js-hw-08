//Modules and styles import
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const imagesList = document.querySelector('.gallery');
// Markup creation
const ulList = galleryItems
  .map(
    image => `<div class="gallery__item">
    
<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>
</div>`
  )
  .join('');

// Adding markup to div.gallery
imagesList.insertAdjacentHTML('afterbegin', ulList);
//Simple ligth box creation
const lightBox = new SimpleLightbox('.gallery a', {
  //Adding additional options
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

//Checking of click to images
imagesList.addEventListener('click', getOriginalUrl);
function getOriginalUrl(event) {
  if (event.target === event.currentTarget) return;
  event.preventDefault();
}
// Modal closure by pushing Escape
document.addEventListener('keydown', function (event) {
  // Escape pushing checking
  if (event.key === 'Escape') {
    // Modal close call
    lightBox.close();
  }
});
