import React, { useState, useEffect } from 'react';
import './css/Navigationbar.css';
import logo from '../../assets/logo.png';

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('landing');

    const sections = [
        { id: 'landing', label: 'Home' },
        { id: 'showcase', label: 'Why Us' },
        { id: 'events', label: 'Events' },
        { id: 'projects', label: 'Projects' },
        { id: 'executive-team', label: 'Team' },
        { id: 'contact', label: 'Join Us' }
    ];

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                setIsScrolled(window.scrollY > 50);

                // Update active section based on scroll position
                const sections = document.querySelectorAll('section[id]');
                let current = '';

                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    if (window.scrollY >= (sectionTop - 200)) {
                        current = section.getAttribute('id');
                    }
                });

                setActiveSection(current);
                ticking = false;
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerHeight = 80; // Account for fixed header
            const elementPosition = element.offsetTop - headerHeight;
            
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false);
    };

    const handleJoinClick = () => {
        window.open('https://westernusc.store/product/western-artificial-intelligence-design/', '_blank');
    };

    return (
        <nav className={`nav-bar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                {/* Logo */}
                <div className="nav-logo" onClick={() => scrollToSection('landing')}>
                    <div className="nav-logo-icon">
                        <img src={logo} alt="Western AI Logo" width="32" height="32" />
                    </div>
                    <span className="nav-logo-text">Western AI</span>
                </div>

                {/* Desktop Navigation */}
                <div className="nav-links">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
                            onClick={() => scrollToSection(section.id)}
                        >
                            {section.label}
                        </button>
                    ))}
                </div>

                {/* CTA Button */}
                <button className="nav-cta" onClick={handleJoinClick}>
                    Join Now
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>

                {/* Mobile Menu Button */}
                <button 
                    className={`nav-menu-toggle ${isMenuOpen ? 'open' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`nav-mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="nav-mobile-links">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            className={`nav-mobile-link ${activeSection === section.id ? 'active' : ''}`}
                            onClick={() => scrollToSection(section.id)}
                        >
                            {section.label}
                        </button>
                    ))}
                    <button className="nav-mobile-cta" onClick={handleJoinClick}>
                        Join Us
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;