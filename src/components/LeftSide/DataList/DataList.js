import React, { useState, useEffect } from 'react';
import EditMode from './EditMode';
import HistorySegment from './HistorySegment';
import SegmentHeader from './SegmentHeader';
import AddItem from './AddItem';
import './DataList.css';

function DataList({ data, delineate, setData, icon, sectionTitle, addText, isAwards, isEducation, onSave, onDelete, onCancel }) {
    const [items, setItems] = useState(data || []);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      if (Array.isArray(data)) {
        setItems(data);
      } else {
        setItems([]);
      }
    }, [data]);
  
    const [selectedItem, setSelectedItem] = useState(null);
    const [isEditVisible, setIsEditVisible] = useState(false);
  
    const toggleVisibility = () => {
      setIsVisible(!isVisible); 
    };
  
    const handleEditClick = (item) => {
      setSelectedItem(item);
      setIsEditVisible(true);
    };
  
    const handleSaveChanges = (updatedItem) => {
      let updatedItems;
      if (items.some(item => item.id === updatedItem.id)) {
        updatedItems = items.map(item => item.id === updatedItem.id ? updatedItem : item);
      } else {
        updatedItems = [...items, { ...updatedItem, id: items.length + 1 }];
      }
      setItems(updatedItems);
      setIsEditVisible(false);
      setIsVisible(true);
      setData(updatedItems);
      console.log('onSave invoked with:', updatedItem);
      onSave(updatedItems);  // Notify parent component about the save action
    };
  
    const handleCancel = () => {
      setIsEditVisible(false);
      setIsVisible(true);
      onCancel();  // Notify parent component about the cancel action
    };
  
    const handleDelete = (id) => {
      const updatedItems = items.filter(item => item.id !== id);
      setItems(updatedItems);
      setIsEditVisible(false);
      setIsVisible(true);
      onDelete(id);  // Notify parent component about the delete action
    };
  
    const handleAddClick = () => {
      const newItem = {
        id: items.length + 1,
        title: '',
        institution: '',
        startDate: null,
        endDate: null,
        description: ''
      };
      setSelectedItem(newItem);
      setIsEditVisible(true);
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
              isAwards={isAwards}
              isEducation={isEducation}
            />
          )}
          {isVisible && !isEditVisible && (
            <AddItem headerText={addText} insertNew={handleAddClick} isVisible={isVisible} />
          )}
        </div>
      </div>
    );
  }
  
  export default DataList;
