import React, { useState } from 'react';
import JobEntry from './Experience';
import SegmentHeader from './segmentHeader'
import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import { jobsData } from '../sampleData/sampleData';

function Experience() {
    const [jobs, setJobs] = useState(jobsData);

    const handleFieldChange = (index, field, value) => {
        const newJobs = jobs.map((job, idx) => {
            if (idx === index) {
                return { ...job, [field]: value };
            }
            return job;
        });
        setJobs(newJobs);
    };

    const handleDateChange = (index, field, date) => {
        const newJobs = jobs.map((job, idx) => {
            if (idx === index) {
                return { ...job, [field]: date };
            }
            return job;
        });
        setJobs(newJobs);
    };

    return (
        <div>
            <SegmentHeader icon={faToolbox} headerText="Experience" />
            {jobs.map((job, index) => (
                <JobEntry 
                    key={job.id}
                    job={job}
                    onChange={(field, value) => handleFieldChange(index, field, value)}
                    onDateChange={(field, date) => handleDateChange(index, field, date)}
                />
            ))}
        </div>
    );
}

export default Experience;

