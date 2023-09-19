import React from 'react'

export const RequestDescription = ({ isEditing, value, onValueChange }) => {

    return isEditing ? (
        <td>
            <input
                type="text"
                placeholder="Tell us about the issue you're having"
                value={value}
                onChange={(event) => onValueChange(event.target.value)}
            />
        </td>
    ) : (
        <td> {value} </td>
    )
}
