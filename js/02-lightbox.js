import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const createGallery = galleryItems
.map(item => `<li class="gallery__item"><a href="${item.original}" class="gallery__link"><img src="${item.preview}" 
class="gallery__image" alt="${item.description}"></a></li>`)
 .join("");  
 gallery.insertAdjacentHTML("beforeend", createGallery);

 const lightbox = new SimpleLightbox(".gallery a", {  captionsData: "alt",  captionDelay: 250,});



 




