import '../css/Events.css'
import EVENTS_INFO from '../../pagejs/EVENTS_INFO'


const event = () => {

}

const Events = () => {
    return (
        <section className = 'events' id = 'events'>
            <div className="events-header">
                <h1>explore our flagship events</h1>
                <p>we host social, educational, and competitive events on campus.</p>
            </div>

            <div className="events-body">
                <div className="event">AInnovation</div>
                <div className="event">CUCAI</div>
                <div className="event">DataQuest</div>
            </div>
        </section>
    )
}
export default Events;