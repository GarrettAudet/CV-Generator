import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './segmentHeader.css';
import '../CommonStyles/styles.css';

export default function SegmentHeader( {icon, headerText}) {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(prevIsVisible => !prevIsVisible);  
    };
  
    return (
        <div className="Experience LHSInput">
            <h2 className="LHSInputHeader" onClick={toggleVisibility}>
                <div className="iconGrouped">
                    <FontAwesomeIcon icon={icon} className='classIcon experienceIcon'/>
                    {headerText}
                </div>
                <FontAwesomeIcon icon={faChevronUp} className={`chevronIcon ${isVisible ? 'rotated' : ''}`} />
            </h2>
        </div>
    );
}