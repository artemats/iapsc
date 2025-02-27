export const removeEmptySpace = () => {
	const elements = document.querySelectorAll('.crm-container .content');
	
	if (elements.length === 0) return
	
	elements.forEach((element) => {
		element.innerHTML = element.innerHTML.replace(/\&nbsp;/g, '');
	});
}