import React from 'react';
import { faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';
import { volunteerData } from '../SampleData/SampleData'; 
import DataList from '../DataList';

function Volunteering() {
    return <DataList data={volunteerData} delineate = {","} setData={() => {}} icon={faHandshakeAngle} sectionTitle="Volunteering" addText="Add Volunteering" />;
}

export default Volunteering;