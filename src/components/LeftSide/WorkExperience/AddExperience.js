import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function AddExperience( {headerText}) {
    return (
        <div>
            <FontAwesomeIcon icon={faPlus} />
            <h4>{headerText}</h4>
        </div>
    );
}