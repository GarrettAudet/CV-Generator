import React from 'react';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import { jobsData } from '../SampleData/SampleData'; 
import DataList from '../DataList';

function Experience(jobsData) {
    return <DataList data={jobsData} delineate = {", "} setData={() => {}} icon={faToolbox} sectionTitle="Experience" addText="Add Experience" />;
}

export default Experience;



