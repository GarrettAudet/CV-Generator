import './RightSide.css';
import React from 'react';
import Header from './Header/Header.js';
import Section from './Section/Experience';

export default function RightSide() {
    return (
        <div className="rightSide">
            <Header />
            <Section title = "Professional Experience" />
        </div>
    );
}