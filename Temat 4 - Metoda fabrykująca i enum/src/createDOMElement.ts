interface DOMElement {
	className?: string | undefined;
	dataSet?: string | undefined;
	id?: string | undefined;
	tagName: keyof HTMLElementTagNameMap;
	textContent?: string | undefined;
	type?: string | undefined;
	src?: string | undefined;
}

export const createDOMElement = (obj: DOMElement): HTMLElement => {
	const { tagName, className, id, dataSet, type, textContent, src } = obj;
	const htmlElement = document.createElement(tagName);

	if (className !== undefined) htmlElement.className = className;
	if (id !== undefined) htmlElement.id = id;
	if (dataSet !== undefined) htmlElement.dataset[dataSet] = '';
	if (type !== undefined && htmlElement instanceof HTMLInputElement)
		htmlElement.type = type;
	if (textContent !== undefined) htmlElement.textContent = textContent;
	if (src !== undefined && htmlElement instanceof HTMLImageElement)
		htmlElement.src = src;
	return htmlElement;
};
