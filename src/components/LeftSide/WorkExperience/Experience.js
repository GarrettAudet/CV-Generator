import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './Experience.css';  

export default function Experience() {
    return (
        <div className="Experience LHSInput">
            <h2 className="LHSInputHeader">
                <div className="iconGrouped">
                    <FontAwesomeIcon icon={faToolbox} />
                    Experience
                </div>
                <FontAwesomeIcon icon={faChevronUp} />
            </h2>
        </div>
    );
}