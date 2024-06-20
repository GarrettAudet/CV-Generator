import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './SegmentHeader.css';
import '../CommonStyles/styles.css';

export default function SegmentHeader({ icon, headerText, isVisible, toggle }) {
    return (
        <>
            <h2 className="LHSInputHeader" onClick={toggle}>
                <div className="iconGrouped">
                    <FontAwesomeIcon icon={icon} className='classIcon experienceIcon'/>
                    {headerText}
                </div>
                <FontAwesomeIcon icon={faChevronUp} className={`chevronIcon ${isVisible ? 'rotated' : 'notrotated'}`} />
            </h2>
        </>
    );
}
