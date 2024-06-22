import React, { useState, useEffect } from 'react';
import SelectOption from './Option/selectOption';
import PersonalDetails from './PersonalDetails/PersonalDetails';
import Experience from './DataList/Sections/Experience';
import Education from './DataList/Sections/Education';
import Volunteering from './DataList/Sections/Volunteering';
import Awards from './DataList/Sections/Awards';
import './LeftSide.css';

import { 
  initialPersonalInformation,  
  initialJobsData,
  initialEducationData,
  initialVolunteerData,
  initialAwardsData,
} from './DataList/SampleData/SampleData';

export default function LeftSide() {
    const [personal, setPersonal] = useState(initialPersonalInformation);
    const [jobs, setJobs] = useState(initialJobsData);
    const [education, setEducation] = useState(initialEducationData);
    const [volunteer, setVolunteer] = useState(initialVolunteerData);
    const [awards, setAwards] = useState(initialAwardsData);

    const clearData = () => {
        setPersonal({
            fullName: '',
            specialization: '',
            subSpecialization: '',
            url: ''
        });
        setJobs([]);
        setEducation([]);
        setVolunteer([]);
        setAwards([]);
    };

    const loadData = () => {
        setPersonal(initialPersonalInformation);
        setJobs(initialJobsData);
        setEducation(initialEducationData);
        setVolunteer(initialVolunteerData);
        setAwards(initialAwardsData);
    };

    console.log("Personal Info", initialPersonalInformation);
    console.log("Personal Item", personal);

    return (
        <div className="leftSide">
            <SelectOption clearResume={clearData} loadResume={loadData} />
            <PersonalDetails personalDetail={personal} />
            <Experience jobsData={jobs} />
            <Education educationData={education} />
            <Volunteering volunteerData={volunteer} />
            <Awards awardsData={awards} />
        </div>
    );
}


