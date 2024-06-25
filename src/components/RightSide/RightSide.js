import React, { useContext } from 'react';
import './RightSide.css';
import Header from './Header/Header';
import Section from './Section/Experience';
import PersonalInfoContext from '../RightSide/Header/PersonalInfoContext'; 

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
            <Section title="Professional Experience" />
            <Section title="Education & Publications" />
            <Section title="Volunteer Experience" />
            <Section title="Additional Information" />
        </div>
    );
}
