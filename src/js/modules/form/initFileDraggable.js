export const initFileDraggable = () => {
	const inputs = document.querySelectorAll('input[type="file"]');
	
	if (inputs.length > 0) {
		inputs.forEach((input) => {
			const zone = input.parentElement;
			
      input.addEventListener('change', async (e) => {
        getFileName(zone, e.target.files[0]);
      });
			
			['dragover', 'dragenter', 'dragleave'].forEach((e) =>
				zone.addEventListener(e, preventDefaults)
			);
			
			zone.addEventListener('drop', (e) => {
				preventDefaults(e);
				
				const files = e.dataTransfer.files
				if (files.length > 0) {
					const dataTransfer = new DataTransfer();
					dataTransfer.items.add(files[0]);
					input.files = dataTransfer.files;
					
					getFileName(zone, files[0]);
				}
				
			})
    });
	}
}

const preventDefaults = (e) => {
	e.preventDefault();
	e.stopPropagation();
}

const getFileName = (zone, file = undefined) => {
	if (!file) return
	
	zone.querySelector('.input-draggzone-title')?.remove();
	zone.querySelector('.input-draggzone-detail')?.remove();
	zone.querySelector('.input-draggzone-filename').textContent = file.name;
}