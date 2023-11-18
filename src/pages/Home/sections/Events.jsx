import '../css/Events.css'
import EVENTS_INFO from '../../pagejs/EVENTS_INFO'

import Podium from '../../components/Podium'


const AInnovationEvent = () => {
    const ainnovation = EVENTS_INFO[0]
    return (
        <div className="ainnovation-body">
            <div className="ainnovation-podium">
                {Podium(ainnovation.data)}
            </div>
        </div>
    )
}

// create an individual event
const Event = (event, custom) => {
    return (
        <div className="event">
            <div className="event-image">
                <img src={event.logo} alt="event" />
            </div>
            <div className="event-interact">
                {custom}
            </div>
        </div>
    )
}

const Events = () => {
    return (
        <section className = 'events' id = 'events'>
            <div className="events-header">
                <h1>explore our flagship events</h1>
                <p>we host social, educational, and competitive events on campus.</p>
            </div>

            <div className="events-body">
                {Event(EVENTS_INFO[0], AInnovationEvent())}
                {Event(EVENTS_INFO[1])}
                {Event(EVENTS_INFO[2])}
            </div>
        </section>
    )
}
export default Events;