import { RequestDescription } from './RequestDescription';
import { ModeButtons } from './ModeButtons';
import { RequestStatus } from './RequestStatus';
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../shared/contexts/useAuth';

export const RequestRow = ({ initialReqData, initialEditing, deleteFunc, item }) => {
    // const { description } = initialReqData
    const [editMode, setEditMode] = useState(initialEditing)
    const [description, setDescription] = useState(initialReqData.description)
    const [status, setStatus] = useState(initialReqData.status)

    const { currentUser } = useAuth()
    const [adminMode, setAdminMode] = useState(initialEditing)

    const changeAdminMode = () => {
        if (currentUser.isAdmin === true)
            setAdminMode(true)
    }
    const nonEditingAdmin = () => setAdminMode(false)


    const changeEditMode = () => setEditMode(true)
    const changeNormalMode = async () => {
        let bodyObj = {
            status,
            description
        }
        const { data } = await axios.put(`/api/edit-request/${item.requestId}`, bodyObj)
        if (!data.error) {
            setEditMode(false)
        } else {
            console.log(error)
            alert('Something went wrong!')
        }
    }

    return (
        <>
            <RequestStatus
                isEditing={adminMode}
                value={status}
                onValueChange={setStatus}
            />
            <RequestDescription
                isEditing={editMode}
                value={description}
                onValueChange={setDescription}
            />
            <ModeButtons
                isEditing={editMode}
                editClick={() => { changeEditMode(); changeAdminMode() }}
                saveClick={() => { changeNormalMode(); nonEditingAdmin() }}
                deleteClick={deleteFunc}
            />
        </>
    )
}
