document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#filter-skills');
    const sidebar = document.querySelector('.sidebar');

    if (!(input instanceof HTMLInputElement))
        return;

    if (!(sidebar instanceof HTMLElement))
        return;

    const filterSkills = (query: string) => {
        const lowerQuery = query.toLowerCase();

        sidebar.querySelectorAll('[data-skill]').forEach(el => {
            if (!(el instanceof HTMLElement)) return;

            const skill = el.dataset.skill?.toLowerCase() ?? '';
            const label = el.textContent?.toLowerCase() ?? '';
            const isVisible = skill.includes(lowerQuery) || label.includes(lowerQuery);

            el.classList.toggle('hide', !isVisible);
        });
    };

    let timeoutId;
    const timeout = 250;

    input.addEventListener('input', () => {
        window.clearTimeout(timeoutId);
        timeoutId = setTimeout(() => filterSkills(input.value), timeout);
    });
});
