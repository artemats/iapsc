import Tween, { Power3 } from 'gsap';

export const toggleNav = (status) => {
	const burger = document.querySelector('#burger');
	const nav = document.querySelector('.header-nav');
	
	if (status) {
		if (nav && burger) {
			burger.classList.add('active');
			Tween.set(nav, {
				display: 'block',
				opacity: 0,
			});
			Tween.to(nav, {
				opacity: 1,
				duration: .4,
				ease: Power3.easeOut,
				onComplete: () => {
					nav.classList.add('active');
					toggleNavItems(true);
				}
			});
		}
	} else {
		if (nav && burger) {
			toggleNavItems(false);
			burger.classList.remove('active');
			Tween.to(nav, {
				opacity: 0,
				duration: .4,
				ease: Power3.easeOut,
				onComplete: () => {
					nav.classList.remove('active');
					Tween.set(nav, {
						display: 'none',
					});
				}
			});
		}
	}
}

const toggleNavItems = (status) => {
	const items = document.querySelectorAll('.header-nav li');
	
	if (status) {
		Tween.fromTo(items,
			{
				opacity: 0,
				x: -20,
			},
			{
				opacity: 1,
				x: 0,
				duration: .5,
				ease: Power3.easeOut,
				stagger: 0.05,
			});
	} else {
		Tween.to(items, {
			opacity: 0,
			x: -20,
			duration: .5,
			ease: Power3.easeOut,
			stagger: 0.05,
		});
	}
}