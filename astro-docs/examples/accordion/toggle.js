class BulmaAccordion {
    constructor(node) {
        this.accordion = node;
        this.button = this.accordion.querySelector('.toggle');
        this.init();
    }
    init() {
        if (this.button) this.button.addEventListener('click', () => this.togglePanel());
    }
    togglePanel() {
        this.accordion.classList.toggle('is-active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.accordion').forEach(n => new BulmaAccordion(n));
});