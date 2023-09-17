import './css/Home.css';

// page components
import NavigationBar from '../components/Navigationbar.jsx';
import TestButton from '../components/TestButton';
import DarkModeButton from '../components/DarkModeButton';

// page sections
import Landing from './sections/Landing.jsx';
import Events from './sections/Events.jsx';
import Projects from './sections/Projects.jsx';
import About from './sections/About.jsx';
import Portfolios from './sections/Portfolios.jsx';

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
            <About />

            {/* <TestButton /> */}
            <DarkModeButton />
        </div>
    )
}
export default Home;