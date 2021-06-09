import './main.scss';

let socket = new WebSocket('ws://localhost:8080');

socket.onmessage = (e) => {
	const messagesContainer = <HTMLUListElement>(
		document.getElementById('messageContainer')
	);
	const item: HTMLLIElement = createMessage(e.data);
	messagesContainer?.appendChild(item);
};

document.getElementById('submitButton').addEventListener('click', () => {
	const typingWindow = <HTMLTextAreaElement>(
		document.getElementById('typingWindow')
	);
	const typingWindowValue: string = typingWindow.value;

	socket.send(typingWindowValue);

	typingWindow.value = '';
});

const createMessage = (content: string): HTMLLIElement => {
	const messageContainer: HTMLLIElement = document.createElement('li');
	messageContainer.className = 'single-message-container';

	const userAndMessageContainer: HTMLDivElement =
		document.createElement('div');
	userAndMessageContainer.className = 'user-and-message';

	const userName: HTMLSpanElement = document.createElement('span');
	userName.className = 'user-name';
	userName.textContent = 'Użytkownik';

	const message: HTMLSpanElement = document.createElement('span');
	message.className = 'message';
	message.textContent = content;

	const time: HTMLSpanElement = document.createElement('span');
	time.className = 'time';
	time.textContent = getTime();

	userAndMessageContainer.appendChild(userName);
	userAndMessageContainer.appendChild(message);
	messageContainer.appendChild(userAndMessageContainer);
	messageContainer.appendChild(time);

	return messageContainer;
};

const getTime = (): string => {
	const date: Date = new Date();
	const hours: number = date.getHours();
	const minutes: number = date.getMinutes();

	const checkMinutes: string | number =
		minutes.toString().length > 1 ? minutes : `0${minutes}`;

	const time: string = `${hours}:${checkMinutes}`;

	return time;
};
