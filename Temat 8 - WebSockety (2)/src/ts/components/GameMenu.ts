import { createDOMElement } from '../createDOMElement';
import { SwitchTheme } from './SwitchTheme';

import logo from '../../img/logo.png';

export class GameMenu extends SwitchTheme {
	menuContainer: HTMLDivElement | null = null;
	gameNavigation: HTMLUListElement | null = null;

	createMenu(): void {
		const menuContainer = createDOMElement({
			tagName: 'nav',
			className: 'menu-container',
		});

		const menuSubcontainer = createDOMElement({
			tagName: 'div',
			className: 'subcontainer',
		});

		const logoImage = createDOMElement({
			tagName: 'img',
			className: 'subcontainer__logo',
			src: logo,
		});

		const gameNavigation = createDOMElement({
			tagName: 'ul',
			className: 'subcontainer__game-navigation',
		});

		const modeSwitch = this.createThemeSwitch();

		menuContainer.appendChild(modeSwitch);
		menuContainer.appendChild(menuSubcontainer);
		menuSubcontainer.appendChild(logoImage);
		menuSubcontainer.appendChild(gameNavigation);

		document.body.appendChild(menuContainer);

		this.menuContainer = <HTMLDivElement>menuContainer;
		this.gameNavigation = <HTMLUListElement>gameNavigation;
	}

	createReferenceToGame(name: string, disabled: boolean): HTMLLIElement {
		let classFormant: string | null;
		const disabledClass: string = disabled ? 'disabled' : '';

		switch (name) {
			case 'Tic Tac Toe':
				classFormant = 'tic-tac-toe';
				break;
			case 'Tetris':
				classFormant = 'tetris';
				break;
			case 'Saper':
				classFormant = 'saper';
				break;
		}

		const game = createDOMElement({
			tagName: 'li',
			className: `game-navigation__game game-navigation__${classFormant} ${disabledClass}`,
		});

		const gameOverlay = createDOMElement({
			tagName: 'div',
			className: `overlay ${classFormant}__overlay`,
			dataSet: 'overlay',
		});

		const gameHeading = createDOMElement({
			tagName: 'h2',
			className: `game-navigation__${classFormant}__heading`,
			textContent: name,
		});

		const gameImageContainer = createDOMElement({
			tagName: 'div',
			className: `game-navigation__${classFormant}__image-container`,
		});

		const gameImage = createDOMElement({
			tagName: 'div',
			className: `game-navigation__${classFormant}__image`,
		});

		game.appendChild(gameOverlay);
		game.appendChild(gameHeading);
		gameImageContainer.appendChild(gameImage);
		game.appendChild(gameImageContainer);

		return <HTMLLIElement>game;
	}
}
