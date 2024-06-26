import React, { createContext, useState } from 'react';
import { initialJobsData, initialEducationData, initialVolunteerData, initialAwardsData, initialPersonalInformation } from './SampleData'

export const SampleDataContext = createContext();

export const SampleDataProvider = ({ children }) => {
  const [jobs, setJobs] = useState(initialJobsData);
  const [education, setEducation] = useState(initialEducationData);
  const [volunteer, setVolunteer] = useState(initialVolunteerData);
  const [awards, setAwards] = useState(initialAwardsData);
  const [personalInfo, setPersonalInfo] = useState(initialPersonalInformation);

  const updateJobs = (newJobs) => {
    console.log('Updating jobs:', newJobs);
    setJobs(newJobs);
  };

  const updateEducation = (newEducation) => {
    console.log('Updating education:', newEducation);
    setEducation(newEducation);
  };

  const updateVolunteer = (newVolunteer) => {
    console.log('Updating volunteer:', newVolunteer);
    setVolunteer(newVolunteer);
  };

  const updateAwards = (newAwards) => {
    console.log('Updating awards:', newAwards);
    setAwards(newAwards);
  };

  const updatePersonalInfo = (name, value) => {
    setPersonalInfo(prevInfo => ({
      ...prevInfo,
      [name]: value
    }));
    console.log('Updating personal info:', name, value);
  };

  return (
    <SampleDataContext.Provider value={{ jobs, education, volunteer, awards, personalInfo, updateJobs, updateEducation, updateVolunteer, updateAwards, updatePersonalInfo }}>
      {children}
    </SampleDataContext.Provider>
  );
};
