export const initFadeSwitcher = () => {
	const triggers = document.querySelectorAll('#switcher-triggers button');
	const plates = document.querySelectorAll('#switcher-plates [data-content]');
	
	if (triggers.length > 0) {
		triggers.forEach((trigger) => {
			trigger.addEventListener('click', (e) => {
				e.preventDefault();
				const triggerId = trigger.getAttribute('data-trigger');
				
				// reset current state
				triggers.forEach(btn => btn.classList.remove('active'));
				plates.forEach(plate => plate.style.display = 'none');
				
				trigger.classList.add('active');
				
				plates[Number(triggerId)].style.display = 'block';
			})
		})
		
		// 	Init first item
		document.querySelector('#switcher-triggers button').click();
	}
}