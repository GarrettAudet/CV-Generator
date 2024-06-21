import React, { useState, useEffect } from 'react';
import SelectOption from './Option/selectOption';
import PersonalDetails from './PersonalDetails/PersonalDetails';
import Experience from './DataList/Sections/Experience';
import Education from './DataList/Sections/Education';
import Volunteering from './DataList/Sections/Volunteering';
import Awards from './DataList/Sections/Awards';
import './LeftSide.css';

import {
  initialJobsData,
  initialEducationData,
  initialVolunteerData,
  initialAwardsData,
} from './DataList/SampleData/SampleData';

export default function LeftSide() {
    const [jobs, setJobs] = useState(initialJobsData);
    const [education, setEducation] = useState(initialEducationData);
    const [volunteer, setVolunteer] = useState(initialVolunteerData);
    const [awards, setAwards] = useState(initialAwardsData);

    useEffect(() => {
        console.log('Jobs updated:', jobs);
    }, [jobs]);

    useEffect(() => {
        console.log('Education updated:', education);
    }, [education]);

    useEffect(() => {
        console.log('Volunteer updated:', volunteer);
    }, [volunteer]);

    useEffect(() => {
        console.log('Awards updated:', awards);
    }, [awards]);

    const clearData = () => {
        setJobs([]);
        setEducation([]);
        setVolunteer([]);
        setAwards([]);
        console.log('Clear data triggered');
    };

    const loadData = () => {
        setJobs(initialJobsData);
        setEducation(initialEducationData);
        setVolunteer(initialVolunteerData);
        setAwards(initialAwardsData);
        console.log('Load data triggered');
    };

    return (
        <div className="leftSide">
            <SelectOption clearResume={clearData} loadResume={loadData} />
            <PersonalDetails />
            <Experience jobsData={jobs} />
            <Education educationData={education} />
            <Volunteering volunteerData={volunteer} />
            <Awards awardsData={awards} />
        </div>
    );
}

