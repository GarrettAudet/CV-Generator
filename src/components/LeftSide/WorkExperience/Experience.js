import React, { useState } from 'react';
import JobEntry from './JobEntry';
import SegmentHeader from '../subHeader/segmentHeader'; 
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
        <div className="Experience LHSInput">
            <SegmentHeader icon={faToolbox} headerText="Experience" toggle={toggleVisibility} isVisible = {isVisible} />
            {isVisible && jobs.map((job, index) => (
                <JobEntry 
                    key={job.id}
                    job={job}
                    isVisible={isVisible}
                    onChange={(field, value) => handleFieldChange(index, field, value)}
                    onDateChange={(field, date) => handleDateChange(index, field, date)}
                />
            ))}
            <AddExperience headerText = "Add Experience"/>
        </div>
    );
}

export default Experience;


