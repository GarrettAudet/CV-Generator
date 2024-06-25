import './sectionContent.css';
import React from 'react';

export default function Content({ item }) {
    const { description, title, type, caption, otherType, institution, startDate, endDate } = item;

    // Format dates to strings
    const options = { year: 'numeric', month: 'long' };
    const formattedStartDate = startDate ? new Date(startDate).toLocaleDateString('en-US', options) : '';
    const formattedEndDate = endDate ? new Date(endDate).toLocaleDateString('en-US', options) : '';

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

    // Render if item is of type Education
    if (type === "Education") {
        return (
            <div className="experienceParent">
                <div className="experienceItem">
                    <h2 className="experienceTitle">{title}, {institution}</h2>
                    <h2 className="experienceDateDuration">{formattedStartDate} - {formattedEndDate}</h2>
                </div>
                <div className = "caption">{caption}</div>
            </div>
        );
    }

    // Render if item is of type Awards
    if (type === "Awards") {
        return (
            <div className="experienceParent">
                <div className="experienceItem">
                    <h2 className="experienceTitle">{title} | <span>{description}</span></h2>
                </div>
            </div>
        );
    }

    // Render for Education and Publication types
    if (otherType === "Education" || otherType === "Publication") {
        return (
            <div className="experienceParent educationNew">
                <div className="experienceItem">
                    <h2 className="experienceTitle">{title}, {institution}</h2>
                    <h2 className="experienceDateDuration">{formattedStartDate} - {formattedEndDate}</h2>
                </div>
                <div></div>
                <ul>
                    {renderBulletPoints()}
                </ul>
            </div>
        );
    }

    // Render for other types
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

