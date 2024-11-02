// Open the report modal and set the reported user's name
function openReportModal(username) {
    document.getElementById('reported-user').textContent = username;
    document.getElementById('report-modal').style.display = 'flex';
}

// Close the report modal
function closeReportModal() {
    document.getElementById('report-modal').style.display = 'none';
}

// Submit the report
function submitReport() {
    const reportedUser = document.getElementById('reported-user').textContent;
    const reason = document.getElementById('report-reason').value;
    const details = document.getElementById('report-details').value;

    const report = {
        reportedUser,
        reason,
        details,
        timestamp: new Date().toISOString()
    };

    let reports = JSON.parse(localStorage.getItem('reports')) || [];
    reports.push(report);
    localStorage.setItem('reports', JSON.stringify(reports));

    alert('Report submitted successfully');
    closeReportModal();
}

// Example function for sending a message
function sendMessage() {
    const message = document.getElementById('message-input').value;
    if (message) {
        const chatMessages = document.getElementById('chat-messages');
        const newMessage = document.createElement('div');
        newMessage.className = 'chat-message';
        newMessage.innerHTML = `<p><strong>You:</strong> ${message}</p>`;
        chatMessages.appendChild(newMessage);
        document.getElementById('message-input').value = '';
    }
}
