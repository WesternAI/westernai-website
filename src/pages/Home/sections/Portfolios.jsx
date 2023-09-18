// components
import Container from '../../components/Container';
import Card from '../../components/Card';
import Carousel from '../../components/Carousel';
import PORTFOLIO_INFO from '../../pagejs/PORTFOLIO_INFO';
import PageBand from '../../components/PageBand';

// css
import '../css/Portfolios.css'

// js
import initializeFluid from '../../pagejs/fluidAnimationRe.js';
import makeElementDraggable from '../../pagejs/makeDraggable';
import tilt3d from '../../pagejs/tilt3d';
import elementInViewPort from '../../pagejs/elementInViewPort';

import { useState } from 'react';

const carousel = new Carousel('portfolio-carousel')

const portfolioCard = (id, p) => {
    // console.log(p.vps)
    return (
        <div className = 'portfolio-card-container' id = {'pc-card' + id}>
            
            <Card 
                id = {"p-card" + id} 
                titleAsset = {
                    <div className = 'portfolio-card-bottom'>
                        <div className="portfolio-card-title">{p.name}</div>
                        <div className="portfolio-learn-more"><h2>learn more</h2></div>
                    </div>
                }
                asset={
                    <div className="portfolio-information">
                        <div className="portfolio-headshots">
                            {p.vps.map(element => {
                                // console.log(element)
                                return (<div className = 'vp-frame'>{element}</div>)
                            })}
                        </div>
                        <div className="portfolio-description">
                            <div className="portfolio-description-content">{p.description}</div>
                        </div>
                    </div>
                }/>

            <div className = 'portfolio-card-s' id = {'second-card' + id}>

                <div className="glitch">
                    <img src={p.img} alt={p.img} />
                    <div className="glitch__layers">
                        <div className="glitch__layer" style = {{backgroundImage: `url(${p.img})`}}></div>
                        <div className="glitch__layer" style = {{backgroundImage: `url(${p.img})`}}></div>
                        <div className="glitch__layer" style = {{backgroundImage: `url(${p.img})`}}></div>
                        {/* <div class="glitch__layer"></div>
                        <div class="glitch__layer"></div> */}
                    </div>
                </div>


            </div>
        </div> 
    )
}

let p_descriptions = 'hover over a card to learn more about the portfolio'

const __INIT__PORTFOLIO__ = () => {

    

    // on scroll reveal
    const PORTFOLIO = document.querySelector('.portfolios')
    // console.log(PORTFOLIO)

    const portfolioTitle = document.querySelector('.portfolios-title')



    // carousel shit
    const carouselElement = document.querySelector('#portfolio-carousel')

    // add eventlistner to portfolio cards
    for(let i = 0; i < PORTFOLIO_INFO.length; i++) {

        try{
            const cardContainer = document.getElementById('pc-card' + i)

            const card = document.getElementById('p-card' + i)
            const secondCard = document.getElementById('second-card' + i)

            // check if user is on mobile
            if(window.innerWidth > 800) {
                // add tilt to portfolio card
                tilt3d(card)
            }

            let mouseMove = false
            let timer = setTimeout(() => {/*init*/}, 0)

            const moveTimer = () => {
                clearTimeout(timer)
                mouseMove = true
                timer = setTimeout(() => {
                    mouseMove = false
                }, 100)
            }

            
            // clear timer
            card.addEventListener('mousemove', () => {moveTimer()})
            card.addEventListener('touchmove', () => {moveTimer()})
            
            const openSecondCard = () => {
                secondCard.style.transform = 'translateY(-100%)'
                secondCard.style.opacity = 0.5

                cardContainer.style.transform = 'scale(1.1)'

            }
            
            const closeSecondCard = () => {
                secondCard.style.transform = 'translateY(0%)'
                secondCard.style.opacity = 0

                cardContainer.style.transform = 'scale(1.0)'
            }

            


            
            card.addEventListener('mouseover', () => {
                openSecondCard()
            })
            
            card.addEventListener('mouseout', () => {
                closeSecondCard()
            })
            
            const portfolioBottom = card.querySelector('.portfolio-card-bottom')
            const title = card.querySelector('.portfolio-card-title')
            const learnButton = card.querySelector('.portfolio-learn-more')
            
            
            const headshots = card.querySelector('.portfolio-headshots')
            const description = card.querySelector('.portfolio-description')
            let descriptionToggle = false
            
            // portfolio card
            const openDescription = () => {
                headshots.style.opacity = 0
                description.style.opacity = 1
                description.style.pointerEvents = 'all'
                
                descriptionToggle = true
            }
            const closeDescription = () => {
                headshots.style.opacity = 1
                description.style.opacity = 0
                description.style.pointerEvents = 'none'

                descriptionToggle = false
            }

            // event listeners
            // hover effect for portfolio card
            card.addEventListener('mouseover', () => {
                title.style.opacity = 0;
                learnButton.style.opacity = 1;
            })

            card.addEventListener('mouseout', () => {
                title.style.opacity = 1;
                learnButton.style.opacity = 0;
            })
            
            // click event for portfolio card "learn more"
            learnButton.addEventListener('click', () => {
                learnButton.style.transform = 'scale(0.9)'
                setTimeout(() => {
                    learnButton.style.transform = 'scale(1.0)'
                }, 200)

                // show portfolio description
                if(descriptionToggle) {closeDescription()}
                else {openDescription()}
            })



            // mobile controls
            let mobileToggle = true

            card.addEventListener('touchstart', () => {
                if(mobileToggle) {openSecondCard()}
                else {closeSecondCard()}
                mobileToggle = !mobileToggle
            })
            
            card.addEventListener('touchend', () => {
                if(mouseMove) {closeSecondCard()}
            })

        
        } catch (e) {
            console.log("____PORTFOLIO_SECTION_ERROR____:" + e)
        }
    }

    // initializeFluid()
    // makeElementDraggable(document.getElementById('c'))
}

window.addEventListener('load', () => {

    // initialize custom carousel
    carousel.initialize()

    // initialize portfolio section
    __INIT__PORTFOLIO__()
    
})

const Portfolios = () => {
    for(let i = 0; i < PORTFOLIO_INFO.length; i++) {
        const portfolio = PORTFOLIO_INFO[i]
        // console.log(portfolio)

        const card = portfolioCard(i, portfolio)
        carousel.addElement(card)
    }

    return (
        <section className = 'portfolios' id = 'portfolios'>
            {/* <Card
                id = 'portfolios-1'
                asset = {
                    <canvas id = "c"></canvas>
                }
            /> */}
            <div className="portfolios-title">
                <h1>meet the executive team</h1>
                <p>the people in charge of western ai</p>
            </div>

            <div className="portfolio-bands">
                <PageBand
                    title = {'portfolios'}
                    rotate={5}
                    translate={{x: 0, y: 250}}
                    time = {150}
                    animation={'slide'}
                    />

                <PageBand
                    title = {'portfolios'}
                    rotate={20}
                    translate={{x: 0, y: 0}}
                    time = {260}
                    animation={'slideInverse'}
                />

                <PageBand
                    title = {'portfolios'}
                    rotate={-15}
                    translate={{x: 0, y: -50}}
                    time = {200}
                    animation={'slideInverse'}
                />
            </div>


            {carousel.render()}
            
            {/* portfolios */}
        </section>
    )
}
export default Portfolios;