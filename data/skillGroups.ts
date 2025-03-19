import { SkillGroup, SkillId } from './types';

const skillGroups: SkillGroup[] = [
    {
        title: "Langages",
        skillIds: [
            SkillId.Python,
            SkillId.PHP,
            SkillId.JavaScript,
            SkillId.HTML,
            SkillId.CSS,
            SkillId.TypeScript,
            SkillId.Bash,
            SkillId.Ruby,
        ]
    },
    {
        title: "Frameworks / CMS",
        skillIds: [
            SkillId.Laravel,
            SkillId.WordPress,
            SkillId.VueJS,
            SkillId.Symfony,
            SkillId.React,
            SkillId.NestJS,
            SkillId.ReactNative,
            SkillId.RubyOnRails,
            SkillId.Joomla,
        ],
    },
    {
        title: "Data store",
        skillIds: [
            SkillId.MariaDB,
            SkillId.MySQL,
            SkillId.PostgreSQL,
            SkillId.SQLite,
            SkillId.TransactSQL,
            SkillId.Redis,
            SkillId.Solr,
            SkillId.Elasticsearch,
            SkillId.MongoDB,
        ],
    },
    {
        title: 'DevOps',
        skillIds: [
            SkillId.Cloudways,
            SkillId.Heroku,
            SkillId.AWS,
            SkillId.GitHub,
            SkillId.GitLab,
            SkillId.OVHCloud,
        ]
    },
    {
        title: 'WordPress',
        skillIds: [
            SkillId.WordPressAdvancedCustomFields,
            SkillId.WordPressUltimateMember,
            SkillId.WordPressTimber,
            SkillId.WordPressWPCLI,
            SkillId.WordPressAdvancedAds,
            SkillId.WordPressYoast,
        ]
    },
    {
        title: 'Builders',
        skillIds: [
            SkillId.Parcel,
            SkillId.Webpack,
            SkillId.Vite,
            SkillId.Grunt,
            SkillId.Gulp,
        ]
    }
];

export default skillGroups;
