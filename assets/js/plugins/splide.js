import Splide from "@splidejs/splide";
import '@splidejs/splide/css/core';

const initSplide = () => {
    const categories_next = document.querySelector('.categories__next');
    const categories_prev = document.querySelector('.categories__prev');

    if (!categories_next || !categories_prev) {
        return;
    }

    categories_prev.removeAttribute('x-show');

    categories_next.removeAttribute('x-show');

    const categories_splide = new Splide( '.splide.categories__splide', {
        pagination: false,
        arrows: false,
        perPage: 8,
        gap: '1.5rem',
        breakpoints: {
            320: {
                perPage: 3,
            },
            640: {
                perPage: 4,
            },
            768: {
                perPage: 5,
            },
            1024: {
                perPage: 5,
            },
            1280: {
                perPage: 6,
            },
            1536: {
                perPage: 7,
            }
        }
    });

    categories_splide.root.removeAttribute('x-cloak');

    categories_splide.mount();

    categories_splide.on('moved', () => {
        toggleSplideArrows(categories_prev, categories_next, categories_splide);
    });

    categories_next.addEventListener('click', () => {
        categories_splide.go('+');
    });

    categories_prev.addEventListener('click', () => {
        categories_splide.go('-');
    });

    toggleSplideArrows(categories_prev, categories_next, categories_splide);
};

function toggleSplideArrows(prevElement, nextElement, splide) {
    const currentIndex = splide.index; 
    const totalSlides = splide.Components.Elements.slides.length; 

    const can_display_prev = currentIndex > 0;
    const can_display_next = currentIndex < totalSlides - splide.options.perPage;

    can_display_prev ? prevElement.classList.remove('hidden') : prevElement.classList.add('hidden');
    can_display_next ? nextElement.classList.remove('hidden') : nextElement.classList.add('hidden');
}


export {initSplide};
