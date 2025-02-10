import { useState, useRef, forwardRef, useImperativeHandle } from "react";
import './css/ImageGallery.css';

const ImageGalleryModal = forwardRef((props, ref) => {
    const [isActive, setIsActive] = useState(false);
    const [selectedImageURL, setSelectedImageURL] = useState("");

    useImperativeHandle(ref, () => ({
        activateModal: (imageURL) => {
            setSelectedImageURL(imageURL);
            setIsActive(true);
        }
    }));

    const deactivateModal = () => {
        setIsActive(false);
    }

    return (
        <>
            <div className="image-gallery-modal-container" style={{display: isActive ? "flex" : "none"}} onClick={deactivateModal}>
                <img src={selectedImageURL} alt="Selected"></img>
            </div>
        </>
    )
})


/* param {images} -> array of imported images e.g. import testImage from "../../" */

const ImageGalleryColumn = ({images}) => {
    const [columnImages, setColumnImages] = useState([]);

    useState(() => {
        let columnImageComponents = new Array(images.length);
        for (let i = 0; i < images.length; i++) {
            let imageURL = images[i];
            columnImageComponents[i] = (<img src={imageURL} alt="Gallery Item" key={Math.random()}></img>);
        }

        setColumnImages(columnImageComponents);
    }, [])

    return (
        <div className="image-gallery-column">
            {columnImages}
        </div>
    )
}

/* param {images} -> array of imported images e.g. import testImage from "../../" */
/* param {imagesPerColumn} -> integer corresponding to how many images per column (rows of images) */

const ImageGallery = ({images}) => {
    const imageModalRef = useRef();
    const [columns, setColumns] = useState([]);

    const handleClick = (event) => {
        if (event.target.tagName === "IMG") {
            if (imageModalRef.current) {
                imageModalRef.current.activateModal(event.target.src);
            }
        }
    }

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
                <div className='image-gallery-row' onClick={(event) => handleClick(event)}>
                    {columns}
                </div>
                <ImageGalleryModal ref={imageModalRef}></ImageGalleryModal>
            </section>
        </>
    )
}

export default ImageGallery;