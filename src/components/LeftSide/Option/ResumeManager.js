import React, { useState } from 'react';
import SelectOption from './selectOption';
import {
  jobsData as initialJobsData,
  educationData as initialEducationData,
  volunteerData as initialVolunteerData,
  awardsData as initialAwardsData,
  emptyjobsData,
  emptyeducationData,
  emptyvolunteerData,
  emptyawardsData
} from '../DataList/SampleData/SampleData';

/* Import Relevant Modules */
import Experience from '../DataList/Sections/Experience';
import Education from '../DataList/Sections/Education';
import Volunteering from '../DataList/Sections/Volunteering';
import Awards from '../DataList/Sections/Awards';

function ResumeManager() {
  const [jobs, setJobs] = useState(initialJobsData);
  const [education, setEducation] = useState(initialEducationData);
  const [volunteer, setVolunteer] = useState(initialVolunteerData);
  const [awards, setAwards] = useState(initialAwardsData);

  const clearResume = () => {
    setJobs(emptyjobsData);
    setEducation(emptyeducationData);
    setVolunteer(emptyvolunteerData);
    setAwards(emptyawardsData);
    console.log('clear')
  };

  const loadResume = () => {
    setJobs(initialJobsData);
    setEducation(initialEducationData);
    setVolunteer(initialVolunteerData);
    setAwards(initialAwardsData);
    console.log('load')
  };

  return (
    <>
      <SelectOption clearResume={clearResume} loadResume={loadResume} />
      <Experience jobsData = {jobs}/>
      <Education educationData = {education}/>
      <Volunteering volunteerData = {volunteer}/>
      <Awards awardsData = {awards}/>
    </>
  );
}

export default ResumeManager;
