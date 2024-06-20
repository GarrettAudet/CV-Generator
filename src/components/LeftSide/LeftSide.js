/* Import Library and Relevant Information */ 
import React from 'react';
import Option from './Option/selectOption';

/* Import Components */
import PersonalDetails from './PersonalDetails/PersonalDetails'
import Experience from './DataList/Sections/Experience'
import Education from './DataList/Sections/Education'
import Volunteering from './DataList/Sections/Volunteering'


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
        </div>
    );
}