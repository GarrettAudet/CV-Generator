import React, { useState } from 'react';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import './Awards.css';  
import SegmentHeader from '../subHeader/segmentHeader'
import '../CommonStyles/styles.css'

export default function Awards() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible); 
    };

    return (
        <div className="Experience">
            <SegmentHeader icon={faAward} headerText="Awards" toggle={toggleVisibility} isVisible = {isVisible} />
         </div>
    );
}