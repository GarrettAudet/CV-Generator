import React from 'react';
import { faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';
import DataList from '../DataList';

function Volunteering( {volunteerData} ) {
    return <DataList data={volunteerData} delineate = {", "} setData={() => {}} icon={faHandshakeAngle} sectionTitle="Volunteering" addText="Add Volunteering" />;
}

export default Volunteering;