import "./css/PageBand.css";
import React from 'react';

const multipleTitle = (title, num) => {
    const titles = []
    for(let i = 0; i < num; i++) {
        titles[i] = (
            <div className="page-band-title">{title}</div>
        )
    }
    return titles
}

const PageBand = ({title, rotate, translate, time, animation}) => {
    const titles = multipleTitle(title, 20)
    // console.log(titles)

    // set css variable
    // document.documentElement.style.setProperty('--rotate', `${rotate}deg`);

    return (
        <div className="page-band-wrapper" 
            style = {{
                // transform:`rotate(${rotate}deg)`,
                transform:`translate(${translate.x}px, ${translate.y}px) rotate(${rotate}deg)`,    
            }}>
            
            
            <div className="page-band"
                style = {{
                    animation: `${animation} ${time}s infinite linear`,
                }}>
                {/* create 10 page-band-title */}
                {titles.map(title => {
                    return title
                })}
            </div>
        </div>
    );
}

export default PageBand;