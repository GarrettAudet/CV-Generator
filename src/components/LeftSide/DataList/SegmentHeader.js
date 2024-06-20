import React from 'react';
import './SegmentHeader.css';
import '../CommonStyles/styles.css';

export default function SegmentHeader({ headerText, isVisible, toggle, additionalClass }) {
    return (
        <div className={`experienceHeader ${isVisible ? 'hidden' : 'visible'} ${additionalClass}`}>
            <h2 className="LHSInputHeader" onClick={toggle}>{headerText}</h2>
        </div>
    );
}
