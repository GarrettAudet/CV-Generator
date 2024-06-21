/* Import Library and Relevant Information */ 
import React from 'react';
import SelectOption from './Option/selectOption';

/* Import Components */
import ResumeManager from './Option/ResumeManager'
import PersonalDetails from './PersonalDetails/PersonalDetails'
import Experience from './DataList/Sections/Experience'
import Education from './DataList/Sections/Education'
import Volunteering from './DataList/Sections/Volunteering'
import Awards from './DataList/Sections/Awards'

/* Import Styling for Left Side */
import './LeftSide.css';  

export default function LeftSide() {
    return (
        <div className="leftSide">
            <ResumeManager />
            <PersonalDetails />
            <Experience />
            <Education />
            <Volunteering />
            <Awards />
        </div>
    );
}