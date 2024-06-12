import './Experience.css'
import React from 'react';

export default function Section(props) {
    return (
        <div className='underline'>
            <h2 className="sectionTitle">{props.title}</h2>
        </div>
    );
}
