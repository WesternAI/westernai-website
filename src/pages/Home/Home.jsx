import './css/Home.css';

// page components
import NavigationBar from '../components/Navigationbar.jsx';
// import TestButton from '../components/TestButton';

// page sections
import Landing from './sections/Landing.jsx';
import Showcase from './sections/Showcase.jsx';
import Events from './sections/Events.jsx';
import Projects from './sections/Projects.jsx';
import ExecutiveTeam from './sections/ExecutiveTeam.jsx';
import Contact from './sections/Contact.jsx';

const Home = () => {
    return (
        <div className="home_page">
            <NavigationBar />

            {/* Hero Landing Section - First Impression */}
            <Landing />
            
            {/* Why Western AI - Key Achievements */}
            <Showcase />
            
            {/* Club Showcase - What We Do */}
            <Events />
            
            {/* Our Projects - Innovation Hub */}
            <Projects />
            
            {/* Meet the Team - Leadership */}
            <ExecutiveTeam />
            
            {/* Join Us - Call to Action */}
            <Contact />

            {/* <TestButton /> */}
        </div>
    )
}
export default Home;