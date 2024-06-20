import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenFancy } from '@fortawesome/free-solid-svg-icons';
import './HistorySegment.css';
import '../CommonStyles/styles.css'

export default function HistorySegment({ headerText, institution, isVisible, toggle, additionalClass }) {
    return (
        <div className={`experienceHeader ${isVisible ? 'hidden' : 'visible'} ${additionalClass}`}>
            <h2 className="LHSInputHeader" onClick={toggle}>{headerText}, {institution}</h2>
            <FontAwesomeIcon icon={faPenFancy} />
        </div>
    );
}