import { useState, useEffect } from "react";
import "./css/EventPodium.css";

// param {names} -> string array of size 3
// 


const ImageGalleryColumn = ({names, images}) => {
    const [firstNm] = useState(names[0]);
    const [secondNm] = useState(names[1]); 
    const [thirdNm] = useState(names[2]); 
    const [firstImg] = useState(images[0]); 
    const [secondImg] = useState(images[1]); 
    const [thirdImg] = useState(images[2]); 

    return (
      <></>
    )
}