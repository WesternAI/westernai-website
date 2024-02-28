import '../css/Landing.css'

// componenets
import Container from '../../components/Container';

// js
import initializeFluid from '../../pagejs/fluidAnimationRe.js';
import makeElementDraggable from '../../pagejs/makeDraggable';

// typewriter effect for the title
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if(this.txt === fullTxt) {
        // stop loop 
        return;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

const handleLoad = () => {
    // typewriter effect for the title
    var elements = document.getElementsByClassName('landing-title');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
}


const Landing = () => {
    window.addEventListener('load', () => {
        handleLoad()
    });
    return (
        <section className="landing" id = 'landing'>
                
                <div className="landing-bg">

                    <div className="landing-bg-content">
                        {/* ordered in by my personal favourite title */}
                        
                        <h1
                        className="landing-title" data-period="2000" data-type='[ "western.ai" ]'
                        ></h1>
                        {/* <h1>westernai</h1> */}
                        {/* <h1>WesternAI</h1> */}
                        {/* <h1>WESTERNAI</h1> */}
                        {/* <h1>western.ai.</h1> */}

                        {/* <Container id = 'pn-canvas' child = {<canvas id='c'></canvas>}/> */}
                    </div>

                </div>
                {/* <div className="landing-bg"></div> */}
        </section>
    )
}

export default Landing