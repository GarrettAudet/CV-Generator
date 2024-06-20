import React from 'react';
import { faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';
import { volunteerData } from '../SampleData/SampleData'; 
import DataList from '../DataList';

function Volunteering() {
    return <DataList data={volunteerData} setData={() => {}} icon={faHandshakeAngle} sectionTitle="Experience" addText="Add Experience" />;
}

export default Volunteering;