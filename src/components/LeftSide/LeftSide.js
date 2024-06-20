/* Import Library and Relevant Information */ 
import React from 'react';
import Option from './Option/selectOption';

/* Import Segments */
import DataList from './DataList/DataList'
import PersonalDetails from './PersonalDetails/PersonalDetails'

/* Import Styling for Left Side */
import './LeftSide.css';  

export default function LeftSide() {
    return (
        <div className="leftSide">
            <Option />
            <PersonalDetails />
            <DataList />
            <DataList />
            <DataList />
            <DataList />
        </div>
    );
}