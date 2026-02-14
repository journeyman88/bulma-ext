function triggerLoader(id) {
    const loader = document.getElementById(id);
    loader.classList.add('is-active');
    setTimeout(() => {
        loader.classList.remove('is-active');
    }, 2000);
}