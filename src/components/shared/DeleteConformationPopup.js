import React, { useState } from 'react';

const DeleteConfirmationPopup = ({ onDeleteConfirmed, onCancel }) => {
    return (
        <div className="confirmation-popup">
            <p>Are you sure you want to delete your account?</p>
            <button onClick={onDeleteConfirmed}>Yes, delete</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    );
};

const DeleteAccountButton = () => {
    const [isConfirmationVisible, setConfirmationVisible] = useState(false);

    const handleDeleteConfirmed = () => {
        // Perform deletion logic here
        // You might want to call an API to delete the account
        // After deletion, you can redirect the user or perform any other necessary actions
        console.log('Account deleted');
        setConfirmationVisible(false);
    };

    const handleCancel = () => {
        setConfirmationVisible(false);
    };

    const handleDeleteClick = () => {
        setConfirmationVisible(true);
    };

    return (
        <div>
            <button onClick={handleDeleteClick}>Delete Account</button>
            {isConfirmationVisible && (
                <DeleteConfirmationPopup
                    onDeleteConfirmed={handleDeleteConfirmed}
                    onCancel={handleCancel}
                />
            )}
        </div>
    );
};

export default DeleteAccountButton;
