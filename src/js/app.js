import {toggleBurger} from './modules/nav/toggleBurger.js';
import {toggleNav} from './modules/nav/toggleNav.js';
import {initFadeSwitcher} from './modules/switch/fadeSwitcher.js';
import {initLinkedinCarousel} from './carousels/linkedinCarousel.js';
import {initAccordion} from './modules/accordion/initAccordion.js';
import {initFileDraggable} from './modules/form/initFileDraggable.js';
import {initRadioSwitcher} from './modules/switch/initRadioSwitcher.js';
import {removeEmptySpace} from './modules/form/removeEmptySpace.js';

toggleBurger();
initFadeSwitcher();
setTimeout(() => initAccordion(), 0);
setTimeout(() => initLinkedinCarousel(), 0);
setTimeout(() => initFileDraggable(), 0);
setTimeout(() => initRadioSwitcher(), 0);
setTimeout(() => removeEmptySpace(), 0);

window.addEventListener('scroll', () => {
	if (window.innerWidth < 992) {
		toggleNav(false);
	}
});