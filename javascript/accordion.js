// accordion.js
export function accordion(items) {
    items.forEach(item => {
        item.addEventListener('click', function () {
            items.forEach(i => {
                if (i !== this && i.classList.contains('show')) {
                    i.classList.remove('show');
                }
            });
            this.classList.toggle('show');
        });
    });
}
