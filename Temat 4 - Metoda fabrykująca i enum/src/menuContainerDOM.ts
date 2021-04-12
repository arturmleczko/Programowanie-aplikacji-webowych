import { createDOMElement } from './createDOMElement';

import logo from './logo.png';

export const createMenuContainerDOM = () => {
	const menu = createDOMElement({
		tagName: 'nav',
		className: 'menu',
	});

	const menuContainer = createDOMElement({
		tagName: 'div',
		className: 'menu__container',
	});

	const logoImage = createDOMElement({
		tagName: 'img',
		className: 'menu-container__logo',
		src: logo,
	});

	const gamesContainer = createDOMElement({
		tagName: 'ul',
		className: 'menu-container__games',
	}) as HTMLUListElement;

	menu.appendChild(menuContainer);
	menuContainer.appendChild(logoImage);
	menuContainer.appendChild(gamesContainer);
	return { menu, gamesContainer };
};

export const createReferenceToGame = (name: string) => {
	let classFormant: string | undefined = undefined;

	switch (name) {
		case 'Tic Tac Toe':
			classFormant = 'tic-tac-toe';
			break;
		case 'Battle Ships':
			classFormant = 'battle-ships';
			break;
		case 'Space Ships':
			classFormant = 'space-ships';
			break;
	}

	const game = createDOMElement({
		tagName: 'li',
		className: `games__${classFormant}`,
	});

	const overlayGame = createDOMElement({
		tagName: 'div',
		className: `${classFormant}__overlay`,
	});

	const headingGame = createDOMElement({
		tagName: 'h2',
		className: `${classFormant}__heading`,
		textContent: name,
	});

	const imageContainerGame = createDOMElement({
		tagName: 'div',
		className: `${classFormant}__image-container`,
	});

	const imageGame = createDOMElement({
		tagName: 'div',
		className: `${classFormant}__image`,
	});

	game.appendChild(overlayGame);
	game.appendChild(headingGame);
	imageContainerGame.appendChild(imageGame);
	game.appendChild(imageContainerGame);

	return game;
};
