function sendMessage() {
    const input = document.getElementById('messageInput');
    const messageText = input.value;

    if (messageText.trim() !== "") {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.textContent = messageText;

        document.getElementById('messages').appendChild(messageElement);

        input.value = "";
    }
}

document.getElementById('messageInput').addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
});