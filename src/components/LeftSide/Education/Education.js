import React, { useState } from 'react';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import './Education.css';
import SegmentHeader from '../subHeader/segmentHeader'
import '../CommonStyles/styles.css'

export default function Education() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible); 
    };

    return (
        <div className="Experience">
            <SegmentHeader icon={faSchool} headerText="Education" toggle={toggleVisibility} isVisible = {isVisible} />
         </div>
    );
}