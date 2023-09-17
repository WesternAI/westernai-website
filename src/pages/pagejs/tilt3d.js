// a function that takes in an element and adds a 3D tilt on hover effect 

import VanillaTilt from 'vanilla-tilt';

const tilt3d = (el) => {
    VanillaTilt.init(el, {
        max: 30,
        speed: 500,
        glare: false,
        // glare: true,
        // reverse: true,
        reverse: false,

        // reset: false,

        'max-glare': 0.1,
    });
}

export default tilt3d;