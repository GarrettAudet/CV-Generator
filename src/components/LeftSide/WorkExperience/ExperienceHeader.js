import React from 'react';
import './ExperienceHeader.css';
import '../CommonStyles/styles.css';

export default function ExperienceHeader( {headerText, isVisible}) {
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