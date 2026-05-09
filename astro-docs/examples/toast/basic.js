// Append a message using the container's default duration
window.toasters['my-toaster'].appendMessage('Operation completed!', 'is-success');

// Override with a custom duration (ms)
window.toasters['my-toaster'].appendMessage('Quick alert!', 'is-warning', 1500);

// Sticky toast (duration 0 — close manually via the × button)
window.toasters['my-toaster'].appendMessage('Sticky message.', 'is-info', 0);
