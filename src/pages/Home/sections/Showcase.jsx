import React, { useState, useEffect } from 'react';
import '../css/Showcase.css';

const Showcase = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentAchievement, setCurrentAchievement] = useState(0);

    const achievements = [
        {
            title: "Educational Workshops",
            description: "Free technical workshops and training sessions",
            stats: "Weekly sessions, expert instructors",
            icon: "🎓"
        },
        {
            title: "Free Tech & Subscriptions",
            description: "Access to premium AI tools and software",
            stats: "GitHub Pro, cloud credits, datasets",
            icon: "💻"
        },
        {
            title: "Networking Events",
            description: "Connect with industry professionals and peers",
            stats: "Career fairs, speaker events, mixers",
            icon: "🤝"
        },
        {
            title: "Exclusive Mailing List",
            description: "Strictly Western AI job postings and opportunities",
            stats: "Direct access to internships and jobs",
            icon: "📧"
        },
        {
            title: "Impactful Projects",
            description: "Real-world AI projects that make a difference",
            stats: "CUCAI 2025 (March) - Prizes worth $10,000+",
            icon: "🚀"
        },
        {
            title: "Alumni Network",
            description: "Extremely large and technically diverse network",
            stats: "1000+ alumni, global connections",
            icon: "🌐"
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById('showcase');
        if (section) {
            observer.observe(section);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAchievement((prev) => (prev + 1) % achievements.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [achievements.length]);

    return (
        <section id="showcase" className="showcase">
            <div className="showcase-container">
                <div className={`showcase-header ${isVisible ? 'animate-in' : ''}`}>
                    <h2 className="showcase-title">Why Western AI?</h2>
                    <p className="showcase-subtitle">
                        We're not just a club - we're Canada's premier AI innovation community, creating real impact and opportunities for students
                    </p>
                </div>

                <div className="showcase-grid">
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className={`showcase-card ${currentAchievement === index ? 'active' : ''} ${isVisible ? 'animate-in' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => setCurrentAchievement(index)}
                        >
                            <div className="card-icon">{achievement.icon}</div>
                            <h4 className="card-title">{achievement.title}</h4>
                            <p className="card-description">{achievement.description}</p>
                            <div className="card-stats">{achievement.stats}</div>
                        </div>
                    ))}
                </div>

                <div className={`showcase-cta ${isVisible ? 'animate-in' : ''}`}>
                    <div className="showcase-buttons">
                        <button 
                            className="showcase-btn primary"
                            onClick={() => {
                                const element = document.getElementById('events');
                                if (element) {
                                    const headerHeight = 80;
                                    const elementPosition = element.offsetTop - headerHeight;
                                    window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                                }
                            }}
                        >
                            Explore Our Impact
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        
                        <button 
                            className="showcase-btn secondary"
                            onClick={() => {
                                const element = document.getElementById('contact');
                                if (element) {
                                    const headerHeight = 80;
                                    const elementPosition = element.offsetTop - headerHeight;
                                    window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                                }
                            }}
                        >
                            Join Our Community
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M12.5 11C14.7091 11 16.5 9.20914 16.5 7C16.5 4.79086 14.7091 3 12.5 3C10.2909 3 8.5 4.79086 8.5 7C8.5 9.20914 10.2909 11 12.5 11ZM23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Showcase;
