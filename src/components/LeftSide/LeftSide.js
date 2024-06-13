import React from 'react';
import Option from './Option/selectOption';
import PersonalDetails from './PersonalDetails/PersonalDetails'
import Experience from './WorkExperience/Experience'
import './LeftSide.css';  

export default function LeftSide() {
    return (
        <div className="leftSide">
            <Option />
            <PersonalDetails />
            <Experience />
        </div>
    );
}