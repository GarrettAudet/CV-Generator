import React from 'react';
import './ExperienceHeader.css';
import '../CommonStyles/styles.css';

export default function ExperienceHeader({ headerText, isVisible, toggle, additionalClass }) {
    return (
        <div className={`experienceHeader ${isVisible ? 'hidden' : 'visible'} ${additionalClass}`}>
            <h2 className="LHSInputHeader" onClick={toggle}>{headerText}</h2>
        </div>
    );
}
