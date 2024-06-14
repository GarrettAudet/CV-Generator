import React from 'react';
import Option from './Option/selectOption';
import PersonalDetails from './PersonalDetails/PersonalDetails'
import Experience from './WorkExperience/Experience'
import Education from './Education/Education'
import Awards from './Awards/Awards';
import './LeftSide.css';  

export default function LeftSide() {
    return (
        <div className="leftSide">
            <Option />
            <PersonalDetails />
            <Experience />
            <Education />
            <Awards />
        </div>
    );
}