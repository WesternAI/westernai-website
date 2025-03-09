import ainnovation from '../../assets/events/ainnovation-logo-colour.png'

import testImage from "../../assets/events/paris.jpg";

const EVENTS_INFO = [
    {
        competition: true,
        title: 'AInnovation',
        logo: ainnovation,
        date: '2021-01-01',
        description: 'This is the first event',
        
        // competition result data
        prizes: [1,2,3],
        winners: ['Team 1', 'Team 2', 'Team 3'],
        teamImgs: [testImage, testImage, testImage]
    },
    {
        competition: false,
        title: 'DataQuest',
        date: '2021-01-02',
        description: 'This is the second event',
    },
    {
        competition: false,
        title: 'CUCAI',
        date: '2021-01-03',
        description: 'This is the third event',
    },
]

export default EVENTS_INFO