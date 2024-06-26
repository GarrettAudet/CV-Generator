import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './AddItem.css';

/* This is the Function that Enables an Item to be Added to an Array (Experience, Education, etc.) */
export default function AddItem({ headerText, isVisible, insertNew }) {
    return (
      <div className={`addExperienceContainer ${isVisible ? 'visible' : 'hidden'}`}>
        <div className='addExperience' onClick={insertNew}>
          <FontAwesomeIcon icon={faPlus} className="faPlus" />
          <h4>{headerText}</h4>
        </div>
      </div>
    );
  }
