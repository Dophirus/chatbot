import Bot1 from './bots/dictionaryBot';
import Bot2 from './bots/animeBot';
import Bot3 from './bots/weatherBot';

const bots = [new Bot1(), new Bot2(), new Bot3()];

document.addEventListener('DOMContentLoaded', () => {
  function displayBots() {
    const botList = document.getElementById('botList');
    bots.forEach(bot => {
      const botItem = document.createElement('li');
      botItem.textContent = bot.name;
      botItem.className = 'bot-item';
      botList.appendChild(botItem);
    });
  }

  function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.forEach(msg => {
      displayMessage(msg.sender, msg.message, msg.className, msg.timestamp);
    });
  }

  function saveMessage(sender, message, className, timestamp) {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push({ sender, message, className, timestamp });
    localStorage.setItem('messages', JSON.stringify(messages));
  }

  document.getElementById('sendButton').addEventListener('click', sendMessage);
  document.getElementById('messageInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });

  async function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    console.log('Message:', message);
    if (message === '') return;
    input.value = '';

    const timestamp = new Date().toLocaleTimeString();
    displayMessage('Vous', message, 'user-message', timestamp);
    saveMessage('Vous', message, 'user-message', timestamp);

    for (const bot of bots) {
      const response = await bot.respond(message);
      console.log(`${bot.name} response:`, response);
      if (response) {
        displayMessage(bot.name, response, 'bot-message', timestamp);
        saveMessage(bot.name, response, 'bot-message', timestamp);
      }
    }
  }

  function displayMessage(sender, message, className, timestamp) {
    const chatBox = document.getElementById('chatBox');
    if (!chatBox) {
      console.error(`L'élément chatBox est introuvable.`);
      return;
    }

    const messageContainer = document.createElement('div');
    messageContainer.className = `message-container ${className}`;

    if (className === 'bot-message') {
      const avatar = document.createElement('div');
      avatar.className = 'avatar';
      messageContainer.appendChild(avatar);
    }

    const messageElement = document.createElement('div');
    messageElement.className = 'message';

    const messageInfo = document.createElement('div');
    messageInfo.className = 'message-info';
    messageInfo.textContent = `${sender} - ${timestamp}`;

    const messageText = document.createElement('div');
    messageText.textContent = message;

    messageElement.appendChild(messageInfo);
    messageElement.appendChild(messageText);
    messageContainer.appendChild(messageElement);
    chatBox.appendChild(messageContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  const clearButton = document.getElementById('clearButton');
  clearButton.addEventListener('click', () => {
    localStorage.clear();
    alert('Le localStorage a été effacé.');
    const chatBox = document.getElementById('chatBox');
    chatBox.innerHTML = '';
  });

  displayBots();
  loadMessages();
});
