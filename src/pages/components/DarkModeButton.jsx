import React, { useState, useEffect } from 'react';
import './css/DarkModeButton.css';

const DarkModeButton = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Initialize theme from localStorage or system preference
        const savedTheme = localStorage.getItem('wai-theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme !== null) {
            setIsDark(savedTheme === 'dark');
        } else {
            setIsDark(false); // Default to light mode
        }
        
        applyTheme(isDark);
    }, []);

    const applyTheme = (dark) => {
        const root = document.documentElement;
        
        if (dark) {
            root.setAttribute('data-theme', 'dark');
        } else {
            root.setAttribute('data-theme', 'light');
        }
    };

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        localStorage.setItem('wai-theme', newTheme ? 'dark' : 'light');
        applyTheme(newTheme);
    };

    return (
        <button 
            className="dark-mode-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
            <div className="toggle-track">
                <div className={`toggle-thumb ${isDark ? 'dark' : 'light'}`}>
                    {isDark ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    )}
                </div>
            </div>
        </button>
    );
};

export default DarkModeButton;