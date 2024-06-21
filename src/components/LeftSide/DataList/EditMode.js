import React from 'react';
import EditCharacteristics from '../EditObject/EditCharacteristics';

function EditMode({ selectedItem, handleSaveChanges, handleCancel }) {
    return (
        <div>
            {selectedItem && (
                <EditCharacteristics
                    job={selectedItem}
                    onSave={handleSaveChanges}
                    onCancel={handleCancel}
                />
            )}
        </div>
    );
}

export default EditMode;
