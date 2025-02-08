import { useState, useEffect } from "react";
import './css/ImageGallery.css';


/* param {images} -> array of imported images e.g. import testImage from "../../" */

const ImageGalleryColumn = ({images}) => {
    const [columnImages, setColumnImages] = useState([]);

    useState(() => {
        let columnImageComponents = new Array(images.length);
        for (let i = 0; i < images.length; i++) {
            let imageURL = images[i];
            columnImageComponents[i] = (<img src={imageURL} alt="Image Gallery Photo" key={Math.random()}></img>);
        }

        setColumnImages(columnImageComponents);
    }, [])

    return (
        <div className="image-gallery-column">
            {/* <img src={testImage} alt="testing"></img>
            <img src={testImage} alt="testing"></img>
            <img src={testImage} alt="testing"></img>
            <img src={testImage} alt="testing"></img>
            <img src={testImage} alt="testing"></img> */}
            {columnImages}
        </div>
    )
}

/* param {images} -> array of imported images e.g. import testImage from "../../" */
/* param {imagesPerColumn} -> integer corresponding to how many images per column (rows of images) */

const ImageGallery = ({images}) => {
    const [columns, setColumns] = useState([]);

    useState(() => {
        let quarterOfImages = Math.ceil(images.length / 4);
        let imageColumns = new Array(4);
        for (let i = 0; i < images.length; i += quarterOfImages) {
            let columnImages = images.slice(i, i + quarterOfImages);
            imageColumns[i] = (<ImageGalleryColumn images={columnImages}></ImageGalleryColumn>);
        }

        setColumns(imageColumns);
    }, []);

    return (
        <>
            <section className='image-gallery-container'>
                <div className='image-gallery-row'>
                    {/* <ImageGalleryColumn images={[testImage, testImage, testImage, testImage, testImage]}></ImageGalleryColumn> */}
                    {columns}
                </div>
            </section>
        </>
    )
}

export default ImageGallery;