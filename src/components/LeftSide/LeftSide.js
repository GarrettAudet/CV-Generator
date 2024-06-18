import React from 'react';
import Option from './Option/selectOption';
import PersonalDetails from './PersonalDetails/PersonalDetails'

/* Work Experience Details */
import JobEntry from './WorkExperience/JobEntry'
import Education from './Education/Education'
import Awards from './Awards/Awards';
import './LeftSide.css';  

export default function LeftSide() {
    return (
        <div className="leftSide">
            <Option />
            <PersonalDetails />
            <JobEntry />
            <Education />
            <Awards />
        </div>
    );
}