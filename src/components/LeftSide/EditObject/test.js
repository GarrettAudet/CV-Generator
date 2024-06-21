import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
        <form onSubmit={(e) => {
            e.preventDefault();
            onSave(editData);
        }}>
            <div>
                <label>Job Title:</label>
                <input
                    type="text"
                    value={editData.title || ''}
                    onChange={(e) => handleFieldChange('title', e.target.value)}
                />
            </div>
            <div>
                <label>Company:</label>
                <input
                    type="text"
                    value={editData.institution || ''}
                    onChange={(e) => handleFieldChange('institution', e.target.value)}
                />
            </div>
            <div>
                <label>Start Date:</label>
                <DatePicker
                    selected={editData.startDate ? new Date(editData.startDate) : null}
                    onChange={(date) => handleFieldChange('startDate', date)}
                    dateFormat="MMMM yyyy"
                    showMonthYearPicker
                />
            </div>
            <div>
                <label>End Date:</label>
                <DatePicker
                    selected={editData.endDate ? new Date(editData.endDate) : null}
                    onChange={(date) => handleFieldChange('endDate', date)}
                    dateFormat="MMMM yyyy"
                    showMonthYearPicker
                />
            </div>
            <div>
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
