import './main.scss';

let socket = new WebSocket('ws://localhost:8080');

socket.onmessage = function (e) {
	const messagesContainer = document.getElementById('messages-container');
	const item = createMessage(e.data);
	messagesContainer?.appendChild(item);
};

document.getElementById('submit-button').addEventListener('click', () => {
	const typingWindow = document.getElementById(
		'typing-window'
	) as HTMLInputElement;
	const typingWindowValue = typingWindow.value;

	socket.send(typingWindowValue);

	typingWindow.value = '';
});

const createMessage = (content: string): HTMLLIElement => {
	const messageContainer = document.createElement('li');
	messageContainer.className = 'message-container';

	const userAndMessageContainer = document.createElement('div');
	userAndMessageContainer.className = 'user-and-message';

	const userName = document.createElement('span');
	userName.className = 'user-name';
	userName.textContent = 'Użytkownik';

	const message = document.createElement('span');
	message.className = 'message';
	message.textContent = content;

	const time = document.createElement('span');
	time.className = 'time';
	time.textContent = getTime();

	userAndMessageContainer.appendChild(userName);
	userAndMessageContainer.appendChild(message);
	messageContainer.appendChild(userAndMessageContainer);
	messageContainer.appendChild(time);

	return messageContainer;
};

const getTime = (): string => {
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();

	const time = `${hours}:${minutes}`;

	return time;
};
