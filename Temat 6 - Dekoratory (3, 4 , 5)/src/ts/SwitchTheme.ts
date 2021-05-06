import { createDOMElement } from './createDOMElement';

enum Theme {
	Dark = 'dark',
	Light = 'light',
}

export class SwitchTheme {
	initializeSwitchTheme() {
		const toggleSwitch = document.querySelector(
			'.theme-switch input[type="checkbox"]'
		) as HTMLInputElement;

		this.checkThemeInLocalStorage(toggleSwitch);

		toggleSwitch.addEventListener('change', this.switchTheme);
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

	switchTheme(e: Event) {
		const target = e.target as HTMLInputElement;

		if (target.checked) {
			document.documentElement.setAttribute('data-theme', Theme.Dark);
			localStorage.setItem('theme', Theme.Dark);
		} else {
			document.documentElement.setAttribute('data-theme', Theme.Light);
			localStorage.setItem('theme', Theme.Light);
		}
	}

	checkThemeInLocalStorage(toggleSwitch: HTMLInputElement) {
		const currentTheme = localStorage.getItem('theme')
			? localStorage.getItem('theme')
			: null;

		if (currentTheme) {
			document.documentElement.setAttribute('data-theme', currentTheme);

			if (currentTheme === Theme.Dark) {
				toggleSwitch.checked = true;
			}
		}
	}
}
