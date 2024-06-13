import React from 'react';
import { useState } from 'react';
import './PersonalDetails.css';  

export default function PersonalDetails() {
    // Initialize state for each detail with default values
    const [details, setDetails] = useState({
        fullName: 'Garrett Audet',
        specialization: 'Strategy & Operations',
        subSpecialization: 'Full-Stack Developer',
        address: 'https://www.linkedin.com/in/garrettaudet/'
    });

    // Function to handle change in input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    return (
        <div className="personalDetails">
            <h2 className='title'>Personal Details</h2>
            <form className='personalInput'>
                <div className="detailItem">
                    <label>Full name</label>
                    <input 
                        type="text" 
                        name="fullName" 
                        value={details.fullName} 
                        onChange={handleChange} />
                </div>
                <div className="detailItem">
                    <label>Specialization</label>
                    <input 
                        type="text" 
                        name="specialization" 
                        value={details.specialization} 
                        onChange={handleChange} />
                </div>
                <div className="detailItem">
                    <label>Sub-Specialization</label>
                    <input 
                        type="text" 
                        name="subSpecialization" 
                        value={details.phoneNumber} 
                        onChange={handleChange} />
                </div>
                <div className="detailItem">
                    <label>LinkedIn</label>
                    <input 
                        type="text" 
                        name="address" 
                        value={details.address} 
                        onChange={handleChange} />
                </div>
            </form>
        </div>
    );
}
