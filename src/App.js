import React from 'react';
import './App.css';
import LeftSide from './components/LeftSide/LeftSide';
import RightSide from './components/RightSide/RightSide';
import { PersonalInfoProvider } from './components/RightSide/Header/PersonalInfoContext';

function App() {
    return (
        <PersonalInfoProvider>
            <div className="app">
                <LeftSide />
                <RightSide />
            </div>
        </PersonalInfoProvider>
    );
}

export default App;