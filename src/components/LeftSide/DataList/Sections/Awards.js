import React from 'react';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { awardsData } from '../SampleData/SampleData'; 
import DataList from '../DataList';

function Awards(awardsData) {
    return <DataList data={awardsData} setData={() => {}} icon={faAward} sectionTitle="Awards" addText="Add Awards" />;
}

export default Awards;