import React from 'react';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { educationData } from '../sampleData/sampleData'; 
import DataList from './DataList';

function Education() {
    return <DataList data={educationData} setData={() => {}} icon={faSchool} sectionTitle="Education" addText="Add Education" />;
}

export default Education;
