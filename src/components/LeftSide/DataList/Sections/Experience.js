import React from 'react';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import { jobsData } from '../sampleData/sampleData'; 
import DataList from './DataList';

function Experience() {
    return <DataList data={jobsData} setData={() => {}} icon={faToolbox} sectionTitle="Experience" addText="Add Experience" />;
}

export default Experience;



