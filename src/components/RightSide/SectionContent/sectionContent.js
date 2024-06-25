import './sectionContent.css';
import React, { useEffect, useState } from 'react';

export default function Content({ item, specialType }) {
    const { description, title, type, caption, institution, startDate, endDate } = item;
    const [isEducation, setIsEducation] = useState(false);

    useEffect(() => {
        if (specialType === "Education") {
            console.log("Setting isEducation to true for specialType Education");
            setIsEducation(true);
        } else {
            setIsEducation(false);
        }
    }, [specialType]);

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

    console.log("This is isEducation before render:", isEducation); // Log isEducation before render

    // Render if item is of type Education or Publication or specialType matches
    if ( type === "Awards") {
        console.log("Rendering Education or Publication block:");
        return (
            <div className="experienceParent educationNew">
                <div className="experienceItem">
                    <h2 className="experienceTitle">{title} | <span>{description}</span></h2>
                </div>
            </div>
        );
    }

    // Render for other types
    console.log("Rendering other type block:", item);
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

