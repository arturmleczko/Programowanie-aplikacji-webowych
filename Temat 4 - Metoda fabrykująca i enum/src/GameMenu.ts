import { createDOMElement } from './createDOMElement';

import logo from './logo.png';

export class GameMenu {
	menuContainer: HTMLElement;
	gameNavigation: HTMLElement;

	createMenu(): void {
		const menuContainer = createDOMElement({
			tagName: 'nav',
			className: 'menu-container',
		});

		const menuSubContainer = createDOMElement({
			tagName: 'div',
			className: 'menu-container__sub-container',
		});

		const logoImage = createDOMElement({
			tagName: 'img',
			className: 'sub-container__logo',
			src: logo,
		});

		const gameNavigation = createDOMElement({
			tagName: 'ul',
			className: 'sub-container__game-navigation',
		}) as HTMLUListElement;

		menuContainer.appendChild(menuSubContainer);
		menuSubContainer.appendChild(logoImage);
		menuSubContainer.appendChild(gameNavigation);

		document.body.appendChild(menuContainer);

		this.menuContainer = menuContainer;
		this.gameNavigation = gameNavigation;
	}

	createReferenceToGame(name: string): HTMLElement {
		let classFormant: string | undefined;

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
			className: `game-navigation-container__${classFormant}`,
		});

		const gameOverlay = createDOMElement({
			tagName: 'div',
			className: `${classFormant}__overlay`,
		});

		const gameHeading = createDOMElement({
			tagName: 'h2',
			className: `${classFormant}__heading`,
			textContent: name,
		});

		const gameImageContainer = createDOMElement({
			tagName: 'div',
			className: `${classFormant}__image-container`,
		});

		const gameImage = createDOMElement({
			tagName: 'div',
			className: `${classFormant}__image`,
		});

		game.appendChild(gameOverlay);
		game.appendChild(gameHeading);
		gameImageContainer.appendChild(gameImage);
		game.appendChild(gameImageContainer);

		return game;
	}
}
