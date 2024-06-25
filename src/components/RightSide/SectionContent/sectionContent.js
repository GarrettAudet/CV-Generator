import './sectionContent.css';
import React from 'react';

export default function Content({ item }) {
    const { description, title, institution, startDate, endDate } = item;

    // Format dates to strings
    const formattedStartDate = startDate ? new Date(startDate).toLocaleDateString() : '';
    const formattedEndDate = endDate ? new Date(endDate).toLocaleDateString() : '';

    // Ensure description is defined
    if (!description) {
        return null;
    }

    // Split the description text by "//" to generate bullet points
    const renderBulletPoints = () => {
        return description.split('//').map((bullet, index) => (
            <li key={index} className="bulletPoint">{bullet.trim()}</li>
        ));
    };

    return (
        <div className="experienceParent">
            <div className="experienceItem">
                <h2 className="experienceTitle">{title} | {institution}</h2>
                <h2 className="experienceDateDuration">{formattedStartDate} - {formattedEndDate}</h2>
            </div>
            <ul>
                {renderBulletPoints()}
            </ul>
        </div>
    );
}



