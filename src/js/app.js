import {toggleBurger} from './modules/nav/toggleBurger.js';
import {toggleNav} from './modules/nav/toggleNav.js';

toggleBurger()

window.addEventListener('scroll', () => {
	toggleNav(false);
});