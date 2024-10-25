import {toggleBurger} from './modules/nav/toggleBurger.js';
import {toggleNav} from './modules/nav/toggleNav.js';
import {initFadeSwitcher} from './modules/switch/fadeSwitcher.js';

toggleBurger();
initFadeSwitcher();

window.addEventListener('scroll', () => {
	if (window.innerWidth < 992) {
		toggleNav(false);
	}
});