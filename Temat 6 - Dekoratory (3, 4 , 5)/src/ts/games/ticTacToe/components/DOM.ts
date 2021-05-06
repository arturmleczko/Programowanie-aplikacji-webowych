import { createDOMElement } from '../../../createDOMElement';

export class DOM {
	createDOM(): HTMLElement {
		const main = createDOMElement({
			tagName: 'main',
			className: 'game',
		});

		const canvas = createDOMElement({
			tagName: 'canvas',
			className: 'game__board hide',
			id: 'cvs',
		});

		const article = createDOMElement({
			tagName: 'article',
			className: 'game__options',
			dataSet: 'options',
		});

		const h1 = createDOMElement({
			tagName: 'h1',
			className: 'options__heading',
			textContent: 'Tic Tac Toe',
		});

		const firstSection = createDOMElement({
			tagName: 'section',
			className: 'options__container',
		});

		const h2InFirstSection = createDOMElement({
			tagName: 'h2',
			className: 'container__heading',
			textContent: 'Board size',
		});

		const input = createDOMElement({
			tagName: 'input',
			className: 'board__size-input',
			dataSet: 'sizeBoardInput',
			type: 'number',
		});

		const secondSection = createDOMElement({
			tagName: 'section',
			className: 'options__container',
		});

		const h2InSecondSection = createDOMElement({
			tagName: 'h2',
			className: 'container__heading',
			textContent: 'Symbol',
		});

		const sectionSymbolsButtons = createDOMElement({
			tagName: 'section',
			className: 'symbols__buttons',
		});

		const buttonX = createDOMElement({
			tagName: 'button',
			className: 'options__button symbols__button',
			dataSet: 'buttonX',
			textContent: 'X',
		});

		const buttonY = createDOMElement({
			tagName: 'button',
			className: 'options__button symbols__button',
			dataSet: 'buttonO',
			textContent: 'O',
		});

		const buttonPlay = createDOMElement({
			tagName: 'button',
			className: 'options__button options__play-button',
			dataSet: 'buttonPlay',
			textContent: 'Play',
		});

		const divGameOver = createDOMElement({
			tagName: 'div',
			className: 'game__game-over hide',
			dataSet: 'gameOver',
		});

		main.appendChild(canvas);
		main.appendChild(article);
		article.appendChild(h1);
		article.appendChild(firstSection);
		firstSection.appendChild(h2InFirstSection);
		firstSection.appendChild(input);
		article.appendChild(secondSection);
		secondSection.appendChild(h2InSecondSection);
		secondSection.appendChild(sectionSymbolsButtons);
		sectionSymbolsButtons.appendChild(buttonX);
		sectionSymbolsButtons.appendChild(buttonY);
		article.appendChild(buttonPlay);
		main.appendChild(divGameOver);

		return main;
	}
}
