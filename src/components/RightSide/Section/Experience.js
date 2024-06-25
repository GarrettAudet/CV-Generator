import './Experience.css'
import React, { useState, useEffect } from 'react';
import Content from '../SectionContent/sectionContent';

export default function Section({ title, data }) {
    const [items, setItems] = useState(data || []);
    console.log(data);

    useEffect(() => {
        setItems(data || []);
    }, [data]);

    return (
        <div className='underline'>
            <h2 className="sectionTitle">{title}</h2>
            {items.map((item, index) => (
                <Content
                    item = {item}
                />
            ))}
        </div>
    );
}

