import Splide from '@splidejs/splide';

export const initLinkedinCarousel = () => {
	const linkedinCarousel = document.querySelector('#linkedin-carousel');

	if (linkedinCarousel) {
		const carousel = new Splide(linkedinCarousel, {
			type: 'loop',
			rewind: true,
			perPage: 2,
			perMove: 1,
			pagination: false,
			arrows: true,
			autoWidth: false,
			speed: 500,
			easing: 'linear',
			gap: '24rem',
			breakpoints: {
				767: {
					perPage: 1,
				}
			}
		})
		
		carousel.mount();
	}
}