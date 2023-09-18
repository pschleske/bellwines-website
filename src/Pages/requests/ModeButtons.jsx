import React from 'react'

export const ModeButtons = ({ isEditing, editClick, saveClick, deleteClick }) => {


    return isEditing ? (
        <td>
            <button onClick={saveClick}> Save </button>
        </td>
    ) : (
        <td>
            <button onClick={editClick}> Edit </button>
            <button onClick={deleteClick}> Delete </button>
        </td>
    )
}
