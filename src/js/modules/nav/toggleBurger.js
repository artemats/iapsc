import {toggleNav} from './toggleNav.js';

export const toggleBurger = () => {
	const burger = document.querySelector('#burger');
	if (burger) {
		burger.addEventListener('click', () => {
			burger.classList.contains('active') ? toggleNav(false) : toggleNav(true);
		});
	}
}