import Bot1 from '../bots/bot1';
import Bot2 from '../bots/bot2';
import Bot3 from '../bots/bot3';

const bots = [new Bot1(), new Bot2(), new Bot3()];

document.getElementById('sendButton').addEventListener('click', sendMessage);
document.getElementById('messageInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

async function sendMessage() {
  const input = document.getElementById('messageInput');
  const message = input.value;
  input.value = '';

  for (const bot of bots) {
    const response = await bot.respond(message);
    if (response) {
      displayMessage(bot.name, response);
    }
  }
}

function displayMessage(sender, message) {
  const chatBox = document.getElementById('chatBox');
  const messageElement = document.createElement('div');
  messageElement.textContent = `${sender}: ${message}`;
  chatBox.appendChild(messageElement);
}
