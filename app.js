function sendMessage() {
    const input = document.getElementById('inputMessage');
    const message = input.value;
    if (message) {
        const messagesDiv = document.getElementById('messages');
        const newMessage = document.createElement('div');
        newMessage.textContent = message;
        messagesDiv.appendChild(newMessage);
        input.value = '';  // clear input field
        messagesDiv.scrollTop = messagesDiv.scrollHeight;  // scroll to bottom
    }
}
