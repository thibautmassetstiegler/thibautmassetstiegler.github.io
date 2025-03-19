document.addEventListener('DOMContentLoaded', () => {


    const input = document.querySelector('#filter-skills');
    const sidebar = document.querySelector('.sidebar');

    if (!(input instanceof HTMLInputElement))
        return;

    if (!(sidebar instanceof HTMLElement))
        return;

    let timeoutId;

    input.addEventListener('input', () => {
        window.clearTimeout(timeoutId);

        timeoutId = window.setTimeout(() => {
            const searchedSkill = input.value.toLowerCase();

            console.log(searchedSkill);

            sidebar.querySelectorAll(`[data-skill]`).forEach(skillEl => {
                if (!(skillEl instanceof HTMLElement))
                    return;

                const skill = skillEl.dataset.skill!.toLowerCase();

                if (skill.indexOf(searchedSkill) > -1) {
                    skillEl.classList.remove('hide');
                } else {
                    skillEl.classList.add('hide');
                }
            })
        }, 250);
    });
});
