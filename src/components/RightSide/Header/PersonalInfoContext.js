import React, { createContext, useState } from 'react';
import { initialPersonalInformation } from '../../LeftSide/DataList/SampleData/SampleData';

const PersonalInfoContext = createContext();

export const PersonalInfoProvider = ({ children }) => {
    const [personalInfo, setPersonalInfo] = useState(initialPersonalInformation);

    const handlePersonalChange = (name, value) => {
        setPersonalInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value
        }));
    };

    return (
        <PersonalInfoContext.Provider value={{ personalInfo, handlePersonalChange }}>
            {children}
        </PersonalInfoContext.Provider>
    );
};

export default PersonalInfoContext;
