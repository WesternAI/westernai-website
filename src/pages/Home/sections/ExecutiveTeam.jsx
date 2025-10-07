import React, { useState, useEffect } from 'react';
import PORTFOLIO_INFO, { PROJECT_MANAGERS } from '../../pagejs/PORTFOLIO_INFO';
import Modal from '../../components/Modal';
import '../css/ExecutiveTeam.css';

const ExecutiveTeam = () => {
    const [selectedMember, setSelectedMember] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById('executive-team');
        if (section) {
            observer.observe(section);
        }

        return () => observer.disconnect();
    }, []);

    const handleCardClick = (member, type = 'executive') => {
        setSelectedMember({ ...member, type });
    };

    const closeModal = () => {
        setSelectedMember(null);
    };

    return (
        <section id="executive-team" className="executive-team">
            <div className="executive-team-container">
                <div className={`executive-team-header ${isVisible ? 'animate-in' : ''}`}>
                    <h2 className="executive-team-title">Meet Our Leadership</h2>
                    <p className="executive-team-subtitle">
                        Get to know the passionate students and leaders who are building Western AI into Canada's premier AI innovation community
                    </p>
                    
                    <div className="executive-team-links">
                        <a 
                            href="https://discord.gg/ZcRtm6CAHt" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="team-link discord"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                            </svg>
                            Join Our Discord
                        </a>
                        <a 
                            href="https://www.instagram.com/westernu.ai/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="team-link instagram"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                            Follow on Instagram
                        </a>
                    </div>
                </div>

                <div className="executive-team-grid">
                    {PORTFOLIO_INFO.map((portfolio, index) => (
                        <div
                            key={index}
                            className={`executive-card ${isVisible ? 'animate-in' : ''}`}
                            onClick={() => handleCardClick(portfolio, 'executive')}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="executive-card-content">
                                <div className="executive-card-icon">
                                    <img src={portfolio.img} alt={portfolio.displayName} />
                                </div>
                                
                                <div className="executive-card-info">
                                    <h3 className="executive-card-title">{portfolio.displayName}</h3>
                                    
                                    <div className="executive-card-leaders">
                                        {portfolio.vps.map((leader, leaderIndex) => (
                                            <span key={leaderIndex} className="executive-leader">
                                                {leader}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="executive-card-arrow">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path 
                                            d="M9 18L15 12L9 6" 
                                            stroke="currentColor" 
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    ))}
                    
                    {/* Project Managers */}
                    {PROJECT_MANAGERS.map((manager, index) => (
                        <div
                            key={`pm-${index}`}
                            className={`executive-card project-manager-card ${isVisible ? 'animate-in' : ''}`}
                            onClick={() => handleCardClick(manager, 'project-manager')}
                            style={{ animationDelay: `${(PORTFOLIO_INFO.length + index) * 0.1}s` }}
                        >
                            <div className="executive-card-content">
                                <div className="executive-card-icon">
                                    <img src={manager.img} alt="Projects" />
                                </div>
                                
                                <div className="executive-card-info">
                                    <h3 className="executive-card-title">Project Managers</h3>
                                </div>

                                <div className="executive-card-arrow">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path 
                                            d="M9 18L15 12L9 6" 
                                            stroke="currentColor" 
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>


            </div>

            {/* Modal */}
            <Modal isOpen={!!selectedMember} onClose={closeModal}>
                {selectedMember && (
                    <div className="member-modal-content">
                        <div className="member-modal-header">
                            <div className="member-avatar">
                                <img src={selectedMember.img} alt={selectedMember.name} />
                            </div>
                        </div>
                        
                        <div className="member-modal-body">
                            <h3 className="member-name">
                                {selectedMember.type === 'executive' 
                                    ? `VP ${selectedMember.name}` 
                                    : selectedMember.name
                                }
                            </h3>
                            <p className="member-role">
                                {selectedMember.type === 'executive' ? 'Portfolio' : 'Project Manager'}
                            </p>
                            
                            <div className="member-leaders">
                                {selectedMember.vps.map((leader, index) => (
                                    <span key={index} className="member-leader">
                                        {selectedMember.type === 'executive' 
                                            ? `VP ${selectedMember.name} - ${leader}`
                                            : leader
                                        }
                                    </span>
                                ))}
                            </div>
                            
                            <p className="member-description">
                                {selectedMember.description}
                            </p>
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
};

export default ExecutiveTeam;
