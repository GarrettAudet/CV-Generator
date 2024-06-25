import './sectionContent.css'
import React from 'react';

export default function Content({ content }) {
    console.log('Content component running with content:', content);

    // Ensure content is defined
    if (!content) {
        return null;
    }
    
    // Split the content text by "//" to generate bullet points
    const renderBulletPoints = () => {
        return content.split('//').map((bullet, index) => (
            <li key={index} className="bulletPoint">{bullet.trim()}</li>
        ));
    };

    return (
        <ul>
            {renderBulletPoints()}
        </ul>
    );
}

