import { createDOMElement } from './createDOMElement';

export class SwitchTheme {
	initializeSwitchTheme() {
		const toggleSwitch = document.querySelector(
			'.theme-switch input[type="checkbox"]'
		) as HTMLElement;

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
			document.documentElement.setAttribute('data-theme', 'dark');
		} else {
			document.documentElement.setAttribute('data-theme', 'light');
		}
	}
}
