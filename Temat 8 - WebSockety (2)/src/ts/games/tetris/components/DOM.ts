import { createDOMElement } from '../../../createDOMElement';

export class DOM {
	createDOM(): HTMLElement {
		const main = createDOMElement({
			tagName: 'main',
			className: 'tetris',
		});

		const heading = createDOMElement({
			tagName: 'h1',
			className: 'tetris__heading',
			textContent: 'Pusta gra',
		});

		main.appendChild(heading);

		return main;
	}
}
