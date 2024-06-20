import React from 'react';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { awardsData } from '../SampleData/SampleData'; 
import DataList from '../DataList';

function Awards() {
    return <DataList data={awardsData} setData={() => {}} icon={faAward} sectionTitle="Awards" addText="Add Experience" />;
}

export default Awards;