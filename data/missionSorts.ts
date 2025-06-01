import { MissionSort, MissionSortFunction } from "./types";

const sortChronologically: MissionSortFunction = (missionA, missionB) => missionA.startAt.getTime() - missionB.startAt.getTime();

const missionSorts: MissionSort[] = [
    {
        label: 'Chronologique',
        sort: sortChronologically,
    },
    {
        label: 'Type',
    }
];

export default missionSorts;
