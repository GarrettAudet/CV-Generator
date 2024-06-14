import React from 'react';
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
    const [jobs, setJobs] = useState({
        jobTitle: 'Senior Analyst',
        company: 'Accenture',
        startDate: "07/01/2021",
        endDate: "11/01/2023",
        description: [
            "Developed a comprehensive go-to-market, growth, and business development strategy for Accenture’s Strategy and Machine Learning Practice, securing key sales inroads across 3 industries, and recognition as a top revenue opportunity in North America",
            "Collaborated with the CEO’s office to strategically integrate generative AI and environmental datasets into a market-leading technology firm’s geospatial product, significantly boosting model accuracy, and resulting in a multi-million-dollar joint venture.",
            "Conducted a current state assessment, audited KPI usage across departments, and developed a best-in-class media mix model strategy to increase the effectiveness of resource allocation by 30% across advertising media channels for a F500 enterprise bank product.",
            "Coordinated with international agencies to automate application workflows, innovate new processes, and align a national immigration platform impacting 300,000 yearly with global best-in-class practices in response to COVID-19.",
            "Steered a comprehensive economic impact analysis for a veteran reskilling program, leveraging data insights to refine program strategy, improve KPI accuracy, and enhance funding appeal, culminating in a $3M increase in government funding.",
            "Worked closely with a satellite imagery corporation to identify opportunities and ideate product concepts resulting in the joint development of a computer vision product that minimizes the environmental impact of infrastructure development.",
            "Partnered with engineering stakeholders to streamline small-to-medium business loan applications by 35% and grow business-to-business market share by 15% for a major Canadian financial institution."
        ]
    });

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
    const handleChange = (event) => {
        const { name, value } = event.target;
        setJobs(prevJobs => ({
            ...prevJobs,
            [name]: value
        }));
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
                <FontAwesomeIcon icon={faChevronUp} />
            </h2>
            <form className={`experienceInput ${!isVisible ? 'hidden' : ''}`}>
                <div className="detailItem">
                    <label>Job Title</label>
                    <input 
                        type="text" 
                        name="jobTitle" 
                        value={jobs.jobTitle} 
                        onChange={handleChange} />
                </div>
                <div className="detailItem">
                    <label>Company</label>
                    <input 
                        type="text" 
                        name="company" 
                        value={jobs.company}  
                        onChange={handleChange} />
                </div>
                <div className="detailItem">
                    <label>Start Date</label>
                    <input 
                        type="date" 
                        name="startDate" 
                        value={jobs.startDate}  
                        onChange={handleChange} />
                </div>
                <div className="detailItem">
                    <label>End Date</label>
                    <input 
                        type="date" 
                        name="endDate" 
                        value={jobs.endDate} 
                        onChange={handleChange} />
                </div>
                <div className="detailItem">
                    <label>Description</label>
                    <input 
                        type="text" 
                        name="description" 
                        value={jobs.description}  
                        onChange={handleChange} />
                </div>
            </form>
        </div>
    );
}