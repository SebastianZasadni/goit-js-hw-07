import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const createGallery = galleryItems
.map(item => `<div class="gallery__item"><a class="gallery__link">
<img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"></a></div>`)
.join("");
const instance = basicLightbox.create(`
<div class="modal">
    <p>
        Your first lightbox with just a few lines of code.
        Yes, it's really that simple.
    </p>
</div>
`);
    
const selectImage = event => {
    const selectedImage = event.target.dataset.source; 
    const altImage = event.target.description;
    instance.show();
    const modal = document.querySelector('.modal');
    modal.style.maxWidth = "1140px";
    modal.innerHTML = `<img src="${selectedImage}" alt="${altImage}" class="gallery__image">`;
    modal.addEventListener("click", () => instance.close());
    document.addEventListener("keydown", event => {
        if( event.key === "Escape") instance.close();                              
        })};  
   
  gallery.insertAdjacentHTML("beforeend", createGallery);
  gallery.addEventListener("click", selectImage);
  
  
