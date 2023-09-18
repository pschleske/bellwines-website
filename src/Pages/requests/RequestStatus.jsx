import React from 'react'

export const RequestStatus = ({ isEditing, value }) => {
    return isEditing ? (
        <td>
            <select name="status">
                <option value="">Open</option>
                <option value="">Under Review</option>
                <option value="">Need More Info</option>
                <option value="">Scheduled</option>
                <option value="">Closed</option>
            </select>
        </td>
    ) : (
        <td>
            {value}
        </td>
    )
}
