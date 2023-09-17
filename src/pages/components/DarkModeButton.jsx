import './css/DarkModeButton.css'
import {switchTheme, isThemeDark} from "../pagejs/switchTheme";

import Moon from '../../assets/moon.png'
import Sun from '../../assets/sun.png'

window.addEventListener('load', () => {
    const darkModeButton = document.getElementById('dark-mode-button')

    darkModeButton.addEventListener('click', () => {
        switchTheme()

        const img = document.getElementById('dark-mode-img')
        if(isThemeDark()){
            img.src = Moon
            img.style.filter = 'invert(1)'
        } else {
            img.src = Sun
            img.style.filter = 'invert(0)'
        }

    })
})

const DarkModeButton = () => {
    return (
        <div id='dark-mode-button'>
            <img src={Moon} id='dark-mode-img' />
        </div>
    )
}

export default DarkModeButton;