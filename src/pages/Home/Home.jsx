import './css/Home.css';

// page components
import NavigationBar from '../components/Navigationbar.jsx';
// import TestButton from '../components/TestButton';
import DarkModeButton from '../components/DarkModeButton';
import ImageGallery from '../components/ImageGallery.jsx';

// page sections
import Landing from './sections/Landing.jsx';
import Events from './sections/Events.jsx';
import Projects from './sections/Projects.jsx';
import Contact from './sections/Contact.jsx';
import Portfolios from './sections/Portfolios.jsx';

import testImage from "../../assets/events/mist.jpg";
import testImageTwo from "../../assets/events/mountainskies.jpg";
import testImageThree from "../../assets/events/nature.jpg";
import testImageFour from "../../assets/events/paris.jpg";
import testImageFive from "../../assets/events/parisTwo.jpg";
import testImageSix from "../../assets/events/rocks.jpg";

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
                <ImageGallery images={Array.from({ length: 20 }, () => [testImage, testImageTwo, testImageThree, testImageFour, testImageFive, testImageSix][Math.floor(Math.random() * 6)])}></ImageGallery>
            </div>
        </div>
        // 
    )
}
export default Home;