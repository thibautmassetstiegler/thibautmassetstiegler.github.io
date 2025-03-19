import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import restart from "vite-plugin-restart";

import skills from './data/skills';
import skillGroups from './data/skillGroups';
import missions from './data/missions';

import { enrichSkillGroups, enrichMissions } from './src/js/utils';

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: "src/partials",
      context: {
        title: 'CV - Thibaut Masset Stiegler',
        skillGroups: enrichSkillGroups(skillGroups, skills),
        missions: enrichMissions(missions, skills),
      }
    }),
    restart({
      restart: ["src/partials/**/*.hbs"] // Watch for changes in the partials folder
    })
  ],
});
