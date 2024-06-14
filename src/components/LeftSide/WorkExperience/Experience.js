import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './Experience.css';  
import '../CommonStyles/styles.css'

export default function Experience() {
    // Initialize state for each detail with default values
    const [details, setDetails] = useState({
        jobTitle: 'Senior Analyst',
        company: 'Accenture',
        startDate: 'July 2021',
        endDate: 'November 2023',
        description: ''
    });

    // Function to handle change in input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    // HTML 
    return (
        <div className="Experience LHSInput">
            <h2 className="LHSInputHeader">
                <div className="iconGrouped">
                    <FontAwesomeIcon icon={faToolbox} className='classIcon experienceIcon'/>
                    Experience
                </div>
                <FontAwesomeIcon icon={faChevronUp} />
            </h2>
        </div>
    );
}