import React from 'react';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import DataList from '../DataList';

function Awards({ awardsData, onSave, onDelete, onCancel }) {
  return (
    <DataList 
      data={awardsData} 
      setData={() => {}} 
      icon={faAward} 
      sectionTitle="Awards" 
      addText="Add Awards" 
      isAwards={true} 
      onSave={onSave} 
      onDelete={onDelete} 
      onCancel={onCancel} 
    />
  );
}

export default Awards;
