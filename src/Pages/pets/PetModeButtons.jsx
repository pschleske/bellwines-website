import React from 'react'

export const PetModeButtons = ({ isEditing, editClick, saveClick, deleteClick }) => {
    return isEditing ? (
        <>
            <button onClick={saveClick}> Save </button>
        </>
    ) : (
        <>
            <button onClick={editClick}> Edit </button>
            <button onClick={deleteClick}> Delete </button>
        </>
    )
}
