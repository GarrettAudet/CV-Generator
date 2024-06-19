import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './JobEntry.css';
import '../CommonStyles/styles.css'

function JobEntry({ job, onChange, onDateChange }) {
    return (
        <form className={`experienceInput ${job.isVisible ? '' : 'hidden'}`}>
            <div className="detailItem">
                <label className="experienceLabel">Job Title</label>
                <input
                    className="inputField"
                    type="text"
                    name="jobTitle"
                    value={job.jobTitle}
                    onChange={e => onChange('jobTitle', e.target.value)}
                />
            </div>
            <div className="detailItem">
                <label className="experienceLabel">Company</label>
                <input
                    className="inputField"
                    type="text"
                    name="company"
                    value={job.company}
                    onChange={e => onChange('company', e.target.value)}
                />
            </div>
            <div className="detailItem">
                <label className="experienceLabel">Start Date</label>
                <DatePicker
                    className="inputField"
                    selected={new Date(job.startDate)}
                    onChange={date => onDateChange('startDate', date)}
                    dateFormat="MMMM yyyy"
                    showMonthYearPicker
                />
            </div>
            <div className="detailItem">
                <label className="experienceLabel">End Date</label>
                <DatePicker
                    className="inputField"
                    selected={new Date(job.endDate)}
                    onChange={date => onDateChange('endDate', date)}
                    dateFormat="MMMM yyyy"
                    showMonthYearPicker
                />
            </div>
            <div className="detailItem">
                <label className="experienceLabel">Description</label>
                <textarea
                    className="inputField descriptionInput"
                    name="description"
                    value={job.description}
                    onChange={e => onChange('description', e.target.value)}
                    rows="4"
                />
            </div>
        </form>
    );
}

export default JobEntry;
