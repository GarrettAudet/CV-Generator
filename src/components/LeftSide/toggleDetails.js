import React, { useState } from 'react';

function ToggleDetails() {
    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(current => !current); 
    };

    return (
        <div>
            <button onClick={toggleClass} className={isActive ? 'active' : ''}>
                Click me to toggle class
            </button>
            {isActive ? <p>The class 'active' is applied!</p> : <p>The class 'active' is not applied.</p>}
        </div>
    );
}

export default ToggleDetails;
