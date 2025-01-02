import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";
import { createGalleryCardTemplate } from "./js/render-functions";
import { fetchPhotosByQuery } from "./js/pixabay-api";

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');

let simplelightbox = new SimpleLightbox('.gallery-card a', {
    captionsData: 'alt',
    captionDelay: 250,
});

const onSearchFormSubmit = event => {
    event.preventDefault();

    const inputValue = event.currentTarget.elements.user_query.value.trim();

    if (inputValue === '') {
        iziToast.error({
            message: "Search value should not be empty!",
            position: "topRight",
        });
        return;
    }

    const searchParams = new URLSearchParams({
        key: "47600623-616adcc60326fea30dcc03763",
        q: inputValue,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });

    loaderEl.classList.remove('is-hidden');

    fetchPhotosByQuery(searchParams)
        .finally(() => {
            loaderEl.classList.add('is-hidden');
        })
        .then(photos => {
            if (photos.total === 0) {
                iziToast.error({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: "topRight",
                });
                galleryEl.innerHTML = '';
                return;
            };
            galleryEl.innerHTML = createGalleryCardTemplate(photos.hits);
            simplelightbox.refresh();
        })
        .catch(err => console.log(err)
        );
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);