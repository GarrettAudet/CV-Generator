/* Import Library */ 
import React from 'react';

/* Import Load Option or Clear Option */
import Option from './Option/selectOption';

/* Import Personal Information */
import PersonalDetails from './PersonalDetails/PersonalDetails'

/* Work Experience Details */
import Experience from './WorkExperience/Experience'

/* Import Education Details */
import Education from './Education/Education';

/* Import Awards Details */
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
            <Awards />
        </div>
    );
}