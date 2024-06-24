import React from 'react';
import EditCharacteristics from '../EditObject/EditCharacteristics';

function EditMode({ selectedItem, handleSaveChanges, handleCancel, handleDelete, isAwards }) {
    return (
        <div>
            {selectedItem && (
                <EditCharacteristics
                    job={selectedItem}
                    onSave={handleSaveChanges}
                    onCancel={handleCancel}
                    onDelete={handleDelete}
                    isAwardsTrue = {isAwards}
                />
            )}
        </div>
    );
}

export default EditMode;
