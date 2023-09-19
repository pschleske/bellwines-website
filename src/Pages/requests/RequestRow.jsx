import { RequestDescription } from './RequestDescription';
import { ModeButtons } from './ModeButtons';
import { useState } from 'react';
import axios from 'axios';

export const RequestRow = ({ initialReqData, initialEditing, deleteFunc, item }) => {
    // const { description } = initialReqData
    const [editMode, setEditMode] = useState(initialEditing)
    const [description, setDescription] = useState(initialReqData.description)

    const changeEditMode = () => setEditMode(true)

    const changeNormalMode = async () => {
        let bodyObj = {
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
            <RequestDescription
                isEditing={editMode}
                value={description}
                onValueChange={setDescription}
            />
            <ModeButtons
                isEditing={editMode}
                editClick={changeEditMode}
                saveClick={changeNormalMode}
                deleteClick={deleteFunc}
            />
        </>
    )
}
