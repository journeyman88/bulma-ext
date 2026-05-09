class BulmaQuickview {

    constructor(node) {
        this.quickview = node;
        this.dismissTriggers = this.quickview.querySelectorAll('[data-dismiss="quickview"]');
        this.closeHandler = () => this.hideView();
        this.init();
    }

    init() {
        if(this.dismissTriggers) {
            this.dismissTriggers.forEach(btn => {
                btn.addEventListener('click', this.closeHandler);
            });
        }
    }

    showView() {
        this.quickview.classList.add('is-active');
    }

    hideView() {
        this.quickview.classList.remove('is-active');
    }

    destroy() {
        this.dismissTriggers.forEach(btn => {
            btn.removeEventListener('click', this.closeHandler);
        });
    }

}


document.addEventListener('DOMContentLoaded', () => {
    window.quickviews = {};
    document.querySelectorAll('.quickview').forEach(n => {
        const qv = new BulmaQuickview(n);
        window.quickviews[n.id] = qv;
    });
});
