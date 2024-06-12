import Bot1 from '../chatbot/bots/bot1';
import Bot2 from '../chatbot/bots/bot2';
import Bot3 from '../chatbot/bots/bot3';

const bots = [new Bot1(), new Bot2(), new Bot3()];

document.getElementById('sendButton').addEventListener('click', sendMessage);
document.getElementById('messageInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

async function sendMessage() {
  const input = document.getElementById('messageInput');
  const message = input.value.trim();
  console.log('Message:', message); // Ajoutez ceci pour le débogage
  if (message === '') return;
  input.value = '';

  displayMessage('Vous', message, 'user-message');

  for (const bot of bots) {
    const response = await bot.respond(message);
    console.log(`${bot.name} response:`, response); // Ajoutez ceci pour le débogage
    if (response) {
      displayMessage(bot.name, response, 'bot-message');
    }
  }
}

function displayMessage(sender, message, className) {
  const chatBox = document.getElementById('chatBox');
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', className);
  messageElement.textContent = `${sender}: ${message}`;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}
