interface DOMElement {
	className?: string | undefined;
	dataSet?: string | undefined;
	id?: string | undefined;
	tagName: keyof HTMLElementTagNameMap;
	textContent?: string | undefined;
	type?: string | undefined;
}

export class DOM {
	createDOM() {
		const main = this.createDOMElement({
			tagName: 'main',
			className: 'game',
		});

		const canvas = this.createDOMElement({
			tagName: 'canvas',
			className: 'game__board hide',
			id: 'cvs',
		});

		const article = this.createDOMElement({
			tagName: 'article',
			className: 'game__options',
			dataSet: 'options',
		});

		const h1 = this.createDOMElement({
			tagName: 'h1',
			className: 'options__heading',
			textContent: 'Tic Tac Toe',
		});

		const firstSection = this.createDOMElement({
			tagName: 'section',
			className: 'options__container',
		});

		const h2InFirstSection = this.createDOMElement({
			tagName: 'h2',
			className: 'container__heading',
			textContent: 'Board size',
		});

		const input = this.createDOMElement({
			tagName: 'input',
			className: 'board__size-input',
			dataSet: 'sizeBoardInput',
			type: 'number',
		});

		const secondSection = this.createDOMElement({
			tagName: 'section',
			className: 'options__container',
		});

		const h2InSecondSection = this.createDOMElement({
			tagName: 'h2',
			className: 'container__heading',
			textContent: 'Symbol',
		});

		const sectionSymbolsButtons = this.createDOMElement({
			tagName: 'section',
			className: 'symbols__buttons',
		});

		const buttonX = this.createDOMElement({
			tagName: 'button',
			className: 'options__button symbols__button',
			dataSet: 'buttonX',
			textContent: 'X',
		});

		const buttonY = this.createDOMElement({
			tagName: 'button',
			className: 'options__button symbols__button',
			dataSet: 'buttonO',
			textContent: 'O',
		});

		const buttonPlay = this.createDOMElement({
			tagName: 'button',
			className: 'options__button options__play-button',
			dataSet: 'buttonPlay',
			textContent: 'Play',
		});

		const divGameOver = this.createDOMElement({
			tagName: 'div',
			className: 'game__game-over',
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

		document.body.appendChild(main);
	}

	createDOMElement(obj: DOMElement): HTMLElement {
		const { tagName, className, id, dataSet, type, textContent } = obj;
		const htmlElement = document.createElement(tagName);

		if (className !== undefined) htmlElement.className = className;
		if (id !== undefined) htmlElement.id = id;
		if (dataSet !== undefined) htmlElement.dataset[dataSet] = '';
		if (type !== undefined && htmlElement instanceof HTMLInputElement)
			htmlElement.type = type;
		if (textContent !== undefined) htmlElement.textContent = textContent;
		return htmlElement;
	}
}
