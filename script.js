const chatBox = document.getElementById("chat-box");
    const chatInput = document.getElementById("chat-input");
    const sendButton = document.getElementById("send-button");

    // Load chat history from localStorage
    function loadChatHistory() {
        const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        messages.forEach(msg => {
            const messageElement = document.createElement("div");
            messageElement.classList.add("message");
            messageElement.textContent = msg;
            chatBox.appendChild(messageElement);
        });
    }

    // Save chat history to localStorage
    function saveChatHistory(message) {
        const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        messages.push(message);
        localStorage.setItem('chatMessages', JSON.stringify(messages));
    }

    // Handle message send
    sendButton.addEventListener("click", () => {
        const message = chatInput.value.trim();
        if (message) {
            const messageElement = document.createElement("div");
            messageElement.classList.add("message");
            messageElement.textContent = message;
            chatBox.appendChild(messageElement);
            saveChatHistory(message);
            chatInput.value = '';  // Clear input field
            chatBox.scrollTop = chatBox.scrollHeight;  // Auto scroll to the latest message
        }
    });

    // Initialize chat history
    loadChatHistory();