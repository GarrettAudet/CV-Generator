/* Import Library */ 
import React from 'react';

/* Import Sample Data */

/* Import Personal Information */
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
            <JobEntry 
                key={job.id} 
                job={job} 
                onChange={handleFieldChange} 
                onDateChange={handleDateChange} 
            />
            <Education />
            <Awards />
        </div>
    );
}