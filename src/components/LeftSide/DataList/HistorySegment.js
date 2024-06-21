import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenFancy } from '@fortawesome/free-solid-svg-icons';
import './HistorySegment.css';
import '../CommonStyles/styles.css'

function HistorySegment({ headerText, institution, delineate, isVisible, toggle, onEditClick, additionalClass }) {
    // Stop propagation to ensure clicking the icon does not trigger parent event handlers
    const handleIconClick = (e) => {
        e.stopPropagation(); // Prevents triggering toggle or other onClick events on parent elements
        onEditClick(); // Call the edit handler
    };

    return (
        <div className={`experienceHeader ${isVisible ? 'hidden' : ''} ${additionalClass}`}>
            <h2 className="LHSInputHeader" onClick={toggle}>
                {headerText}{delineate}{institution}
            </h2>
            <FontAwesomeIcon icon={faPenFancy} onClick={handleIconClick} />
        </div>
    );
}

export default HistorySegment;