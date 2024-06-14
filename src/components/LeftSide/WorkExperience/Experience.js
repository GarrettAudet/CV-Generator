import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './Experience.css';  
import '../CommonStyles/styles.css'

export default function Experience() {
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