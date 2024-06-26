import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './selectOption.css';

export default function SelectOption({ clearResume, loadResume }) {
    return (
        <div className="buttonLoader LHSInput">
            <button className="clearResume" onClick={clearResume}>
                <FontAwesomeIcon icon={faTrash} className='icon'/>
                Clear Resume
            </button>
            <button className="loadResume" onClick={loadResume}>Load Example</button>
        </div>
    );
}
