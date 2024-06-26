import React from 'react';
import './App.css';
import LeftSide from './components/LeftSide/LeftSide';
import RightSide from './components/RightSide/RightSide';
import { PersonalInfoProvider } from './components/RightSide/Header/PersonalInfoContext';
import { SampleDataProvider } from './components/LeftSide/DataList/SampleData/SampleDataContext';

function App() {
    return (
        <SampleDataProvider>
            <PersonalInfoProvider>
                <div className="app">
                    <LeftSide />
                    <RightSide />
                </div>
            </PersonalInfoProvider>
        </SampleDataProvider>
    );
}

export default App;