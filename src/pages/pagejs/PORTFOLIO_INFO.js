/*
 * Info for all the WAI executive team members - 2025-2026
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
    // Co-Presidents
    {
        name: "Co-Presidents",
        displayName: "Co-Presidents",
        vps: ["Shawn Chen", "Peter Bai"],
        img: pres,
        description: 'Co-presidents are responsible for steering the overall vision of Western AI and its members. Co-presidents oversee all portfolios and tie the ideals of all the VPs in respective portfolios.',
    },
    // Vice Presidents
    {
        name: 'Flagship',
        displayName: 'Flagship',
        vps: ['Angela Deng'],
        img: flag,
        description: 'The Flagship portfolio is responsible for hosting two of the LARGEST AI events at Western this year (Sept/Oct and Jan/Feb), in addition to a few smaller-scale ones. Flagship is responsible for the creative direction and planning of AI case competitions, hackathons, workshops, and many more. Its main goal will be to plan innovative, large-scale events that cater to technical and non-technical students within the community.',        
    },
    {
        name: 'Finance',
        displayName: 'Finance',
        vps: ['Marco Chan'],
        img: finance,
        description: "WAI's financing portfolio is responsible for creating budget for the club and reporting our finances to WSC. WAI finance is also responsible of keeping track of the expenses and revenue of the club.",
    },
    {
        name: 'Internals',
        displayName: 'Internals',
        vps: ['Erta Tema', 'Jeffrey Liu'],
        img: pub,
        description: "The Internals portfolio plans and organizes fun internal events for WAI executives and members",
    },
    {
        name: 'Education',
        displayName: 'Education',
        vps: ['Karan Chahal', 'Conan Wang'],
        img: edu,
        description: 'The Education portfolio is responsible for helping to provide the Western AI community with educational resources and organizing events/workshops that will help members build their skills and knowledge in the field of Artificial Intelligence.',
    },
    {
        name: 'Marketing',
        displayName: 'Marketing',
        vps: ['Leah Liu', 'Kaisen Ni'],
        img: comm,        
        description: "The Marketing portfolio maintains WAI's social media presence and announcing updates, event opportunities to members. The Marketing portfolio is also responsible of responding to inquiries from students and forwarding them to appropriate portfolios.",
    },
    {
        name: 'Development',
        displayName: 'Development',
        vps: ['Frank Zou', 'Shaurya Singh'],
        img: dev,
        description: 'The Development Portfolio is focused on introducing all WAI members to employment in AI and tech, while broadening their knowledge of the industry. The Development Portfolio is also editing and redacting Wavelength, Western AI\'s own newsletter, and the Speaker Series podcast, alongside with WAI Publications and WAI Flagship.',
    },
    {
        name: 'Projects',
        displayName: 'Projects',
        vps: ['Thomas Llamzon', 'Noah Kostesku'],
        img: proj,        
        description: 'The Projects portfolio provides opportunities for students to build and deploy Machine Learning models that will be presented to industry professionals at major conferences (i.e. CUCAI).',
    },
]

const PROJECT_MANAGERS = [
    {
        name: 'Project Managers',
        vps: ['Aaron Yi', 'Luke Blommesteyn', 'Henrique Leite', 'Laura Gomez', 'Foster Deighton', 'Oliver Olejar', 'Sudrisha Sarkar', 'Arik Dhaliwal'],
        img: design,
        description: 'Project Managers work closely with the Projects portfolio to guide and mentor students through hands-on AI and machine learning projects. They provide technical support, project management, and ensure successful completion of student initiatives.',
    },
]

export default PORTFOLIO_INFO;
export { PROJECT_MANAGERS };