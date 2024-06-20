import React, { useState } from 'react';
import HistorySegment from './HistorySegment'
import SegmentHeader from './SegmentHeader';
import AddItem from './AddItem'; 
import './DataList.css'

function DataList({ data, delineate, setData, icon, sectionTitle, addText }) {
    const [items, setItems] = useState(data);
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible); 
    };

    const handleFieldChange = (index, field, value) => {
        const updatedItems = items.map((item, idx) => {
            if (idx === index) {
                return {...item, [field]: value};
            }
            return item;
        });
        setItems(updatedItems);
    };

    return (
        <div className="Experience">
            <SegmentHeader icon={icon} headerText={sectionTitle} toggle={toggleVisibility} isVisible={isVisible} />
            <div className={`elementContainer ${isVisible ? 'visible' : ''}`}>
                {isVisible && items.map((item, index) => (
                    <HistorySegment key={item.id} delineate = {delineate} toggle={toggleVisibility} headerText={item.title} institution = {item.institution} additionalClass={index === 0 ? 'firstItem' : ''}/>
                ))}
                <AddItem headerText={addText} toggle={toggleVisibility} isVisible={isVisible}/>
            </div>
        </div>
    );
}

export default DataList;
