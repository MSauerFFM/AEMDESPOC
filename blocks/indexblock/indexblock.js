import {readBlockConfig} from '../../scripts/aem.js';

export default async function decorate(block) {
    const config = readBlockConfig(block);
	const indexUrl = config.pathtoindex;
	block.innerHTML = '';
	
	// Fetch data from the API.
    const response = await fetch(indexUrl);
    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }
    const data = await response.json();
	console.log(data);
	
	const container = document.createElement('div');
	data.items.forEach( (item) => {
		const titleDiv = document.createElement('div');
		titleDiv.textContent = '${item.title}';
		container.appendChild(titleDiv);
		
		const descriptionDiv = document.createElement('div');
		descriptionDiv.textContent = '${item.description}';
		container.appendChild(descriptionDiv);
		
		const picture = document.createElement('img');
		picture.src = '{item.image}';
		container.appendChild(picture);
	}
	)
	block.appendChild(container);
}