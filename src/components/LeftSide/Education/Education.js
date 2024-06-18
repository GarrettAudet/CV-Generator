import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './Education.css';
import '../CommonStyles/styles.css'

export default function Experience() {
    // Set Visible State
    const [isVisible, setIsVisible] = useState(false);

    // Education 
    const [education, setEducation] = useState([{
        school: "Queen's Universty",
        degree: 'Bachelor of Commerce',
        startDate: new Date(2021, 6),
        endDate: new Date(2023, 10),
    }]);

    return (
        <div className="Experience LHSInput">
            <h2 className="LHSInputHeader">
                <div className="iconGrouped">
                    <FontAwesomeIcon icon={faSchool} className='classIcon educationIcon' />
                    Education
                </div>
                <FontAwesomeIcon icon={faChevronUp} />
            </h2>
        </div>
    );
}