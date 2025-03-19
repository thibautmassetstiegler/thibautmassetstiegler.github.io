

document.addEventListener('DOMContentLoaded', () => {
    const missionsSection = document.querySelector('#missions');
    const sidebar = document.querySelector('.sidebar');

    if (!(sidebar instanceof HTMLElement))
        return;

    const selectedSkills = new Proxy([] as string[], {
        set(target, prop, value) {
            target[prop] = value;

            if (prop === 'length') {
                updateSelectedFilterCount();

                filterMissions();
            }

            return true;
        }
    });

    const displayParentMission = (element: HTMLElement) => {
        const parentMissionEl = element.closest('.mission');

        if (!(parentMissionEl instanceof HTMLElement)) {
            return;
        }

        parentMissionEl.style.display = 'block';

        displayParentMission(parentMissionEl);
    }

    const updateSelectedFilterCount = () => {
        document.querySelectorAll('.selected-filter-count').forEach(el => {
            if (!(el instanceof HTMLElement)) {
                return;
            }

            if (selectedSkills.length === 0) {
                el.textContent = '';
                return;
            }

            el.textContent = selectedSkills.length.toString();
        })
    }

    const filterMissions = () => {
        missionsSection?.querySelectorAll('[data-skills]').forEach(missionSection => {
            if (!(missionSection instanceof HTMLElement)) {
                return;
            }

            if (!selectedSkills.length) {
                missionSection.classList.remove('hidden');

                return;
            }

            const missionSkills = JSON.parse(missionSection.dataset.skills!);

            if (missionSkills.some(skill => selectedSkills.includes(skill))) {
                missionSection.classList.remove('hidden');
            } else {
                missionSection.classList.add('hidden');
            }
        });
    };

    const clearSelectedSkills = () => {
        missionsSection?.querySelectorAll('[data-skill]').forEach(el => {
            if (!(el instanceof HTMLElement)) {
                return;
            }

            const skill = el.dataset.skill!;

            unselectSkill(skill);
        });
    };

    const selectSkill = (skill: string) => {
        selectedSkills.push(skill);

        window.location.hash = selectedSkills.join(',');

        document.querySelectorAll(`[data-skill="${skill}"]:not(.active)`).forEach(el => {
            if (!(el instanceof HTMLElement)) {
                return;
            }

            el.classList.add('active');
        });
    };

    const toggleSkill = (skill: string) => {
        if (selectedSkills.includes(skill)) {
            unselectSkill(skill);
        } else {
            selectSkill(skill);
        }
    };

    const unselectSkill = (skill: string) => {
        selectedSkills.splice(selectedSkills.indexOf(skill), 1);

        window.location.hash = selectedSkills.join(',');

        document.querySelectorAll(`[data-skill="${skill}"].active`).forEach(el => {
            if (!(el instanceof HTMLElement)) {
                return;
            }

            el.classList.remove('active');
        });
    };

    if (window.location.hash.length > 1) {
        window.location.hash.slice(1).split(',').forEach(skill => {
            selectedSkills.push(skill);

            document.querySelectorAll(`[data-skill="${skill}"]`).forEach(el => el.classList.add('active'));
        });
    }

    document.querySelectorAll('input[name="skills"]').forEach(skillInputEl => {
        if (!(skillInputEl instanceof HTMLInputElement)) {
            return;
        }

        skillInputEl.addEventListener('change', () => {
            skillInputEl.closest('.skill')!.classList.toggle('active');

            const skill = skillInputEl.value;

            toggleSkill(skill);
        });
    });

    document.querySelectorAll('.clear-selected-skills').forEach(
        el => el.addEventListener('click', clearSelectedSkills)
    );
});
