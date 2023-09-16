import React from 'react'

export const PetImage = ({ isEditing, value, onValueChange }) => {
    return isEditing ? (
        <input
            type="text"
            value={value}
            onChange={(event) => onValueChange(event.target.value)}
        />
    ) : (
        <img src={value} alt="" />
    )
}
