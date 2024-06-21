import React, { useState } from 'react';
import EditCharacteristics from '../EditObject/EditCharacteristics';
import HistorySegment from './HistorySegment';
import SegmentHeader from './SegmentHeader';
import AddItem from './AddItem';
import './DataList.css';

function DataList({ data, delineate, setData, icon, sectionTitle, addText }) {
    const [items, setItems] = useState(data);
    const [isVisible, setIsVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isEditVisible, setIsEditVisible] = useState(false);

    const handleEditClick = (item) => {
        setSelectedItem(item);
        setIsEditVisible(true);
    };

    const toggleVisibility = () => {
        setIsVisible(!isVisible); 
    };

    const handleSaveChanges = (updatedItem) => {
        const updatedItems = items.map(item => item.id === updatedItem.id ? updatedItem : item);
        setItems(updatedItems);
        setIsEditVisible(false);  // Hide the editor after saving changes
    };

    const handleCancel = () => {
        setIsEditVisible(false);  // Hide the editor on cancel
    };

    return (
        <div className="Experience">
            <SegmentHeader icon={icon} headerText={sectionTitle} toggle={toggleVisibility} isVisible={isVisible} />
            <div className={`elementContainer ${isVisible ? 'visible' : ''}`}>
                {isVisible && items.map((item, index) => (
                    <HistorySegment
                        key={item.id}
                        delineate={delineate}
                        toggle={toggleVisibility}
                        headerText={item.title}
                        institution={item.institution}
                        onEditClick={() => handleEditClick(item)}
                        additionalClass={index === 0 ? 'firstItem' : ''}
                    />
                ))}
                <AddItem headerText={addText} toggle={toggleVisibility} isVisible={isVisible}/>
            </div>
            {isEditVisible && selectedItem && (
                <EditCharacteristics
                    job={selectedItem}
                    onSave={handleSaveChanges}
                    onCancel={handleCancel}
                />
            )}
        </div>
    );
}

export default DataList;
