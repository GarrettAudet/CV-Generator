import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './AddExperience.css';

export default function AddExperience({ headerText, isVisible, toggle }) {
    return (
        <div className={`addExperienceContainer ${isVisible ? 'visible' : 'hidden'}`}>
            <div className='addExperience' onClick={toggle}>
                <FontAwesomeIcon icon={faPlus} className = "faPlus"/>
                <h4>{headerText}</h4>
            </div>
        </div>
    );
}
