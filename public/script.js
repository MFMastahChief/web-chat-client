const socket = io();

const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const messagesDiv = document.getElementById("messages");

sendButton.addEventListener("click", () => {
    const message = messageInput.value;
    if (message) {
        socket.emit("chat-message", message);
        messageInput.value = "";
    }
});

socket.on("chat-message", (message) => {
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
});
