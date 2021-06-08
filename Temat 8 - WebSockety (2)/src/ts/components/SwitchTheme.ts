import { createDOMElement } from '../createDOMElement';

import { Theme } from '../enums/theme.enum';

export class SwitchTheme {
	toggleSwitch: HTMLInputElement | null = null;

	initializeSwitchTheme(): void {
		this.handleToggleSwitch();
		this.addToggleSwitchEventListener();
		this.checkThemeInLocalStorage();
	}

	handleToggleSwitch(): void {
		this.toggleSwitch = <HTMLInputElement>(
			document.querySelector('.theme-switch input[type="checkbox"]')
		);
	}

	addToggleSwitchEventListener(): void {
		this.toggleSwitch.addEventListener('change', this.switchTheme);
	}

	switchTheme(e: Event): void {
		const target = <HTMLInputElement>e.target;

		if (target.checked) {
			document.documentElement.setAttribute('data-theme', Theme.Dark);
			localStorage.setItem('theme', Theme.Dark);
		} else {
			document.documentElement.setAttribute('data-theme', Theme.Light);
			localStorage.setItem('theme', Theme.Light);
		}
	}

	checkThemeInLocalStorage(): void {
		const currentTheme: string | null = localStorage.getItem('theme')
			? localStorage.getItem('theme')
			: null;

		if (currentTheme) {
			document.documentElement.setAttribute('data-theme', currentTheme);

			if (currentTheme === Theme.Dark) {
				this.toggleSwitch.checked = true;
			}
		}
	}

	createThemeSwitch(): HTMLElement {
		const themeSwitch = createDOMElement({
			tagName: 'label',
			className: 'theme-switch',
			forValue: 'checkbox',
		});

		const input = createDOMElement({
			tagName: 'input',
			type: 'checkbox',
			id: 'checkbox',
		});

		const div = createDOMElement({
			tagName: 'div',
			className: 'slider round',
		});

		themeSwitch.appendChild(input);
		themeSwitch.appendChild(div);

		return themeSwitch;
	}
}
