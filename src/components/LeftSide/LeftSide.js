/* Import Library and Relevant Information */ 
import React from 'react';
import Option from './Option/selectOption';
import PersonalDetails from './PersonalDetails/PersonalDetails'
import Experience from './WorkExperience/Experience'
import Education from './Education/Education';
import Volunteering from './Volunteer/Volunteer'
import Awards from '../LeftSide/Awards/Awards';

/* Import Styling for Left Side */
import './LeftSide.css';  

export default function LeftSide() {
    return (
        <div className="leftSide">
            <Option />
            <PersonalDetails />
            <Experience />
            <Education />
            <Volunteering />
            <Awards />
        </div>
    );
}