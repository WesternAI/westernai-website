import Card from "./Card";
import { useState , useEffect} from "react";
import React from "react";

import './css/Carousel.css'


class Carousel extends React.Component {
    constructor (id, cards = []) {
        super()
        this.id = id
        this.state = {
            cards: cards
        }
    }
    render () {
        return (
            <div className="carousel-container">
                <div className="carousel" id = {this.id}>
                {this.state.cards.map((card) => {
                    return (card)
                })}
                </div>
            </div>
        )
    }

    addElement(element) {
        this.state.cards.push(element)
    }

    getCenterCard() {
        const carousel = document.getElementById(this.id)
        let findY = carousel.getBoundingClientRect().height/2 + carousel.getBoundingClientRect().top
            
        // get the center of the viewport width
        let findX = window.innerWidth/2

        // find all elements at the center of the viewport
        let elements = document.elementsFromPoint(findX, findY)
        elements.forEach(element => {
            // sort for the carousel card element
            if (element.className == carousel.childNodes[0].className){
                // console.log(element)
                return element
            }
        })

        return null
    }

    initialize(){
        // console.log('initializing carousel')
        let carousel = document.getElementById(this.id);
        carousel.style.left = '0px'
        
        carousel.style.userSelect = 'none'
        
        let mouseTrait = {
            lastMouseX: null,
            mousedown: false,
            
            mousePosX: [],
            mousePosT: []
        }
        
        // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
        // touch events
        carousel.addEventListener('touchmove', (e) => {
            // console.log(1)
            if (mouseTrait.mousedown){
            
                mouseTrait.mousePosX.push(e.touches[0].clientX); if (mouseTrait.mousePosX.length > 10){ mouseTrait.mousePosX.shift()}
                mouseTrait.mousePosT.push(Date.now()); if (mouseTrait.mousePosT.length > 10){ mouseTrait.mousePosT.shift()}
    
                if (mouseTrait.lastMouseX !== null) {
                    let x = -mouseTrait.lastMouseX + e.touches[0].clientX
                    let carousel = document.getElementById(this.id)
    
                    
                    carousel.style.transition = '0s'
    
                    // console.log(x)
                    // translateCarousel(carousel, x)
                    carousel.style.left = `${parseInt(carousel.style.left) + x}px`
                }
        
                mouseTrait.lastMouseX = e.touches[0].clientX
            }
    
        })
        carousel.addEventListener('touchstart', (e) => {mouseTrait.mousedown = true})
        carousel.addEventListener('touchend', (e) => {
            mouseTrait.mousedown = false
            mouseTrait.lastMouseX = null
            
            // let carousel = document.getElementById('portfolio-carousel')
    
            let x = (mouseTrait.mousePosX[mouseTrait.mousePosX.length - 1] - mouseTrait.mousePosX[0])
            let time = (mouseTrait.mousePosT[mouseTrait.mousePosT.length - 1] - mouseTrait.mousePosT[0])
    
            if (time !== 0){
                carousel.style.transition = `ease-out ${time/160}s`
                translateCarousel(carousel, x/time*200)
    
                setTimeout(() => {centerCarousel(carousel)}, time/160*1500)
            }
    
            
            mouseTrait.mousePosX = []
            mouseTrait.mousePosT = []
        })
    
    
        // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
        // mouse events
        carousel.addEventListener('mousemove', (e) => {
            if (mouseTrait.mousedown){
            
                mouseTrait.mousePosX.push(e.clientX); if (mouseTrait.mousePosX.length > 10){ mouseTrait.mousePosX.shift()}
                mouseTrait.mousePosT.push(Date.now()); if (mouseTrait.mousePosT.length > 10){ mouseTrait.mousePosT.shift()}
    
                if (mouseTrait.lastMouseX !== null) {
                    let x = -mouseTrait.lastMouseX + e.clientX
                    // let carousel = document.getElementById('portfolio-carousel')
    
                    
                    carousel.style.transition = '0s'
    
                    // console.log(x)
                    carousel.style.left = `${parseInt(carousel.style.left) + x}px`
                    // translateCarousel(carousel, x)
                }
        
                mouseTrait.lastMouseX = e.clientX
            }
    
        })
        carousel.addEventListener('mousedown', (e) => {mouseTrait.mousedown = true;  e.preventDefault()})
        carousel.addEventListener('mouseup', (e) => {
            mouseTrait.mousedown = false
            mouseTrait.lastMouseX = null
            
            // let carousel = document.getElementById('portfolio-carousel')
    
            let x = (mouseTrait.mousePosX[mouseTrait.mousePosX.length - 1] - mouseTrait.mousePosX[0])
            let time = (mouseTrait.mousePosT[mouseTrait.mousePosT.length - 1] - mouseTrait.mousePosT[0])
    
            if (time !== 0){
                carousel.style.transition = `ease-out ${time/160}s`
                translateCarousel(carousel, x/time*200)
    
                // center carousel card after the carousel stops moving
                setTimeout(() => {centerCarousel(carousel)}, time/160*1500)
            }
    
            mouseTrait.mousePosX = []
            mouseTrait.mousePosT = []
        })
        
        carousel.addEventListener('mouseout', (e) => {
            // window.onscroll = () => {}
            document.body.style.overflow = 'auto'
        })
        carousel.addEventListener('mouseover', (e) => {
            // console.log(-carousel.offsetWidth + window.innerWidth)
            let x = parseFloat(carousel.style.left.replace('px', ''))
            if (x < 0 && x > -carousel.offsetWidth + window.innerWidth){
                // document.body.style.overflow = 'hidden'
            }
            
        })
    
        // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    
        let keydown = null
        window.addEventListener('keydown', (e) => {keydown = e.key})
        window.addEventListener('keyup', (e) => {keydown = null})
    
        // reset the carousel on resize
        window.addEventListener('resize', (e) => {
            // let carousel = document.getElementById('portfolio-carousel')
            // translateCarousel(carousel, 0)
            // setTimeout(() => {centerCarousel(carousel)}, 1000)
            centerCarousel(carousel)
        })
    
        // stores when the carousel should center
        let wheelTimeout = null
        carousel.addEventListener('wheel', (e) => {
            // console.log(e)
            
            carousel.style.transition = '0.2s'
            
            // console.log(e)
            
            if (keydown === 'Shift') {
                if(wheelTimeout!=null){
                    clearTimeout(wheelTimeout)
                }
            
                let x = parseFloat(carousel.style.left.replace('px', ''))
                if (x < 0 && x > -carousel.offsetWidth + window.innerWidth){
                    // document.body.style.overflow = 'hidden'
                }
                
                let tranX = -(e.deltaY + e.deltaX)
                translateCarousel(carousel, tranX)
                
                wheelTimeout = setTimeout(() => {centerCarousel(carousel)}, 300)
    
            }
        })
    
        
        function translateCarousel(carousel, x) {
            
            let translate = (parseFloat(carousel.style.left.replace('px', '')) + x)
            
            if (translate > 0) {
                carousel.style.left = '0px'
        
                
            } else if (translate < -carousel.offsetWidth + window.innerWidth) {
                carousel.style.left = -carousel.offsetWidth + window.innerWidth + 'px'
                
            } else {
                carousel.style.left = translate + 'px'
            }
    
            // centerCarousel(carousel)
        }
    
        function centerCarousel(carousel){
            // get the center of the portfolio section's height
            let findY = carousel.getBoundingClientRect().height/2 + carousel.getBoundingClientRect().top
            
            // get the center of the viewport width
            let findX = window.innerWidth/2
    
            // find all elements at the center of the viewport
            
            let found = false
            let displaceCheck = findX
            let increment = 0
            
            // stops the displaceCheck from going out of bounds
            let safetyNet = window.innerWidth
            
            // if the center of the screen does not have a card, displace the center of the screen to the left or right until a card is found
            while(!found){
                displaceCheck += increment
                increment *= -1
    
                
                let elements = document.elementsFromPoint(displaceCheck, findY)
                
                elements.forEach(element => {
                    if(element.className === undefined){return}
                    // sort for the carousel card element
                    // console.log(carousel.childNodes[0].className)
                    if (element.className == carousel.childNodes[0].className){
                        // console.log(element)
                        // let parent = element.parentNode
                        let parent = element
        
                        // get parent's x position
                        let parentX = parent.offsetLeft
                        let parentWidth = parent.getBoundingClientRect().width/2
        
                        // center the carousel card
                        carousel.style.left = -parentX + findX - parentWidth + 'px'
                        // carousel.style.transition = 'ease-in-out 1s'
                        // carousel.style.transitionTimingFunction = 'cubic-bezier(.64,0,.27,1.26)'
                        carousel.style.transitionTimingFunction = 'cubic-bezier(.22,-0.01,.27,1.26)'
        
                        found = true
                    }
                })
    
                // console.log(displaceCheck)
    
                if (increment > 0){increment+=10}
                else {increment-=10}
    
                // console.log(displaceCheck)
    
                if (displaceCheck > safetyNet){
                    console.log('safety net exceeded')
                    found = true
                    translateCarousel(carousel, 0)
                }
            }
    
    
        }
    
        centerCarousel(document.getElementById(this.id))
    }
}
export default Carousel;