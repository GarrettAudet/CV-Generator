import React from 'react';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import DataList from '../DataList';

function Experience({ jobsData, onSave, onDelete, onCancel }) {
  return (
    <DataList 
      data={jobsData} 
      delineate=", " 
      setData={() => {}} 
      icon={faToolbox} 
      sectionTitle="Experience" 
      addText="Add Experience" 
      onSave={onSave} 
      onDelete={onDelete} 
      onCancel={onCancel} 
    />
  );
}

export default Experience;




