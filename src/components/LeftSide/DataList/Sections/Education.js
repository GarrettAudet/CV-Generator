import React from 'react';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import DataList from '../DataList';

function Education( {educationData} ) {
    return <DataList data={educationData} delineate = {", "} setData={() => {}} icon={faSchool} sectionTitle="Education" addText="Add Education" isEducation = { true }/>;
}

export default Education;
