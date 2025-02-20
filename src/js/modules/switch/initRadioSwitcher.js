export const initRadioSwitcher = () => {
	const controls = document.querySelectorAll('.radio-switcher-control');
	const items = document.querySelectorAll('.radio-switcher-item');
	
	if (!controls.length || !items.length) return;
	
	controls.forEach(control => {
		control.addEventListener('change', (e) => {
			const id = e.target.value;
			
			items.forEach((item) => item.style.display = 'none');
			
			setTimeout(() => displayActiveItem(id), 0);
		});
		
		if (control.checked) {
			const id = control.value;
			setTimeout(() => displayActiveItem(id), 0);
		}
	})
}

const displayActiveItem = (id) => {
	const activeItem = document.querySelector(`.radio-switcher-item[data-switch-id="${id}"]`);
	if (activeItem) activeItem.style.display = 'block';
}