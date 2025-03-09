import './css/Home.css';

// page components
import NavigationBar from '../components/Navigationbar.jsx';
// import TestButton from '../components/TestButton';
import DarkModeButton from '../components/DarkModeButton';
import EventPodium from '../components/EventPodium.jsx';

// page sections
import Landing from './sections/Landing.jsx';
import Events from './sections/Events.jsx';
import Projects from './sections/Projects.jsx';
import Contact from './sections/Contact.jsx';
import Portfolios from './sections/Portfolios.jsx';

// event data
import EVENTS_INFO from '../pagejs/EVENTS_INFO.js';

const Home = () => {
    return (
        <div className="home_page">
            <NavigationBar />

            {/* landing section START =-=-=-=-=-=-=-=-=-=-=-=-=-= */}
            <Landing />
            {/* landing section END =-=-=-=-=-=-=-=-=-=-=-=-=-= */}
            
            <Portfolios />
            <Events />
            <Projects />
            <Contact />

            {/* <TestButton /> */}
            <DarkModeButton />

            <div style={{width: "100vw", height: "100vh"}}>
                <EventPodium allEvent={EVENTS_INFO} defaultEventNum={0}></EventPodium>
            </div>

            
        </div>
        // 
    )
}
export default Home;