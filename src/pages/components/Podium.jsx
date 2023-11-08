import './css/Podium.css';
import ConfettiExplosion from 'react-confetti-explosion';
import { useState } from 'react';

const Pillar = (total, num, title, display) => {
    // dynamic styling
    const pillHeight = (100 - num * 15);
    const pillWidth = (90 / total);
    const pillZIndex = 1000 - num;

    let posLeft = Math.ceil(num/2);
    if (num % 2 === 0 ) {posLeft = -posLeft;}

    const pillTransform = 'translateX(' + (posLeft * 100) + '%)';

    // confetti
    const [confetti, setConfetti] = useState(false);
    const startConfetti = () => {
        setConfetti(true);
    }
    const stopConfetti = () => {
        setConfetti(false);
    }

    const hoverOffset = 20;
    window.addEventListener('load', () => {
        const element = document.getElementById('pillar' + num)
        element.addEventListener('mouseover', (e) => {
            e.preventDefault();

            // element.style.height = `${pillHeight + hoverOffset}%}`;
            element.style.transform = `translate(${posLeft * 100}%, -10%) scale(1.1)`;
            element.style.zIndex = 1050;
            // element.style.height = `100%}`;
        })
        element.addEventListener('mouseout', (e) => {
            e.preventDefault();
            
            element.style.zIndex = pillZIndex;
            element.style.transform = `translateX(${posLeft * 100}%) scale(1)`;
        })
        element.addEventListener('click', (e) => {
            e.preventDefault();

            startConfetti();
            setTimeout(() => {
                stopConfetti();
            }, 2000)
        })
    })

    return (
        <div className="pillar" id = {'pillar' + num} style={
            {
                // backgroundColor:,
                height: pillHeight + '%',
                width: pillWidth + '%',
                transform: pillTransform,
                zIndex: pillZIndex,
            }
        }>
            
            <div className='confetti'>{confetti && <ConfettiExplosion/>}</div>
            <div className="pillar-display">{display}</div>

            <div className="pillar-body">
                <div className="pillar-title">{title}</div>
            </div>
            
            <div className="pillar-ledge"></div>

        </div>
    )
}

const Podium = (data) => {
    const total = data.prizes.length;
    let pillarcount = 0;

    return (
        <div className="podium">
            {data.prizes.map(prize => {
                return (
                    Pillar(total, pillarcount++, prize,)
                )
            })}
        </div>
    )
}
export default Podium;