import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './AddExperience.css'

export default function AddExperience( {headerText}) {
    return (
        <div class = 'addExperienceContainer'>
            <div class='addExperience'>
                <FontAwesomeIcon icon={faPlus} />
                <h4>{headerText}</h4>
            </div>
        </div>
    );
}