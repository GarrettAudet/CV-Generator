import React from 'react';
import EditCharacteristics from '../EditObject/EditCharacteristics';

function EditMode({ selectedItem, handleSaveChanges, handleCancel, handleDelete }) {
    return (
        <div>
            {selectedItem && (
                <EditCharacteristics
                    job={selectedItem}
                    onSave={handleSaveChanges}
                    onCancel={handleCancel}
                    onDelete={handleDelete}
                />
            )}
        </div>
    );
}

export default EditMode;
