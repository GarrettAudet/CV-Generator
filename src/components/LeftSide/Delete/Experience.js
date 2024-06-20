import React, { useState } from 'react';
import JobEntry from './JobEntry';
import './Experience.css'
import ExperienceHeader from './ExperienceHeader'
import SegmentHeader from '../Delete/subHeader/segmentHeader'; 
import AddExperience from './AddExperience';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import { jobsData } from '../sampleData/sampleData'; 

function Experience() {
    const [jobs, setJobs] = useState(jobsData);
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible); 
    };

    const handleFieldChange = (index, field, value) => {
        const updatedJobs = jobs.map((job, idx) => {
            if (idx === index) {
                return {...job, [field]: value};
            }
            return job;
        });
        setJobs(updatedJobs);
    };

    const handleDateChange = (index, field, date) => {
        const updatedJobs = jobs.map((job, idx) => {
            if (idx === index) {
                return {...job, [field]: date};
            }
            return job;
        });
        setJobs(updatedJobs);
    };

    return (
        <div className="Experience">
            <SegmentHeader icon={faToolbox} headerText="Experience" toggle={toggleVisibility} isVisible = {isVisible} />
            <div className={`elementContainer ${isVisible ? 'visible' : ''}`}>
                {isVisible && jobs.map((job, index) => (
                    <ExperienceHeader key = {job.id} toggle={toggleVisibility} headerText = {job.jobTitle} additionalClass = {index === 0 ? 'firstItem' : ''}/>
                    /* <JobEntry 
                        key={job.id}
                        job={job}
                        isVisible={isVisible}
                        onChange={(field, value) => handleFieldChange(index, field, value)}
                        onDateChange={(field, date) => handleDateChange(index, field, date)}
                    /> */
                ))}
                <AddExperience headerText = "Add Experience" toggle={toggleVisibility} isVisible = {isVisible}/>
            </div>
        </div>
    );
}

export default Experience;


