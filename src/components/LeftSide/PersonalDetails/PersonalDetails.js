import React, { useState, useEffect } from 'react';
import './PersonalDetails.css';
import '../CommonStyles/styles.css';  

export default function PersonalDetails({ personalDetail, onPersonalChange }) {
    // Prop and Set Value for Prop
    const [items, setItems] = useState(personalDetail || {});
  
    // Synchronize items
    useEffect(() => {
      if (typeof personalDetail === 'object' && personalDetail !== null) {
        setItems(personalDetail);
      } else {
        setItems({});
      }
    }, [personalDetail]);
  
    // Handle field changes
    const handleFieldChange = (e) => {
      const { name, value } = e.target;
      setItems((prevItems) => ({
        ...prevItems,
        [name]: value
      }));
      onPersonalChange(name, value); // Update the parent state
    };
  
    return (
      <div className="personalDetails LHSInput">
        <h2 className='title'>Personal Details</h2>
        <form className='personalInput'>
          <div className="detailItem">
            <label>Full name</label>
            <input
              className="inputField" 
              type="text" 
              name="fullName" 
              value={items.fullName || ''} 
              onChange={handleFieldChange} />
          </div>
          <div className="detailItem">
            <label>Specialization</label>
            <input
              className="inputField" 
              type="text" 
              name="specialization" 
              value={items.specialization || ''} 
              onChange={handleFieldChange} />
          </div>
          <div className="detailItem">
            <label>Sub-Specialization</label>
            <input 
              className="inputField"
              type="text" 
              name="subSpecialization" 
              value={items.subSpecialization || ''} 
              onChange={handleFieldChange} />
          </div>
          <div className="detailItem">
            <label>LinkedIn</label>
            <input
              className="inputField"
              type="text" 
              name="url" 
              value={items.url || ''} 
              onChange={handleFieldChange} />
          </div>
        </form>
      </div>
    );
  }





