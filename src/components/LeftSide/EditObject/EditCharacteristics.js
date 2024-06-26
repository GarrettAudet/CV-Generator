import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './EditCharacteristics.css';

function EditCharacteristics({ job, onSave, onCancel, onDelete, isAwardsTrue, isEducationTrue }) {
    const [editData, setEditData] = useState(job);
  
    useEffect(() => {
      setEditData(job);
    }, [job]);
  
    const handleFieldChange = (field, value) => {
      setEditData({ ...editData, [field]: value });
    };
  
    const isAwards = job.type === 'Awards';
  
    return (
      <form className="formEdit" onSubmit={(e) => {
        e.preventDefault();
        console.log('Save clicked with data:', editData);
        onSave(editData);
      }}>
        <div className="formInput">
          <label>Title:</label>
          <input
            type="text"
            value={editData.title || ''}
            onChange={(e) => handleFieldChange('title', e.target.value)}
          />
        </div>
        {!isAwards && !isAwardsTrue && (
          <>
            <div className="formInput">
              <label>Institution:</label>
              <input
                type="text"
                value={editData.institution || ''}
                onChange={(e) => handleFieldChange('institution', e.target.value)}
              />
            </div>
            <div className="formInput">
              <label>Start Date:</label>
              <DatePicker
                selected={editData.startDate ? new Date(editData.startDate) : null}
                onChange={(date) => handleFieldChange('startDate', date)}
                dateFormat="MMMM yyyy"
                showMonthYearPicker
              />
            </div>
            <div className="formInput">
              <label>End Date:</label>
              <DatePicker
                selected={editData.endDate ? new Date(editData.endDate) : null}
                onChange={(date) => handleFieldChange('endDate', date)}
                dateFormat="MMMM yyyy"
                showMonthYearPicker
              />
            </div>
          </>
        )}
        {!isEducationTrue && (
          <div className="formInput">
            <label>Description:</label>
            <textarea
              value={editData.description || ''}
              onChange={(e) => handleFieldChange('description', e.target.value)}
              rows="4"
            />
          </div>
        )}
        <div className="buttonFooter">
          <button type="button" onClick={() => onDelete(editData.id)}><span>Delete</span></button>
          <div>
            <button type="button" onClick={onCancel}><span>Cancel</span></button>
            <button type="submit" className="submit"><span>Save</span></button>
          </div>
        </div>
      </form>
    );
  }
  
  export default EditCharacteristics;


