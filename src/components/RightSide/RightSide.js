import './RightSide.css';
import React from 'react';
import { initialPersonalInformation } from '../LeftSide/DataList/SampleData/SampleData.js'
import Header from './Header/Header.js';
import Section from './Section/Experience';

export default function RightSide() {
    return (
        <div className="rightSide">
            <Header 
                name={initialPersonalInformation.fullName} 
                subheader1={initialPersonalInformation.specialization} 
                subheader2={initialPersonalInformation.subSpecialization} 
                linkedin={initialPersonalInformation.url}
            />
            <Section title="Professional Experience" />
            <Section title="Education & Publications" />
            <Section title="Volunteer Experience" />
        </div>
    );
}