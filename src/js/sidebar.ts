document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');

    const open = () => {
        sidebar?.classList.add('show');
    };

    const close = () => {
        sidebar?.classList.remove('show');
    }

    document.querySelector('body')?.addEventListener('click', e => {
        if (!(e.target instanceof HTMLElement)) {
            return;
        }

        if (e.target.classList.contains('open-sidebar') || e.target.closest('.open-sidebar')) {
            open();
        } else if (e.target.classList.contains('close-sidebar') || !e.target.closest('.sidebar')) {
            close();
        }
    });
});
