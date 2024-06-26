import React, { useContext } from 'react';
import SelectOption from './Option/selectOption';
import PersonalDetails from './PersonalDetails/PersonalDetails';
import Experience from './DataList/Sections/Experience';
import Education from './DataList/Sections/Education';
import Volunteering from './DataList/Sections/Volunteering';
import Awards from './DataList/Sections/Awards';
import './LeftSide.css';
import { SampleDataContext } from './DataList/SampleData/SampleDataContext';
import {
  initialJobsData,
  initialEducationData,
  initialVolunteerData,
  initialAwardsData,
  initialPersonalInformation,
} from './DataList/SampleData/SampleData';

export default function LeftSide() {
  const { jobs, education, volunteer, awards, personalInfo, updateJobs, updateEducation, updateVolunteer, updateAwards, updatePersonalInfo } = useContext(SampleDataContext);

  const clearData = () => {
    console.log('Clearing data');
    updatePersonalInfo({
      fullName: '',
      specialization: '',
      subSpecialization: '',
      url: '',
    });
    updateJobs([]);
    updateEducation([]);
    updateVolunteer([]);
    updateAwards([]);
  };

  const loadData = () => {
    console.log('Loading data');
    updatePersonalInfo(initialPersonalInformation);
    updateJobs(initialJobsData);
    updateEducation(initialEducationData);
    updateVolunteer(initialVolunteerData);
    updateAwards(initialAwardsData);
  };

  const handleDeleteJob = (jobId) => {
    console.log('Deleting job:', jobId);
    updateJobs(jobs.filter(job => job.id !== jobId));
  };

  const handleDeleteEducation = (educationId) => {
    console.log('Deleting education:', educationId);
    updateEducation(education.filter(edu => edu.id !== educationId));
  };

  const handleDeleteVolunteer = (volunteerId) => {
    console.log('Deleting volunteer:', volunteerId);
    updateVolunteer(volunteer.filter(vol => vol.id !== volunteerId));
  };

  const handleDeleteAward = (awardId) => {
    console.log('Deleting award:', awardId);
    updateAwards(awards.filter(award => award.id !== awardId));
  };

  return (
    <div className="leftSide">
      <SelectOption clearResume={clearData} loadResume={loadData} />
      <PersonalDetails personalDetail={personalInfo} onPersonalChange={updatePersonalInfo} />
      <Experience 
        jobsData={jobs} 
        onSave={updateJobs} 
        onDelete={handleDeleteJob} 
        onCancel={() => {}} 
      />
      <Education 
        educationData={education} 
        onSave={updateEducation} 
        onDelete={handleDeleteEducation} 
        onCancel={() => {}} 
      />
      <Volunteering 
        volunteerData={volunteer} 
        onSave={updateVolunteer} 
        onDelete={handleDeleteVolunteer} 
        onCancel={() => {}} 
      />
      <Awards 
        awardsData={awards} 
        onSave={updateAwards} 
        onDelete={handleDeleteAward} 
        onCancel={() => {}} 
      />
    </div>
  );
}

