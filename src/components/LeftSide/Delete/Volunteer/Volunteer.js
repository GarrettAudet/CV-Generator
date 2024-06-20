import React, { useState } from 'react';
import { faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';
import './Volunteer.css';  
import SegmentHeader from '../subHeader/segmentHeader'
import '../CommonStyles/styles.css'

export default function Volunteering() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible); 
    };

    return (
        <div className="Experience">
            <SegmentHeader icon={faHandshakeAngle} headerText="Volunteering" toggle={toggleVisibility} isVisible = {isVisible} />
         </div>
    );
}