import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToolbox, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import 'react-datepicker/dist/react-datepicker.css';
import './Experience.css';  
import '../CommonStyles/styles.css';

export default function Experience() {
    const [isVisible, setIsVisible] = useState(false);
    const [jobs, setJobs] = useState([
        {
            id: 1,
            jobTitle: 'Senior Analyst',
            company: 'Accenture',
            startDate: new Date(2021, 6),
            endDate: new Date(2023, 10),
            description: "Developed a comprehensive go-to-market, growth, and business development strategy for Accenture’s Strategy and Machine Learning Practice, securing key sales inroads across 3 industries, and recognition as a top revenue opportunity in North America",
            isVisible: false
        },
        {
            id: 2,
            jobTitle: 'Co-Founder',
            company: 'MarText',
            startDate: new Date(2019, 6),
            endDate: new Date(2021, 6),
            description: "Developed a comprehensive go-to-market, growth, and business development strategy for Accenture’s Strategy and Machine Learning Practice, securing key sales inroads across 3 industries, and recognition as a top revenue opportunity in North America",
            isVisible: false
        },
        {
            id: 3,
            jobTitle: 'Intelligence Operator',
            company: 'Canadian Armed Forces',
            startDate: new Date(2017, 6),
            endDate: new Date(2019, 5),
            description: "Developed a comprehensive go-to-market, growth, and business development strategy for Accenture’s Strategy and Machine Learning Practice, securing key sales inroads across 3 industries, and recognition as a top revenue opportunity in North America",
            isVisible: false
        }
    ]);

    const handleChange = (index, field, value) => {
        setJobs(prevJobs => prevJobs.map((job, idx) => idx === index ? {...job, [field]: value} : job));
    };

    // Toggles Visibility of Specific ID
    const toggleVisibility = (id) => {
        // Update the jobs state by creating a new array with modified visibility
        setJobs(jobs => jobs.map(job => {
            if (job.id === id) {
                // Toggle the visibility of the job that matches the ID
                return {
                    ...job,
                    isVisible: !job.isVisible
                };
            }
            // Return all other jobs unchanged
            return job;
        }));
    };    

    return (
        <div className="Experience LHSInput">
            <h2 className="LHSInputHeader" onClick={toggleVisibility}>
                <div className="iconGrouped">
                    <FontAwesomeIcon icon={faToolbox} className='classIcon experienceIcon'/>
                    Experience
                </div>
                <FontAwesomeIcon icon={faChevronUp} className={`chevronUp ${isVisible ? 'rotate' : 'notrotated'}`} />
            </h2>
            {jobs.map((job, index) => (  // Ensure this map is used
                <form className={`experienceInput ${!isVisible ? 'hidden' : ''}`} key={index}>
                    <div className="detailItem">
                        <label className="experienceLabel">Job Title</label>
                        <input
                            className="inputField"
                            type="text"
                            name="jobTitle"
                            value={job.jobTitle}
                            onChange={e => handleChange(index, e.target.name, e.target.value)}
                        />
                    </div>
                    <div className="detailItem">
                        <label className="experienceLabel">Company</label>
                        <input
                            className="inputField"
                            type="text"
                            name="company"
                            value={job.company}
                            onChange={e => handleChange(index, e.target.name, e.target.value)}
                        />
                    </div>
                    <div class = 'experienceDates'>
                        <div className="detailItem">
                            <label className="experienceLabel">Start Date</label>
                            <DatePicker
                                className="inputField"
                                selected={job.startDate}
                                onChange={date => handleChange(index, 'startDate', date)}
                                dateFormat="MMMM yyyy"
                                showMonthYearPicker
                            />
                        </div>
                        <div className="detailItem">
                            <label className="experienceLabel">End Date</label>
                            <DatePicker
                                className="inputField"
                                selected={job.endDate}
                                onChange={date => handleChange(index, 'endDate', date)}
                                dateFormat="MMMM yyyy"
                                showMonthYearPicker
                            />
                        </div>
                    </div>
                    <div className="detailItem">
                        <label className="experienceLabel">Description</label>
                        <textarea
                            className="inputField descriptionInput"
                            name="description"
                            value={job.description}
                            onChange={e => handleChange(index, e.target.name, e.target.value)}
                            rows="4"
                        />
                    </div>
                </form>
            ))}
        </div>
    );
}