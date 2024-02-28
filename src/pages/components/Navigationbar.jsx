import './css/Navigationbar.css'

import logo from '../../assets/logo.png'
import Container from './Container'
import { useEffect } from 'react'

const sections = [
    'portfolios',
    'events',
    // 'projects',
    'coming-soon',
    'contact'
]

const handleLoad = () => {
    const join = document.getElementById('nav-bar-container')
    join.addEventListener('click', () => {
        window.open('https://westernusc.store/product/western-artificial-intelligence-design/')
    })
    
    const logo = document.getElementById('nav-logo')
    
    const options = []
    
    
    for(let i = 0; i < sections.length; i++){
        const option = document.getElementById('nav-'+sections[i])
        options.push(option)
    
        option.addEventListener('click', () => {
            window.location.href = `#${sections[i]}`
            closeNav()
        })
        
        option.addEventListener('mouseover', () => {
            // check if the user is on mobile
            if(window.innerWidth < 800){}
            else{reveal_option_title(option)}
        })
        
        option.addEventListener('mouseout', () => {
            if(window.innerWidth < 800){}
            else{hide_option_title(option)}
        })
    }
    
    // show title of option
    const reveal_option_title = (option) => {
        const title = option.getElementsByClassName('nav-bar-option-title')[0]
        title.style.opacity = 1
    }
    
    // hide title of option
    const hide_option_title = (option) => {
        const title = option.getElementsByClassName('nav-bar-option-title')[0]
        title.style.opacity = 0
    }
    
    let toggle = true
    
    const openNav = () => {
        // reverse the toggle
        toggle = false
        
        let change = 150
        
        for(let i = 0; i < options.length; i++){
            const option = options[i]
            option.style.top = `${change*(i+1)}%`
            option.style.opacity = 1
        }
        
        // check if the user is on mobile
        if(window.innerWidth < 800){
            for(let i = 0; i < options.length; i++){
                reveal_option_title(options[i])
            }
        }
    }
    
    const closeNav = () => {
        // reverse the toggle
        toggle = true
    
        for(let i = 0; i < options.length; i++){
            const option = options[i]
            option.style.top = 0
            option.style.opacity = 0
        }
    
        // check if the user is on mobile
        if(window.innerWidth < 800){
            for(let i = 0; i < options.length; i++){
                hide_option_title(options[i])
            }
        }
    }
    
    // click on logo to open nav
    logo.addEventListener('click', () => {
        if(toggle){openNav()}
        else{closeNav()}
    })

}

// window.addEventListener('load', () => {

// })

const NavButton = (link, title) => {
    return (
        <div className="nav-bar-option" id = {'nav-'+title}>
            <div className="nav-bar-option-title">{title}</div>
        </div>
    )
}




const NavigationBar = () => {
    useEffect(() => {
        handleLoad()
    },[])
    return (
        <nav className="nav-bar">

                <Container 
                    id = 'nav-bar-container'
                    child = {
                        <div className="nav-bar-join">{'join now'}</div>
                    }
                />

                <div className="nav-bar-content">

                    <div className="nav-bar-option" id = 'nav-logo'>
                        <img src={logo} alt="" />
                    </div>

                    {sections.map((section) => {
                        return NavButton(`#${section}`, section)
                    })}

                    {/* <div className = 'nar-bar-option'><a href = '#portfolios'>portfolios</a></div> */}
                    {/* <div className = 'nar-bar-option'><a href = ''>events</a></div> */}
                    {/* <div className = 'nar-bar-option'><a href = ''>projects</a></div> */}
                    {/* <div className = 'nar-bar-option'><a href = ''>about</a></div> */}
                    {/* <div className = 'nar-bar-option'><a href = ''>contact</a></div> */}
                    {/* <div className="join">join us</div> */}

                </div>

        </nav>
    )
}
export default NavigationBar;