export const initStatesSelect = async (countryId = undefined) => {
	const select = document.querySelector('#state');
	
	if (select) {
		select.parentNode.classList.add('disabled');
		
		const response = await fetch('../files/states.json');
		
		if (!response.ok) {
			throw new Error(`Error with states fetching: ${response.status}`);
		}
		
		const states = await response.json();

		if (states.length > 0) {
			const selectedStates = states.filter(state => state.country_id === countryId);
			
			// reset previous options
			select.innerHTML = '';
			if (selectedStates.length > 0) {
				for (const state of selectedStates) {
					const option = document.createElement('option');
					option.value = state.name;
					option.textContent = state.name;
					select.appendChild(option);
				}
				
				select.parentNode.classList.remove('disabled');
			} else {
				select.parentNode.classList.add('disabled');
				const option = document.createElement('option');
				option.value = '';
				option.textContent = 'No states';
				select.appendChild(option);
			}
		}
	}
}