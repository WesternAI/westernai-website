// style names represent the amount of colours used in the theme
const STYLE_NAMES = [
    '-primary',
    '-secondary',
]

const COLOURS = {
    light: [
        '255, 255, 255',
        // '192, 192, 192',
        '240, 240, 240',
    ],
    dark: [
        '0, 0, 0',
        // '64, 64, 64',
        '16, 16, 16',
    ]
}

const changeLogo = (theme) => {
    const logo = document.querySelector('#nav-logo img')
    if(theme === 0){
        logo.style.filter = 'invert(0)'
    } else {
        logo.style.filter = 'invert(1)'
    }
}

const root = document.body;

// light = 0, dark = 1, if choice is null, then it will change to the opposite theme
const switchTheme = (choice = 'null') => {
    // check if dark mode is enabled
        // will add later
    // const rs = getComputedStyle(root);


    console.log('changing themes')
    if(choice === 1 || choice === 0){
        changeLightDark(choice)
    }
    else {
        changeOppositeTheme()
    }

    
    // console.log(rs.getPropertyValue('--colour-primary'))
    // console.log(isThemeDark())
}

// changes the theme to light or dark (light = 1, dark = 0)
const changeLightDark = (theme) => {
    changeLogo(theme)

    for(let ams = 0; ams < STYLE_NAMES.length; ams++){
        const COLOUR = '--colour' + STYLE_NAMES[ams]
        const INVERSE = '--inverse' + STYLE_NAMES[ams]

        if(theme === 0){
    
            root.style.setProperty(COLOUR, COLOURS.dark[ams])
            root.style.setProperty(INVERSE, COLOURS.light[ams])

            
        } else {
            // set to light mode
            root.style.setProperty(COLOUR, COLOURS.light[ams])
            // set invese colours
            root.style.setProperty(INVERSE, COLOURS.dark[ams])
            
        }
    }
    
    if(theme === 0) console.log('theme changed to ___DARK___ mode')
    else console.log('theme changed to ___LIGHT___ mode')
}

const changeOppositeTheme = () => {
    if(isThemeDark()){
        changeLightDark(1)
    } else {
        changeLightDark(0)
    }
}



const isThemeDark = () => {
    // const root = document.body;
    const rs = getComputedStyle(root);
    return rs.getPropertyValue('--colour-primary') == COLOURS.dark[0]
}

export {switchTheme, isThemeDark}