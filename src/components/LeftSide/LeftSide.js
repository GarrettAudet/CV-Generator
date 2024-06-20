/* Import Library */ 
import React from 'react';

/* Import Personal Information */
import Option from './Option/selectOption';
import PersonalDetails from './PersonalDetails/PersonalDetails'

/* Work Experience Details */
import Experience from './WorkExperience/Experience'

/* import Education from './Education/Education'
import Awards from './Awards/Awards';
            <PersonalDetails />
            <Experience />
<Education />
<Awards /> */
import './LeftSide.css';  
import Education from './Education/Education';

export default function LeftSide() {
    return (
        <div className="leftSide">
            <Option />
            <PersonalDetails />
            <Experience />
            <Education />
        </div>
    );
}