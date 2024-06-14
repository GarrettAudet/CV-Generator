import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './Awards.css';  
import '../CommonStyles/styles.css'

export default function Awards() {
    return (
        <div className="Experience LHSInput">
            <h2 className="LHSInputHeader">
                <div className="iconGrouped">
                    <FontAwesomeIcon icon={faAward} className='classIcon awardsIcon'/>
                    Awards
                </div>
                <FontAwesomeIcon icon={faChevronUp} />
            </h2>
        </div>
    );
}