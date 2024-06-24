import React from 'react';
import './Header.css';  

export default function Header( {name, subheader1, subheader2, linkedin} ) {
    return (
        <header className="header">
            <h1 className="name">{name}</h1>
            <div className='headers'>
            <h2 className="subheader1">{subheader1}</h2>
            <span className="headerBreak"> | </span>
            <h2 className="subheader2">{subheader2}</h2>
            <span className="headerBreak"> | </span>
            <h2 className="linkedin">{linkedin}</h2>
            </div>
        </header>
    );
}
