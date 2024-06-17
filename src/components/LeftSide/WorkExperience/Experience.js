import React from 'react';
import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './Experience.css';  
import '../CommonStyles/styles.css'

export default function Experience() {
    // Set Active or Inactive
    const [isVisible, setIsVisible] = useState(false);

    // Initialize state for each detail with default values
    const [jobs, setJobs] = useState([{
        jobTitle: 'Senior Analyst',
        company: 'Accenture',
        startDate: new Date(2021,6),
        endDate: new Date(2023, 10),
        description: "Developed a comprehensive go-to-market, growth, and business development strategy for Accenture’s Strategy and Machine Learning Practice, securing key sales inroads across 3 industries, and recognition as a top revenue opportunity in North America"
    }]);

    // Function to add a new job
    const addJob = (newJob) => {
        setJobs(prevJobs => [...prevJobs, newJob]);
    };

    // Function to add a description to a specific job
    const addDescriptionToJob = (jobIndex, newDescription) => {
        setJobs(prevJobs => prevJobs.map((job, index) => {
            if (index === jobIndex) {
                return {
                    ...job,
                    descriptions: [...job.descriptions, newDescription]
                };
            }
        return job;
        }));
    };

    // Edit Parameter
    const handleChange = (event, index = 0) => {
        const { name, value } = event.target;
        setJobs(jobs => jobs.map((job, idx) => idx === index ? {...job, [name]: value} : job));
    };

    // Toggle Visibility 
    const toggleVisibility = () => {
        setIsVisible(current => !current);
    };

    // HTML 
    return (
        <div className="Experience LHSInput">
            <h2 className="LHSInputHeader" onClick={toggleVisibility}>
                <div className="iconGrouped">
                    <FontAwesomeIcon icon={faToolbox} className='classIcon experienceIcon'/>
                    Experience
                </div>
                <FontAwesomeIcon icon={faChevronUp} className={`chevronUp ${isVisible ? 'rotate' : ''}`} />
            </h2>
            <form className={`experienceInput ${!isVisible ? 'hidden' : ''}`}>
                <div className="detailItem">
                    <label className="experienceLabel">Job Title</label>
                    <input
                        className = 'inputField'     
                        type="text" 
                        name="jobTitle" 
                        value={jobs.jobTitle} 
                        onChange={handleChange} />
                </div>
                <div className="detailItem">
                    <label className="experienceLabel">Company</label>
                    <input 
                        type="text" 
                        name="company" 
                        value={jobs.company}  
                        onChange={handleChange} />
                </div>
                <div className="detailItem">
                    <label className="experienceLabel">Start Date</label>
                    <DatePicker
                        className = 'inputField'    
                        name="startDate" 
                        value={jobs.startDate}  
                        onChange={date => handleChange(date, 'startDate')} 
                        dateFormat="MMMM yyyy" 
                        showMonthYearPicker/>
                </div>
                <div className="detailItem">
                    <label className="experienceLabel">End Date</label>
                    <DatePicker
                        className = 'inputField'   
                        name="endDate" 
                        value={jobs.endDate} 
                        onChange={date => handleChange(date, 'endDate')}
                        dateFormat="MMMM yyyy" 
                        showMonthYearPicker/>
                </div>
                <div className="detailItem">
                    <label className="experienceLabel">Description</label>
                    <textarea
                        className = 'inputField descriptionInput'  
                        type="text" 
                        name="description" 
                        value={jobs.description}  
                        onChange={handleChange}
                        rows="4" />
                </div>
            </form>
        </div>
    );
}