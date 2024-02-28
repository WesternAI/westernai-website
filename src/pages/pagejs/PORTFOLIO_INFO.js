/*
 * Info for all the WAI portfolios
 */
import pres from '../../assets/portfolio/pres_icon.png';
import pub from '../../assets/portfolio/pub_icon.png';
import hacks from '../../assets/portfolio/hacks_icon.png';
import finance from '../../assets/portfolio/finance_icon.png';
import edu from '../../assets/portfolio/edu_icon.png';
import design from '../../assets/portfolio/design_icon.png';
import comm from '../../assets/portfolio/comms_icon.png';
import dev from '../../assets/portfolio/dev_icon.png';
import flag from '../../assets/portfolio/flag_icon.png';
import proj from '../../assets/portfolio/proj_icon.png';

const PORTFOLIO_INFO = [
    // presidents
    {
        name: "Presidents",
        vps: ["Sophia Ma", "Jacky Liu"],
        img: pres,
        description: 'Co-presidents are responsible for steering the overall vision of Western AI and its members. Co-presidents oversee all portfolios and tie the ideals of all the VPs in respective portfolios.',
    },
    {
        name: 'Communications',
        vps: ['James Yang'],
        img: comm,        
        description: "The communication portfolio maintain WAI's social media and announcing updates, event opportunities to members. The communication portfolio is also responsible of responding to inquiries from students and forwarding them to appropriate portfolios.",
    },
    {
        name: 'Publications',
        vps: ["Aarian Bhakoo", 'Sherry Shu'],
        img: pub,
        description: 'PUBLISH STUFF WOOOO',
    },
    {
        name: 'Hacks',
        vps: ["Grace Zhou"],
        img: hacks,
        description: "The Hacks portfolio is in charge of Western AI's very own varsity hackathon team, representing Western at hackathons across North America."
    },
    {
        name: 'Finance',
        vps: ["Derick Liang"],
        img: finance,
        description: "WAI's financing portfolio is responsible for creating budget for the club and reporting our finances to WSC. WAI finance is also responsible of keeping track of the expenses and revenue of the club.",
    },
    {
        name: 'Education',
        vps: ['Christy Xie', 'Hardeep Gambhir'],
        img: edu,
        description: ' The Education portfolio is responsible for helping to provide the Western AI community with educational resources and organizing events/workshops that will help members build their skills and knowledge in the field of Artificial Intelligence.',
    },
    {
        name: 'Design',
        vps: ["Manav Sharma", "Kevin Manka"],
        img: design,
        description: 'The Design Portfolio is responsible for developing Western AI’s brand image and leading all creative initiatives within the club. Co-VP Design guides Western AI’s unique brand image and create innovative designs that market our goals, events, and opportunities to up to 800+ individuals.',
    },
    {
        name: 'Development',
        vps: ['Owen Ostler', 'Lecia Cheng'],
        img: dev,
        description: 'The Development Portfolio is focused on introducing all WAI members to employment in AI and tech, while broadening their knowledge of the industry. The Development Portfolio is also editing and redacting Wavelength, Western AI’s own newsletter, and the Speaker Series podcast, alongside with WAI Publications and WAI Flagship.',
    },
    {
        name: 'Flagship',
        vps: ['Brian Zhou', 'Joy Zhao'],
        img: flag,
        description: 'The Flagship portfolio will be responsible for hosting two of the LARGEST AI events at Western this year (Sept/Oct and Jan/Feb), in addition to a few smaller-scale ones. Flagship is responsible for the creative direction and planning of AI case competitions, hackathons, workshops, and many more. Its main goal will be to plan innovative, large-scale events that cater to technical and non-technical students within the community.',        
    },
    {
        name: "Projects",
        vps: ["Pratik Gupta", 'Shiven Sharma'],
        img: proj,        
        description: 'The Projects portfolio provides opportunities for students to build and deploy Machine Learning models that will be presented to industry professionals at major conferences (i.e. CUCAI).',
    }
]

export default PORTFOLIO_INFO;