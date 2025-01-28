import {initStatesSelect} from './initStatesSelect.js';

export const initCountriesSelect = async () => {
	const select = document.querySelector('#country');

	if (select) {
		const response = await fetch('../files/countries.json');
		
		if (!response.ok) {
			throw new Error(`Error with countries fetching: ${response.status}`);
		}
		
		const countries = await response.json();
		
		if (countries.length > 0) {
			for (const country of countries) {
				const option = document.createElement('option');
        option.value = country.name;
        option.textContent = country.name;
        select.appendChild(option);
			}
		}
		
		select.addEventListener('change', async (event) => {
			const selectedCountry = await countries.filter(country => country.name === event.target.value);
			if (selectedCountry.length > 0) {
				const { id } = selectedCountry[0];
				await initStatesSelect(id);
			}
    });
	}
}