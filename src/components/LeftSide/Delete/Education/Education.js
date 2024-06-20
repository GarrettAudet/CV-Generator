import React, { useState } from 'react';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import './Education.css';
import SegmentHeader from '../subHeader/segmentHeader'
import ExperienceHeader from '../WorkExperience/ExperienceHeader'
import AddExperience from '../WorkExperience/AddExperience';
import { educationData } from '../sampleData/sampleData'; 
import '../CommonStyles/styles.css'

export default function Education() {
    const [educations, setEducation] = useState(educationData);
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible); 
    };

    const handleFieldChange = (index, field, value) => {
        const updatedEducation = educations.map((education, idx) => {
            if (idx === index) {
                return {...education, [field]: value};
            }
            return education;
        });
        setEducation(updatedEducation);
    };

    const handleDateChange = (index, field, date) => {
        const updatedEducation = educations.map((education, idx) => {
            if (idx === index) {
                return {...education, [field]: date};
            }
            return education;
        });
        setEducation(updatedEducation);
    };

    return (
        <div className="Experience">
            <SegmentHeader icon={faSchool} headerText="Education" toggle={toggleVisibility} isVisible = {isVisible} />
            <div className={`elementContainer ${isVisible ? 'visible' : ''}`}>
                {isVisible && educations.map((education, index) => (
                    <ExperienceHeader key = {education.id} toggle={toggleVisibility} headerText = {education.educationTopic} additionalClass = {index === 0 ? 'firstItem' : ''}/>
                    /* <JobEntry 
                        key={job.id}
                        job={job}
                        isVisible={isVisible}
                        onChange={(field, value) => handleFieldChange(index, field, value)}
                        onDateChange={(field, date) => handleDateChange(index, field, date)}
                    /> */
                ))}
                <AddExperience headerText = "Add Education" toggle={toggleVisibility} isVisible = {isVisible}/>
            </div>
         </div>
    );
}