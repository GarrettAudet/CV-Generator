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
    </>
  );
}

export default ResumeManager;
