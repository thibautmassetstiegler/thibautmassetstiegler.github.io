document.addEventListener('DOMContentLoaded', () => {
    const missions = document.querySelectorAll('.mission:has(.mission__stack__item--more)');

    missions.forEach(mission => {
        if (!(mission instanceof HTMLElement))
            return;

        const missionStack = mission.querySelector('.mission__stack');

        missionStack?.addEventListener('click', (e) => {
            if (!(e.target instanceof HTMLElement))
                return;

            if (e.target.dataset.skill)
                return;

            missionStack.classList.add('mission__stack--show-more');
        })
    });
});
