import './css/DarkModeButton.css'
import {switchTheme, isThemeDark} from "../pagejs/switchTheme";

import Moon from '../../assets/moon.png'
import Sun from '../../assets/sun.png'

const switchButtonTheme = (theme) => {
    localStorage.setItem('wai-theme', theme)
    const img = document.getElementById('dark-mode-img')
    if(theme === 0){
        img.src = Moon
        img.style.filter = 'invert(1)'
    } else {
        img.src = Sun
        img.style.filter = 'invert(0)'
    }
}

const handleClick = () => {
    switchTheme()
    if(isThemeDark()){
        switchButtonTheme(0)
    } else {
        switchButtonTheme(1)
    }

}

window.addEventListener('load', () => {
    const darkModeButton = document.getElementById('dark-mode-button')

    const initTheme = () => {
        const savedTheme = localStorage.getItem('wai-theme')
        if (savedTheme) {
            switchTheme(parseInt(savedTheme))
            switchButtonTheme(parseInt(savedTheme))
        } else {
            localStorage.setItem('wai-theme', 0)
            switchTheme(0)
            switchButtonTheme(0)
        }
    }

    initTheme()
})

const DarkModeButton = () => {
    return (
        <div id='dark-mode-button' onClick={handleClick}>
            <img src={Moon} id='dark-mode-img' />
        </div>
    )
}

export default DarkModeButton;