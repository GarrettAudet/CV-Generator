import React, { createContext, useState } from 'react';

// Initial state definitions (assumed structure)
const initialJobsData = [];
const initialEducationData = [];
const initialVolunteerData = [];
const initialAwardsData = [];

// Context creation
export const ResumeDataContext = createContext();

export const ResumeDataProvider = ({ children }) => {
    const [jobsData, setJobsData] = useState(initialJobsData);
    const [educationData, setEducationData] = useState(initialEducationData);
    const [volunteerData, setVolunteerData] = useState(initialVolunteerData);
    const [awardsData, setAwardsData] = useState(initialAwardsData);

    // Clear all data
    const clearResume = () => {
        setJobsData([]);
        setEducationData([]);
        setVolunteerData([]);
        setAwardsData([]);
        console.log('After clear:', jobs, education, volunteer, awards);
    };

    // Load initial data (you might want to define initial data arrays or fetch them)
    const loadResume = () => {
        setJobsData(initialJobsData);
        setEducationData(initialEducationData);
        setVolunteerData(initialVolunteerData);
        setAwardsData(initialAwardsData);
        console.log('After load:', jobs, education, volunteer, awards);
    };

    // The context value that will be provided to consumers
    const contextValue = {
        jobsData,
        setJobsData,
        educationData,
        setEducationData,
        volunteerData,
        setVolunteerData,
        awardsData,
        setAwardsData,
        clearResume,
        loadResume
    };

    return (
        <ResumeDataContext.Provider value={contextValue}>
            {children}
        </ResumeDataContext.Provider>
    );
};

