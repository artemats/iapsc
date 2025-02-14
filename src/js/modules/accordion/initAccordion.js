export const initAccordion = () => {
	const accordions = document.querySelectorAll('.accordion-item');
	
	if (accordions.length > 0) {
		for (const accordion of accordions) {
			const header = accordion.querySelector('.accordion-item-header');
			const body = accordion.querySelector('.accordion-item-body');
			
			header.addEventListener('click', () => {
				if (body.style.maxHeight) {
					toggle(accordion, false)
				} else {
					accordions.forEach((accordion) => toggle(accordion, false))
					toggle(accordion, true)
				}
			})
		}
	}
}

const toggle = (accordion, status) => {
	const body = accordion.querySelector('.accordion-item-body');
	
	if (status) {
		accordion.classList.add('active');
		body.style.maxHeight = body.scrollHeight + 'px';
		
		if (window.innerWidth < 768) {
			setTimeout(() => accordion.scrollIntoView({behavior: 'smooth'}), 200);
		}
	} else {
		accordion.classList.remove('active');
		body.style.maxHeight = null;
	}
}