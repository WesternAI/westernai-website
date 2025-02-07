import './css/ImageGallery.css';
import testImage from "../../assets/portfolio/comms_icon.png";

const ImageGallery = () => {
    return (
        <>
            <section className='image-gallery-container'>
                <div className='image-gallery-row'>
                    <div className="image-gallery-column">
                        <img src={testImage} alt="testing"></img>
                        <img src={testImage} alt="testing"></img>
                        <img src={testImage} alt="testing"></img>
                        <img src={testImage} alt="testing"></img>
                        <img src={testImage} alt="testing"></img>
                    </div>
                    <div className="image-gallery-column">
                        <img src={testImage} alt="testing"></img>
                        <img src={testImage} alt="testing"></img>
                        <img src={testImage} alt="testing"></img>
                        <img src={testImage} alt="testing"></img>
                        <img src={testImage} alt="testing"></img>
                    </div>
                    <div className="image-gallery-column">
                        <img src={testImage} alt="testing"></img>
                        <img src={testImage} alt="testing"></img>
                        <img src={testImage} alt="testing"></img>
                        <img src={testImage} alt="testing"></img>
                        <img src={testImage} alt="testing"></img>
                    </div>
                    <div className="image-gallery-column">
                        <img src={testImage} alt="testing"></img>
                        <img src={testImage} alt="testing"></img>
                        <img src={testImage} alt="testing"></img>
                        <img src={testImage} alt="testing"></img>
                        <img src={testImage} alt="testing"></img>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ImageGallery;