import { describe, it, expect } from 'vitest';
import { enrichSkillGroups, enrichMissions, sortSkills } from '../../../src/js/utils';
import { Mission, Skill, SkillGroup, SkillId } from '../../../data/types';

const SkillHTML: Skill = { id: SkillId.HTML, name: 'HTML', level: 5 };
const SkillCSS: Skill = { id: SkillId.CSS, name: 'CSS', level: 5 };
const SkillPHP: Skill = { id: SkillId.PHP, name: 'PHP', level: 5 };
const SkillRuby: Skill = { id: SkillId.Ruby, name: 'Ruby', level: 3 };
const SkillPython: Skill = { id: SkillId.Python, name: 'Python', level: 2 };

describe('enrichSkillGroups', () => {
  it('should enrich skill groups with corresponding skills', () => {
    const skillGroups: SkillGroup[] = [
      { title: 'Frontend', skillIds: [SkillId.HTML, SkillId.CSS] },
      { title: 'Backend', skillIds: [SkillId.PHP] },
    ];

    const skills: Skill[] = [SkillHTML, SkillCSS, SkillPHP];

    const result = enrichSkillGroups(skillGroups, skills);

    expect(result).toMatchObject([
      {
        title: 'Frontend',
        skillIds: [SkillId.HTML, SkillId.CSS],
        skills: [SkillCSS, SkillHTML],
      },
      {
        title: 'Backend',
        skillIds: [SkillId.PHP],
        skills: [SkillPHP],
      },
    ]);
  });

  it('should handle missing skills gracefully', () => {
    const skillGroups: SkillGroup[] = [{ title: 'Frontend', skillIds: [SkillId.HTML, SkillId.CSS] }];

    const skills: Skill[] = [SkillHTML];

    const result = enrichSkillGroups(skillGroups, skills);

    expect(result[0].skills).toMatchObject([SkillHTML]);
  });
});

describe('enrichMissions', () => {
  it('should enrich missions with corresponding skills and moreSkills', () => {
    const missions: Mission[] = [
      {
        title: 'Build UI',
        company: 'World Company',
        skillIds: [SkillId.HTML],
        moreSkillIds: [SkillId.CSS],
        startAt: new Date('2024-05'),
        endAt: new Date('2025-05'),
        tasks: [],
      },
    ];

    const skills: Skill[] = [SkillHTML, SkillCSS];

    const result = enrichMissions(missions, skills);

    expect(result).toMatchObject([
      {
        skillIds: [SkillId.HTML],
        moreSkillIds: [SkillId.CSS],
        skills: [SkillHTML],
        moreSkills: [SkillCSS],
        skillsDataset: JSON.stringify([SkillId.HTML, SkillId.CSS]),
      },
    ]);
  });

  it('should handle missions without moreSkillIds', () => {
    const missions: Mission[] = [
      {
        title: 'Rework backend',
        company: 'World Company',
        skillIds: [SkillId.PHP],
        startAt: new Date('2024-05'),
        endAt: new Date('2025-05'),
        tasks: [],
      },
    ];;
    const skills: Skill[] = [{ id: SkillId.PHP, name: 'PHP', level: 5 }];

    const result = enrichMissions(missions, skills);

    expect(result[0].moreSkills).toBeUndefined();
    expect(result[0].skillsDataset).toBe(JSON.stringify([SkillId.PHP]));
  });

  it('should handle missing skills gracefully', () => {
    const missions: Mission[] = [{
        title: 'Rework backend',
        company: 'World Company',
        skillIds: [SkillId.HTML, SkillId.PHP],
        startAt: new Date('2024-05'),
        endAt: new Date('2025-05'),
        tasks: [],
    }];

    const skills: Skill[] = [SkillHTML];

    const result = enrichMissions(missions, skills);

    expect(result[0].skills).toMatchObject([SkillHTML]);
  });
});

describe('sortSkills', () => {
  it('should sort skill by level then alphabetically', () => {
    const skills: Skill[] = [SkillRuby, SkillPython, SkillCSS, SkillHTML];

    const result = sortSkills(skills);

    expect(result).toStrictEqual([SkillCSS, SkillHTML, SkillRuby, SkillPython]);
  });
});
