import { RequestDescription } from './RequestDescription';
import { ModeButtons } from './ModeButtons';
import { useState } from 'react';

export const RequestRow = ({ initialReqData, initialEditing, deleteFunc }) => {
    // const { description } = initialReqData
    const [editMode, setEditMode] = useState(initialEditing)
    const [description, setDescription] = useState(initialReqData.description)

    const changeEditMode = () => setEditMode(true)
    const changeNormalMode = () => setEditMode(false)

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
