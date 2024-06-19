import React from 'react';
import './ExperienceHeader.css';
import '../CommonStyles/styles.css';

export default function ExperienceHeader({ headerText, isVisible }) {
    return (
        <div className={`chevronIcon ${isVisible ? 'rotated' : 'notrotated'}`}>
            <h2 className="LHSInputHeader" onClick={toggle}>{headerText}</h2>
        </div>
    );
}
