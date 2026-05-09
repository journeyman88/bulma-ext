class BulmaMessage {
    constructor(node, duration) {
        this.message = node;
        this.duration = duration;
        this.button = this.message.querySelector('.delete');
        this.closeHandler = () => this.closeMessage();
        this.init();
    }
    init() {
        if (this.button) this.button.addEventListener('click', this.closeHandler);
        if ((this.duration) && (this.duration > 0 ))
        {
            setTimeout(this.closeHandler, this.duration);
        }
        this.message.classList.toggle('is-visible');
    }
    closeMessage() {
        this.message.classList.toggle('is-visible');
        setTimeout(() => this.destroy(), 1000);
    }
    destroy() {
        this.message.removeEventListener('click', this.closeHandler);
        this.message.remove();
    }
}

class BulmaToast {
    constructor(node) {
        this.toast = node;
        this.defaultDuration = this.toast.dataset.duration;
        if (!(this.defaultDuration)) {
            this.defaultDuration = 0;
        }
    }

    appendMessage(message, colorClass, duration) {
        const item = document.createElement('div');
        item.className = `toast-item notification ${colorClass}`;
        item.innerHTML = `<button class="delete"></button>${message}`;
        this.toast.appendChild(item);
        let realDuration = this.defaultDuration;
        if (duration) {
            realDuration = duration;
        }
        new BulmaMessage(item, realDuration);
    }

}


document.addEventListener('DOMContentLoaded', () => {
    window.toasters = {};
    document.querySelectorAll('.toast-container').forEach(n => {
        const toast = new BulmaToast(n);
        window.toasters[n.id] = toast;
    });
});
