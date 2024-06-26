import React, { useContext } from 'react';
import './RightSide.css';
import Header from './Header/Header';
import Section from './Section/Experience'
import { SampleDataContext } from '../LeftSide/DataList/SampleData/SampleDataContext';

export default function RightSide() {
  const { jobs, education, volunteer, awards, personalInfo } = useContext(SampleDataContext);

  console.log('Rendering RightSide with data:', { jobs, education, volunteer, awards, personalInfo });

  return (
    <div className="rightSide">
      <Header 
        name={personalInfo.fullName}
        subheader1={personalInfo.specialization}
        subheader2={personalInfo.subSpecialization}
        linkedin={personalInfo.url}
      />
      <Section title="Professional Experience" data={jobs} />
      <Section title="Education & Publications" data={education} />
      <Section title="Volunteer Experience" data={volunteer} />
      <Section title="Additional Information" data={awards} />
    </div>
  );
}

