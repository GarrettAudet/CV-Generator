import './Experience.css';
import React, { useState, useEffect } from 'react';
import Content from '../SectionContent/sectionContent';

export default function Section({ title, data, specialType }) {
    const [items, setItems] = useState(data || []);

    useEffect(() => {
        setItems(data || []);
    }, [data]);

    return (
        <div className='underline'>
            <h2 className="sectionTitle">{title}</h2>
            {items.map((item, index) => (
                <Content
                    key={index}
                    item={item}
                    specialType={specialType}  // Ensure this line passes the correct value
                />
            ))}
        </div>
    );
}



