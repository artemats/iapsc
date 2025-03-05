import {toggleBurger} from './modules/nav/toggleBurger.js';
import {toggleNav} from './modules/nav/toggleNav.js';
import {initFadeSwitcher} from './modules/switch/fadeSwitcher.js';
import {initLinkedinCarousel} from './carousels/linkedinCarousel.js';
import {initAccordion} from './modules/accordion/initAccordion.js';
import {initFileDraggable} from './modules/form/initFileDraggable.js';
import {initRadioSwitcher} from './modules/switch/initRadioSwitcher.js';
import {removeEmptySpace} from './modules/form/removeEmptySpace.js';
import {initPartnersMoving} from './carousels/partnersCarousel.js';

toggleBurger();
initFadeSwitcher();
initPartnersMoving();
initAccordion();
initLinkedinCarousel();
initFileDraggable();
initRadioSwitcher();
removeEmptySpace();

window.addEventListener('scroll', () => {
	if (window.innerWidth < 992) {
		toggleNav(false);
	}
});