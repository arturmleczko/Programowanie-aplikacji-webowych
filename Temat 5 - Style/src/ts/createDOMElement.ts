interface DOMElement {
	className?: string | undefined;
	dataSet?: string | undefined;
	forValue?: string | undefined;
	id?: string | undefined;
	tagName: keyof HTMLElementTagNameMap;
	textContent?: string | undefined;
	type?: string | undefined;
	src?: string | undefined;
}

export const createDOMElement = (objWithAttrs: DOMElement): HTMLElement => {
	const {
		tagName,
		className,
		forValue,
		id,
		dataSet,
		type,
		textContent,
		src,
	} = objWithAttrs;
	const htmlElement = document.createElement(tagName);

	if (className !== undefined) htmlElement.className = className;
	if (dataSet !== undefined) htmlElement.dataset[dataSet] = '';
	if (forValue !== undefined && htmlElement instanceof HTMLLabelElement)
		htmlElement.htmlFor = forValue;
	if (id !== undefined) htmlElement.id = id;
	if (textContent !== undefined) htmlElement.textContent = textContent;
	if (type !== undefined && htmlElement instanceof HTMLInputElement)
		htmlElement.type = type;
	if (src !== undefined && htmlElement instanceof HTMLImageElement)
		htmlElement.src = src;

	return htmlElement;
};
