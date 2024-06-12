import React from 'react';
import './Header.css';  

export default function Header() {
    return (
        <header className="header">
            <h1 className="name">Garrett Audet</h1>
            <div>
            <h2 className="subheader1">Strategy & Operations</h2>
            <span className="headerBreak"> | </span>
            <h2 className="subheader2">Full-Stack Developer</h2>
            <span className="headerBreak"> | </span>
            <h2 className="linkedin">https://www.linkedin.com/in/garrettaudet/</h2>
            </div>
        </header>
    );
}
