import React from 'react';
import './HistorySegment.css';
import '../CommonStyles/styles.css'

export default function HistorySegment({ headerText, isVisible, toggle, additionalClass }) {
    return (
        <div className={`experienceHeader ${isVisible ? 'hidden' : 'visible'} ${additionalClass}`}>
            <h2 className="LHSInputHeader" onClick={toggle}>{headerText}</h2>
        </div>
    );
}