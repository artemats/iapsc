export const initPartnersMoving = () => {
	const carousel = document.querySelector('#partners-carousel');
	const list = carousel.querySelector('.partners-carousel-list');
	const items = list.querySelectorAll('.partners-carousel-item');
	
	if (!carousel || !list || !items.length || window.innerWidth < 768) return null;
	
	items.forEach(item => {
		const clone = item.cloneNode(true);
		clone.classList.add('--clone');
		list.appendChild(clone);
	})
	
	let isVisible = false;
	let startScrollY = 0;
	const baseSpeed = 300;
	const maxTranslate = (list.clientWidth / window.innerWidth) * baseSpeed;
	
	if (list.clientWidth > window.innerWidth) {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					isVisible = true;
					startScrollY = window.scrollY;
				} else {
					isVisible = false;
				}
			});
		}, {threshold: 0});
		
		observer.observe(carousel);
		
		window.addEventListener('scroll', (event) => {
			if (!isVisible) return;
			
			const {y, height} = carousel.getBoundingClientRect()
			const viewportHeight = window.innerHeight;
			
			const progress = Math.min(1, Math.max(0, (viewportHeight - y) / (viewportHeight + height)));
			const value = Math.round(progress * maxTranslate);
			list.style.transform = `translateX(-${value}px)`;
		});
	}
}