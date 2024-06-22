import React, { useState, useEffect } from 'react';
import EditMode from './EditMode';
import HistorySegment from './HistorySegment';
import SegmentHeader from './SegmentHeader';
import AddItem from './AddItem';
import './DataList.css';

function DataList({ data, delineate, setData, icon, sectionTitle, addText }) {
    /* Handles Visibility of Items Passed in from Sample Data */
    const [items, setItems] = useState(data || []);
    const [isVisible, setIsVisible] = useState(false);

    // Synchronize items with data prop
    useEffect(() => {
        if (Array.isArray(data)) {
            setItems(data);
        } else {
            setItems([]);
        }
    }, [data]);

    /* Handles Visibility of Object Data */
    const [selectedItem, setSelectedItem] = useState(null);
    const [isEditVisible, setIsEditVisible] = useState(false);

    /* Toggle Visibility of Object */
    const toggleVisibility = () => {
        setIsVisible(!isVisible); 
    };

    /* Select Item and Visibility */
    const handleEditClick = (item) => {
        setSelectedItem(item);
        setIsEditVisible(true);
    };

    /* Handle updating Item */
    const handleSaveChanges = (updatedItem) => {
        const updatedItems = items.map(item => item.id === updatedItem.id ? updatedItem : item);
        setItems(updatedItems);
        setIsEditVisible(false);  // Hide the editor after saving changes
        setIsVisible(true);       // Show items
    };

    /* Cancel Editing Item */
    const handleCancel = () => {
        setIsEditVisible(false);  // Hide the editor on cancel
        setIsVisible(true);       // Show items
    };

    /* Handle Delete */
    const handleDelete = (id) => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
        setIsEditVisible(false);  // Hide the editor after deleting
        setIsVisible(true);       // Show items
    };

    return (
        <div className="Experience">
            <SegmentHeader icon={icon} headerText={sectionTitle} toggle={toggleVisibility} isVisible={isVisible} />
            <div className={`elementContainer ${isVisible ? 'visible' : ''}`}>
                {isVisible && !isEditVisible && items.map((item, index) => (
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
                {isVisible && isEditVisible && (
                    <EditMode
                        selectedItem={selectedItem}
                        handleSaveChanges={handleSaveChanges}
                        handleCancel={handleCancel}
                        handleDelete={() => handleDelete(selectedItem.id)}
                    />
                )}
            {isVisible && !isEditVisible &&(
                <AddItem headerText={addText} toggle={toggleVisibility} isVisible={isVisible} />
            )}
            </div>
        </div>
    );
}

export default DataList;
