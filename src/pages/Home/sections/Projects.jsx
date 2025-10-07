import React, { useState, useEffect } from 'react';
import '../css/Projects.css';
import logo from '../../../assets/logo.png';

const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeProject, setActiveProject] = useState(0);

    const projects = [
        {
            title: 'AI Research Lab',
            description: 'Collaborative research projects tackling real-world problems using machine learning and artificial intelligence. Work with faculty and industry partners.',
            status: 'Active',
            tech: ['Python', 'TensorFlow', 'PyTorch'],
            link: 'https://linktr.ee/westernuai',
            image: '🔬'
        },
        {
            title: 'Speaker Series Podcast',
            description: 'Weekly interviews with AI researchers, industry leaders, and entrepreneurs. Gain insights from the brightest minds in artificial intelligence.',
            status: 'Active',
            tech: ['Audio Production', 'Interviewing'],
            link: 'https://linktr.ee/westernuai',
            image: '🎙️'
        },
        {
            title: 'Wavelength Newsletter',
            description: 'Our monthly publication featuring the latest in AI research, industry insights, and student spotlights. Written by students, for students.',
            status: 'Active',
            tech: ['React', 'Node.js', 'MongoDB'],
            link: 'https://linktr.ee/westernuai',
            image: '📰'
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

        const section = document.getElementById('projects');
        if (section) {
            observer.observe(section);
        }

        return () => observer.disconnect();
    }, []);

    const handleProjectClick = (index) => {
        setActiveProject(index);
    };

    const handleProjectLink = (link) => {
        if (link !== '#') {
            window.open(link, '_blank');
        }
    };

    return (
        <section id="projects" className="projects">
            <div className="projects-container">
                <div className={`projects-header ${isVisible ? 'animate-in' : ''}`}>
                    <h2 className="projects-title">Innovation Hub</h2>
                    <p className="projects-subtitle">
                        Explore our cutting-edge projects, research initiatives, and educational programs that are shaping the future of AI at Western University
                    </p>
                </div>

                <div className="projects-content">
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className={`project-card ${activeProject === index ? 'active' : ''} ${isVisible ? 'animate-in' : ''}`}
                                onClick={() => handleProjectClick(index)}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="project-card-header">
                                    <div className="project-icon">
                                        <img src={logo} alt="Western AI Logo" width="32" height="32" />
                                    </div>
                                    <div className="project-status">
                                        <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                                            {project.status}
                                        </span>
                                    </div>
                                </div>

                                <div className="project-card-body">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>
                                    
                                    <div className="project-tech">
                                        {project.tech.map((tech, techIndex) => (
                                            <span key={techIndex} className="tech-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="project-card-footer">
                                    <button 
                                        className="project-link"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleProjectLink(project.link);
                                        }}
                                    >
                                        {project.link === '#' ? 'Coming Soon' : 'Learn More'}
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="projects-cta">
                        <div className="cta-content">
                            <h3>Want to Get Involved?</h3>
                            <p>Join our community and contribute to these exciting projects</p>
                            <button 
                                className="cta-button"
                                onClick={() => window.open('https://westernusc.store/product/western-artificial-intelligence-design/', '_blank')}
                            >
                                Join Our Community
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;