import React, { useContext, useState } from 'react';
import SelectOption from './Option/selectOption';
import PersonalDetails from './PersonalDetails/PersonalDetails';
import Experience from './DataList/Sections/Experience';
import Education from './DataList/Sections/Education';
import Volunteering from './DataList/Sections/Volunteering';
import Awards from './DataList/Sections/Awards';
import './LeftSide.css';
import PersonalInfoContext from '../RightSide/Header/PersonalInfoContext'
import {
  initialJobsData,
  initialEducationData,
  initialVolunteerData,
  initialAwardsData,
  initialPersonalInformation, 
} from './DataList/SampleData/SampleData'; // Adjust the path as necessary

export default function LeftSide() {
    const { personalInfo, handlePersonalChange } = useContext(PersonalInfoContext);

    const [jobs, setJobs] = useState(initialJobsData);
    const [education, setEducation] = useState(initialEducationData);
    const [volunteer, setVolunteer] = useState(initialVolunteerData);
    const [awards, setAwards] = useState(initialAwardsData);

    const clearData = () => {
        handlePersonalChange('fullName', '');
        handlePersonalChange('specialization', '');
        handlePersonalChange('subSpecialization', '');
        handlePersonalChange('url', '');
        setJobs([]);
        setEducation([]);
        setVolunteer([]);
        setAwards([]);
    };

    const loadData = () => {
        handlePersonalChange('fullName', initialPersonalInformation.fullName);
        handlePersonalChange('specialization', initialPersonalInformation.specialization);
        handlePersonalChange('subSpecialization', initialPersonalInformation.subSpecialization);
        handlePersonalChange('url', initialPersonalInformation.url);
        setJobs(initialJobsData);
        setEducation(initialEducationData);
        setVolunteer(initialVolunteerData);
        setAwards(initialAwardsData);
    };

    return (
        <div className="leftSide">
            <SelectOption clearResume={clearData} loadResume={loadData} />
            <PersonalDetails personalDetail={personalInfo} onPersonalChange={handlePersonalChange} />
            <Experience jobsData={jobs} />
            <Education educationData={education} />
            <Volunteering volunteerData={volunteer} />
            <Awards awardsData={awards} />
        </div>
    );
}



