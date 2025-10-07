import React, { useState, useEffect } from 'react';
import '../css/Events.css';
import EVENTS_INFO from '../../pagejs/EVENTS_INFO';
import logo from '../../../assets/logo.png';

const Events = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeEvent, setActiveEvent] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById('events');
        if (section) {
            observer.observe(section);
        }

        return () => observer.disconnect();
    }, []);

    const handleEventClick = (index) => {
        setActiveEvent(index);
    };

    return (
        <section id="events" className="events">
            <div className="events-container">
                <div className={`events-header ${isVisible ? 'animate-in' : ''}`}>
                    <h2 className="events-title">What We Do</h2>
                    <p className="events-subtitle">
                        Discover our flagship events, workshops, and competitions that make Western AI the premier destination for AI innovation and learning
                    </p>
                </div>

                <div className="events-content">
                    <div className="events-tabs">
                        {EVENTS_INFO.map((event, index) => (
                            <button
                                key={index}
                                className={`event-tab ${activeEvent === index ? 'active' : ''} ${isVisible ? 'animate-in' : ''}`}
                                onClick={() => handleEventClick(index)}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="event-tab-icon">
                                    <img src={logo} alt="Western AI Logo" width="24" height="24" />
                                </div>
                                <span className="event-tab-title">{event.title}</span>
                            </button>
                        ))}
                    </div>

                    <div className="events-details">
                        <div className={`event-detail ${isVisible ? 'animate-in' : ''}`}>
                            <div className="event-detail-content">
                                <div className="event-detail-header">
                                    <h3 className="event-detail-title">
                                        {EVENTS_INFO[activeEvent]?.title}
                                    </h3>
                                    <div className="event-detail-meta">
                                        <span className="event-date">
                                            {EVENTS_INFO[activeEvent]?.date}
                                        </span>
                                        <span className="event-location">
                                            {EVENTS_INFO[activeEvent]?.location}
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="event-detail-body">
                                    <p className="event-description">
                                        {EVENTS_INFO[activeEvent]?.description}
                                    </p>
                                    
                                    {EVENTS_INFO[activeEvent]?.features && (
                                        <div className="event-features">
                                            <h4>What to Expect:</h4>
                                            <ul>
                                                {EVENTS_INFO[activeEvent].features.map((feature, index) => (
                                                    <li key={index}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                <div className="event-detail-actions">
                                    <button 
                                        className="event-btn primary"
                                        onClick={() => window.open('https://westernusc.store/product/western-artificial-intelligence-design/', '_blank')}
                                    >
                                        Register Now
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                    <button 
                                        className="event-btn secondary"
                                        onClick={() => {
                                            const element = document.getElementById('contact');
                                            if (element) {
                                                const headerHeight = 80;
                                                const elementPosition = element.offsetTop - headerHeight;
                                                window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                                            }
                                        }}
                                    >
                                        Learn More
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Events;