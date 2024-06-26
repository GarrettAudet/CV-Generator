import React from 'react';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import DataList from '../DataList';

function Education({ educationData, onSave, onDelete, onCancel }) {
  return (
    <DataList 
      data={educationData} 
      delineate=", " 
      setData={() => {}} 
      icon={faSchool} 
      sectionTitle="Education" 
      addText="Add Education" 
      isEducation={true} 
      onSave={onSave} 
      onDelete={onDelete} 
      onCancel={onCancel} 
    />
  );
}

export default Education;

