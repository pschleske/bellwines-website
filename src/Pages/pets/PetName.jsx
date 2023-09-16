import React from 'react'

export const PetName = ({ isEditing, value, onValueChange }) => {
    return isEditing ? (
        <input
            type="text"
            value={value}
            onChange={(event) => {
                onValueChange(event.target.value)
            }}
        />
    ) : (
        <span>{value}</span>
    )
}
