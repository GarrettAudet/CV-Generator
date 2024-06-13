import './sectionContent.css'
import React from 'react';

export default function Content(props) {

    // Generate bullet points based on props.count
    const renderBulletPoints = () => {
        let bullets = [];
        for (let i = 0; i < PopStateEvent.count; i++) {
            bullets.push(<li key={i} className="bulletPoint">Bullet {i + 1}</li>);
        }
        return bullets;
    };

    // Render bullet points
    return (
        <ul>
            {renderBulletPoints()}
        </ul>
    );
}
