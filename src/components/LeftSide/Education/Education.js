import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './Education.css';
import '../CommonStyles/styles.css'

export default function Experience() {
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