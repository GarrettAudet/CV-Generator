import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './EditCharacteristics.css'

function EditCharacteristics({ job, onSave, onCancel }) {
    const [editData, setEditData] = useState(job);

    // Ensure that editData updates when job prop changes
    useEffect(() => {
        setEditData(job);
    }, [job]);

    const handleFieldChange = (field, value) => {
        setEditData({ ...editData, [field]: value });
    };

    return (
        <form className = "formEdit" onSubmit={(e) => {
            e.preventDefault();
            onSave(editData);
        }}>
            <div className = "formInput">
                <label>Job Title:</label>
                <input
                    type="text"
                    value={editData.title || ''}
                    onChange={(e) => handleFieldChange('title', e.target.value)}
                />
            </div>
            <div className = "formInput">
                <label>Company:</label>
                <input
                    type="text"
                    value={editData.institution || ''}
                    onChange={(e) => handleFieldChange('institution', e.target.value)}
                />
            </div>
            <div className = "formInput">
                <label>Start Date:</label>
                <DatePicker
                    selected={editData.startDate ? new Date(editData.startDate) : null}
                    onChange={(date) => handleFieldChange('startDate', date)}
                    dateFormat="MMMM yyyy"
                    showMonthYearPicker
                />
            </div>
            <div className = "formInput">
                <label>End Date:</label>
                <DatePicker
                    selected={editData.endDate ? new Date(editData.endDate) : null}
                    onChange={(date) => handleFieldChange('endDate', date)}
                    dateFormat="MMMM yyyy"
                    showMonthYearPicker
                />
            </div>
            <div className = "formInput">
                <label>Description:</label>
                <textarea
                    value={editData.description || ''}
                    onChange={(e) => handleFieldChange('description', e.target.value)}
                    rows="4"
                />
            </div>
            <button type="submit">Save</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
}

export default EditCharacteristics;