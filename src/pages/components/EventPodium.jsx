import { useState } from "react";
import "./css/EventPodium.css";


// allEventData is EVENT_INFO from Events.jsx
// only use events with competition tag set to true in event data
// make SURE the default event num is set to a competition
const EventPodium = ({allEvent, defaultEventNum}) => {
    const [eventNum, setEventNum] = useState(defaultEventNum)

    return (
        <div id="podium">
          <div className="pillar" id="pillar2">
            <img src={allEvent[eventNum].teamImgs[1]} alt="2nd Place Team" className="teamImg"></img>
            <h2 className="teamName"> {allEvent[eventNum].winners[1]}</h2>
            <section id="box2" className="box">
                <h1 className="placement"> 2 </h1>
              </section>
          </div>

          <div className="pillar" id="pillar1">
            <img src={allEvent[eventNum].teamImgs[0]} alt="1st Place Team" className="teamImg"></img>
            <h2 className="teamName"> {allEvent[eventNum].winners[0]}</h2>
            <section id="box1" className="box">
              <h1 className="placement"> 1 </h1>
            </section>
          </div>

          <div className="pillar" id="pillar3">
            <img src={allEvent[eventNum].teamImgs[2]} alt="3rd Place Team" className="teamImg"></img>
            <h2 className="teamName"> {allEvent[eventNum].winners[2]}</h2>
            <section id="box3" className="box">
                <h1 className="placement"> 3 </h1>
              </section>
          </div>
        </div>
    )
}

export default EventPodium;