import React, { useEffect, useMemo, useState } from 'react';
import '../css/Landing.css';

const Landing = () => {
    const [currentText, setCurrentText] = useState('western.ai');
    const [isDeleting, setIsDeleting] = useState(false);
    const [textIndex, setTextIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const texts = useMemo(() => ([
        'western.ai',
        'innovation',
        'the future'
    ]), []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById('landing');
        if (section) {
            observer.observe(section);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const current = texts[textIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (currentText === current) {
                    setTimeout(() => setIsDeleting(true), 2000);
                } else {
                    setCurrentText(current.slice(0, currentText.length + 1));
                }
            } else {
                if (currentText === '') {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                } else {
                    setCurrentText(currentText.slice(0, -1));
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, textIndex, texts]);

    return (
        <section id="landing" className="landing">
            <div className="landing-background">
                <div className="landing-particles">
                    {useMemo(() => [...Array(50)].map((_, i) => (
                        <div
                            key={i}
                            className="particle"
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${3 + Math.random() * 4}s`
                            }}
                        />
                    )), [])}
                </div>
            </div>

            <div className="landing-content">
                <div className={`landing-text ${isVisible ? 'animate-in' : ''}`}>
                    <h1 className="landing-title">
                        <span className="landing-prefix">Welcome to</span>
                        <span className="landing-main">
                            {currentText}
                            <span className="cursor">|</span>
                        </span>
                    </h1>
                    
                    <p className="landing-subtitle">
                        Western University's premier AI innovation hub and largest tech club. Join 200+ students building the future of artificial intelligence through cutting-edge projects, exclusive events, and world-class mentorship.
                    </p>

                    <div className="landing-stats">
                        <div className="stat-item">
                            <span className="stat-number">200+</span>
                            <span className="stat-label">Active Members</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">1000+</span>
                            <span className="stat-label">Alumni Network</span>
                        </div>
                    </div>

                    <div className="landing-actions">
                        <button 
                            className="landing-btn primary"
                            onClick={() => window.open('https://westernusc.store/product/western-artificial-intelligence-design/', '_blank')}
                        >
                            Join Our Community
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button 
                            className="landing-btn secondary"
                            onClick={() => {
                                const element = document.getElementById('showcase');
                                if (element) {
                                    const headerHeight = 80;
                                    const elementPosition = element.offsetTop - headerHeight;
                                    window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                                }
                            }}
                        >
                            See Our Impact
                        </button>
                        <button 
                            className="landing-btn tertiary"
                            onClick={() => {
                                const element = document.getElementById('events');
                                if (element) {
                                    const headerHeight = 80;
                                    const elementPosition = element.offsetTop - headerHeight;
                                    window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                                }
                            }}
                        >
                            Explore Events
                        </button>
                    </div>
                </div>

                <div className={`landing-visual ${isVisible ? 'animate-in' : ''}`}>
                    <div className="landing-cube">
                        <div className="cube-face front"></div>
                        <div className="cube-face back"></div>
                        <div className="cube-face right"></div>
                        <div className="cube-face left"></div>
                        <div className="cube-face top"></div>
                        <div className="cube-face bottom"></div>
                    </div>
                </div>
            </div>

            <div className="landing-scroll-indicator">
                <div className="scroll-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M7 13L12 18L17 13M7 6L12 11L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <span>Scroll to explore</span>
            </div>
        </section>
    );
};

export default Landing;