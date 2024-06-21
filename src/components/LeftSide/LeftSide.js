import React, { useState } from 'react';
import SelectOption from './Option/selectOption';
import PersonalDetails from './PersonalDetails/PersonalDetails'
import Experience from './DataList/Sections/Experience'
import Education from './DataList/Sections/Education'
import Volunteering from './DataList/Sections/Volunteering'
import Awards from './DataList/Sections/Awards'
import './LeftSide.css';

// Assuming you have import paths and initial data available
import {
  initialJobsData,
  initialEducationData,
  initialVolunteerData,
  initialAwardsData,
  emptyjobsData,
  emptyeducationData,
  emptyvolunteerData,
  emptyawardsData
} from './DataList/SampleData/SampleData';  

export default function LeftSide() {
    const [jobs, setJobs] = useState(initialJobsData);
    const [education, setEducation] = useState(initialEducationData);
    const [volunteer, setVolunteer] = useState(initialVolunteerData);
    const [awards, setAwards] = useState(initialAwardsData);

    const clearData = () => {
        setJobs(emptyjobsData);
        setEducation(emptyeducationData);
        setVolunteer(emptyvolunteerData);
        setAwards(emptyawardsData);
    };

    const loadData = () => {
        setJobs(initialJobsData);
        setEducation(initialEducationData);
        setVolunteer(initialVolunteerData);
        setAwards(initialAwardsData);
    };

    return (
        <div className="leftSide">
            <SelectOption clearData={clearData} loadData={loadData} />
            <PersonalDetails />
            <Experience jobsData={jobs} />
            <Education educationData={education} />
            <Volunteering volunteerData={volunteer} />
            <Awards awardsData={awards} />
        </div>
    );
}