import { createDOMElement } from '../../../createDOMElement';
import neutral from '../../../../img/games/saper/neutral.svg';

export class DOM {
	createDOM(): HTMLElement {
		const main = createDOMElement({
			tagName: 'main',
			className: 'saper',
		});

		const header = createDOMElement({
			tagName: 'header',
			className: 'header border border--convex',
		});

		const counter = createDOMElement({
			tagName: 'article',
			className: 'header__counter',
			dataSet: 'counter',
		});

		const timer = createDOMElement({
			tagName: 'article',
			className: 'header__counter',
			dataSet: 'timer',
			textContent: '0',
		});

		const reset = createDOMElement({
			tagName: 'button',
			className: 'header__reset border border--concave',
			dataSet: 'buttonReset',
		});

		const emotion = createDOMElement({
			tagName: 'img',
			className: 'header__emotion',
			dataSet: 'emotion',
			src: neutral,
		});

		const board = createDOMElement({
			tagName: 'article',
			className: 'saper__board border border--convex',
			dataSet: 'board',
		});

		const panel = createDOMElement({
			tagName: 'article',
			className: 'saper__panel border border--convex',
		});

		const panelHeader = createDOMElement({
			tagName: 'header',
			className: 'panel__header',
		});

		const panelHeading = createDOMElement({
			tagName: 'h1',
			className: 'panel__heading',
			textContent: 'Select Difficulty',
		});

		const panelButtons = createDOMElement({
			tagName: 'section',
			className: 'panel__buttons',
		});

		const easyButton = createDOMElement({
			tagName: 'button',
			className: 'button',
			dataSet: 'buttonEasy',
			textContent: 'Easy',
		});

		const normalButton = createDOMElement({
			tagName: 'button',
			className: 'button',
			dataSet: 'buttonNormal',
			textContent: 'Normal',
		});

		const modal = createDOMElement({
			tagName: 'article',
			className: 'modal hide',
			dataSet: 'modal',
		});

		const modalContent = createDOMElement({
			tagName: 'section',
			className: 'modal__content',
		});

		const modalText = createDOMElement({
			tagName: 'h2',
			className: 'modal__text',
			dataSet: 'modalHeading',
			textContent: 'You won!',
		});

		const modalButton = createDOMElement({
			tagName: 'button',
			className: 'modal__button',
			dataSet: 'modalButton',
			textContent: 'Play again!',
		});

		header.appendChild(counter);
		reset.appendChild(emotion);
		header.appendChild(reset);
		header.appendChild(timer);
		panelHeader.appendChild(panelHeading);
		panelButtons.appendChild(easyButton);
		panelButtons.appendChild(normalButton);
		panel.appendChild(panelHeader);
		panel.appendChild(panelButtons);
		modalContent.appendChild(modalText);
		modalContent.appendChild(modalButton);
		modal.appendChild(modalContent);

		main.appendChild(header);
		main.appendChild(board);
		main.appendChild(panel);
		main.appendChild(modal);

		return main;
	}
}
