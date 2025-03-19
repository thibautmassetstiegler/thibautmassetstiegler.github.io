import { Mission, Skill, SkillGroup } from "../../data/types";

const mapSkill = (skills: Skill[]) => skillId => skills.find(skill => skill.id === skillId);

const formatDate = (date: Date): string => Intl.DateTimeFormat('fr-FR', { month: 'long', year: 'numeric' }).format(date);

export const sortSkills = (skills: Skill[]): Skill[] => skills.sort((skillA, skillB) => {
    if (skillB.level !== skillA.level) {
        return skillB.level - skillA.level;
    }

    return skillA.name.localeCompare(skillB.name);
});

export const enrichSkillGroups = (skillGroups: SkillGroup[], skills: Skill[]) => skillGroups.map(skillGroup => ({
    ...skillGroup,
    skills: sortSkills(
        skillGroup.skillIds
            .map(mapSkill(skills))
            .filter(skill => !!skill),
    ),
}));

export const enrichMissions = (missions: Mission[], skills: Skill[]) => missions.map(mission => ({
    ...mission,
    skills: mission.skillIds
        .map(mapSkill(skills))
        .filter(skill => !!skill),
    moreSkills: mission.moreSkillIds?.map(mapSkill(skills)).filter(skill => !!skill),
    skillsDataset: JSON.stringify(mission.skillIds.concat(mission.moreSkillIds || [])),
    formattedStartAt: formatDate(mission.startAt),
    formattedEndAt: formatDate(mission.endAt),
}));
