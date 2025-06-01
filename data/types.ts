export enum SkillId {
    AWS = 'aws',
    Apache = 'apache',
    Bash = 'sh',
    Cloudways = 'cloudways',
    CSS = 'css',
    Docker = 'docker',
    Elasticsearch = 'elasticsearch',
    Filament = 'filament',
    GitHub = 'github',
    GitHubActions = 'githubactions',
    GitLab = 'gitlab',
    Grunt = 'grunt',
    Gulp = 'gulp',
    HTML = 'html',
    Heroku = 'heroku',
    JavaScript = 'js',
    Joomla = 'joomla',
    Laravel = 'laravel',
    Livewire = 'livewire',
    MariaDB = 'mariadb',
    MongoDB = 'mongodb',
    MySQL = 'mysql',
    NestJS = 'nest',
    Nginx = 'nginx',
    Nuxt = 'nuxt',
    OVHCloud = 'ovh',
    PHP = 'php',
    Parcel = 'parcel',
    PostgreSQL = 'pgsql',
    Python = 'py',
    React = 'react',
    ReactNative = 'reactnative',
    Redis = 'redis',
    Ruby = 'rb',
    RubyOnRails = 'ror',
    SQLite = 'sqlite',
    Sass = 'sass',
    Solr = 'solr',
    Symfony = 'sf',
    TransactSQL = 'tsql',
    TypeScript = 'ts',
    VueJS = 'vue',
    Varnish = 'varnish',
    Vite = 'vite',
    Webpack = 'webpack',
    WordPress = 'wp',
    WordPressAdvancedAds = 'wpadvads',
    WordPressAdvancedCustomFields = 'wpacf',
    WordPressFacetWP = 'wpfacet',
    WordPressTimber = 'wptimber',
    WordPressUltimateMember = 'wpum',
    WordPressWPCLI = 'wpcli',
    WordPressYoast = 'wpyoast',
};

export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export type Skill = {
    id: SkillId,
    name: string;
    level: SkillLevel;
};

export type SkillGroup = {
    title: string;
    skillIds: SkillId[];
};

export type Mission = {
    title: string;
    company?: string;
    link?: string;
    startAt: Date;
    endAt: Date;
    tasks: string[];
    skillIds: SkillId[];
    moreSkillIds?: SkillId[];
    context?: MissionContext;
    theme?: MissionTheme;
};

export type MissionSortFunction = (missionA: Mission, missionB: Mission) => number;

export type MissionSort = {
    label: string;
    sort: MissionSortFunction;
}

export enum MissionContext {
    Agency = 'missionContext.agency',
    Media = 'missionContext.media',
    SaaS = 'missionContext.saas',
    School = 'missionContext.school',
};

export enum MissionTheme {
    Collaboration = 'missionTheme.collaboration',
    Mentoring = 'missionTheme.mentoring',
    Performance = 'missionTheme.performance',
    SEO = 'missionTheme.seo',
}
