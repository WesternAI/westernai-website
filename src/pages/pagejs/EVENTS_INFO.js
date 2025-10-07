import ainnovation from '../../assets/events/ainnovation-logo-colour.png'

const EVENTS_INFO = [
    {
        title: 'AInnovation',
        logo: ainnovation,
        date: 'March 15-17, 2024',
        location: 'Western University',
        description: 'Our flagship AI innovation competition that brings together students, researchers, and industry professionals for three days of intensive problem-solving, learning, and networking. Teams compete to develop cutting-edge AI solutions for real-world challenges.',
        features: [
            '48-hour intensive hackathon format',
            'Industry mentors and expert judges',
            'Prizes worth $10,000+ in total value',
            'Networking opportunities with tech leaders',
            'Workshops on latest AI technologies',
            'Career fair with top companies'
        ],
        data: {
            prizes: ['$5,000', '$3,000', '$2,000'],
            winners: ['Team NeuralNet', 'Team DataDriven', 'Team AIInnovators'],
            metrics: [
                '200+ participants',
                '50+ teams',
                '15+ industry partners',
                '24+ hours of coding'
            ]
        },
    },
    {
        title: 'DataQuest Workshop Series',
        logo: ainnovation, // Using same logo for now
        date: 'Every Friday, 6:00 PM',
        location: 'Western Science Centre',
        description: 'Weekly hands-on workshops covering fundamental to advanced topics in data science, machine learning, and artificial intelligence. Perfect for beginners and those looking to sharpen their skills.',
        features: [
            'Beginner to advanced skill levels',
            'Hands-on coding sessions',
            'Guest speakers from industry',
            'Project-based learning',
            'Certificate of completion',
            'Free for all members'
        ],
        data: {
            prizes: ['Certificates', 'Networking', 'Skills'],
            winners: ['All Participants'],
            metrics: [
                '50+ attendees per session',
                '20+ workshops per semester',
                '10+ guest speakers',
                '100% satisfaction rate'
            ]
        }
    },
    {
        title: 'CUCAI Conference',
        logo: ainnovation, // Using same logo for now
        date: 'April 20-22, 2024',
        location: 'University of Waterloo',
        description: 'Represent Western AI at the Canadian Undergraduate Conference on Artificial Intelligence. Present your research, attend talks by leading AI researchers, and compete in the national AI competition.',
        features: [
            'Research paper presentations',
            'Keynote talks by AI pioneers',
            'National AI competition',
            'Networking with students across Canada',
            'Industry panel discussions',
            'Career opportunities showcase'
        ],
        data: {
            prizes: ['Research Recognition', 'Competition Trophies', 'Networking'],
            winners: ['Western AI Team'],
            metrics: [
                '500+ attendees',
                '50+ universities',
                '100+ research papers',
                '20+ industry partners'
            ]
        }
    },
]

export default EVENTS_INFO