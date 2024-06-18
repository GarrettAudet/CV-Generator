/* Import Library */ 
import React from 'react';

/* Import Sample Data */
import { jobsData } from './sampleData/sampleData.js'

/* Import Personal Information */
import Option from './Option/selectOption';
import PersonalDetails from './PersonalDetails/PersonalDetails'

/* Work Experience Details */
import JobEntry from './WorkExperience/Experience.js'


import Education from './Education/Education'
import Awards from './Awards/Awards';
import './LeftSide.css';  

export default function LeftSide() {
    return (
        <div className="leftSide">
            <Option />
            <PersonalDetails />
            <JobEntry 
                key={jobsData.id} 
                job={jobsData} 
                onChange={handleFieldChange} 
                onDateChange={handleDateChange} 
            />
            <Education />
            <Awards />
        </div>
    );
}