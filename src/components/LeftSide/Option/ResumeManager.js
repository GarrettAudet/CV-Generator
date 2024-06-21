import React, { useState } from 'react';
import Option from './selectOption';
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
  };

  const loadResume = () => {
    setJobs(initialJobsData);
    setEducation(initialEducationData);
    setVolunteer(initialVolunteerData);
    setAwards(initialAwardsData);
  };

  return (
    <div>
      <selectOption clearResume={clearResume} loadResume={loadResume} />
      {/* Render other components that use the jobs, education, volunteer, and awards data */}
    </div>
  );
}

export default ResumeManager;
