class BulmaCarousel {
    constructor(node) {
        this.element = node;
        this.container = this.element.querySelector('.slider-container');
        this.items = this.element.querySelectorAll('.slider-item');
        this.prev = this.element.querySelector('.slider-navigation-previous');
        this.next = this.element.querySelector('.slider-navigation-next');
        this.pagination = this.element.querySelectorAll('.slider-page');
        this.isVertical = this.container.classList.contains('is-vertical');
        this.currentIndex = 0;
        this.init();
    }
    init() {
        if (this.prev) this.prev.addEventListener('click', () => this.move(-1));
        if (this.next) this.next.addEventListener('click', () => this.move(1));
        this.pagination.forEach(page => {
            page.addEventListener('click', () => {
                this.currentIndex = parseInt(page.dataset.index);
                this.update();
            });
        });
        window.addEventListener('resize', () => this.update());
    }
    move(delta) {
        this.currentIndex = (this.currentIndex + delta + this.items.length) % this.items.length;
        this.update();
    }
    update() {
        this.items.forEach(e => this.transition(e));
        this.pagination.forEach((page, i) => {
            page.classList.toggle('is-active', i === this.currentIndex);
        });
    }
    transition(item) {
        var dir = 'X';
        if (this.isVertical) {
            dir = 'Y';
        }
        item.style.transform = `translate${dir}(${this.currentIndex * -100}%)`;
        if (this.isVertical) {
            for (let i = 0; i < Math.min(this.items.length, this.currentIndex); i++) {

                this.items[i].style.transform = `translate${dir}(${(this.items.length - this.currentIndex) * 100}%)`;
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.slider').forEach(n => new BulmaCarousel(n));
});