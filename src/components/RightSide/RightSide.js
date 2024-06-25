import React, { useContext } from 'react';
import './RightSide.css';
import Header from './Header/Header';
import Section from './Section/Experience';
import PersonalInfoContext from '../RightSide/Header/PersonalInfoContext'; 
import {
    initialJobsData,
    initialEducationData,
    initialVolunteerData,
    initialAwardsData
  } from '../LeftSide/DataList/SampleData/SampleData'

export default function RightSide() {
    const { personalInfo } = useContext(PersonalInfoContext);

    return (
        <div className="rightSide">
            <Header 
                name={personalInfo.fullName}
                subheader1={personalInfo.specialization}
                subheader2={personalInfo.subSpecialization}
                linkedin={personalInfo.url}
            />
            <Section title="Professional Experience" data = {initialJobsData}/>
            <Section title="Education & Publications" data = {initialEducationData}/>
            <Section title="Volunteer Experience" data = {initialVolunteerData}/>
            <Section title="Additional Information" data = {initialAwardsData}/>
        </div>
    );
}
