import { useState } from 'react';
import axios from 'axios';
// import PetName from './PetName';
// import PetImage from './PetImage';
// import PetDescription from './PetDescription';
// import PetModeButtons from './PetModeButtons';
import { PetName } from './PetName';
import { PetImage } from './PetImage';
import { PetDescription } from './PetDescription';
import { PetModeButtons } from './PetModeButtons';

export const Pet = ({ initialPetData, initialIsEditing, deleteFunc, id }) => {
    const [name, setName] = useState(initialPetData.name);
    const [imgUrl, setImgUrl] = useState(initialPetData.imgUrl);
    const [description, setDescription] = useState(initialPetData.description)

    const [editMode, setEditMode] = useState(initialIsEditing)

    const changeEditMode = () => setEditMode(true)

    const changeNormalMode = async () => {
        let bodyObj = {
            name,
            imgUrl,
            description
        }
        const { data } = await axios.put(`/api/edit-pet/${id}`, bodyObj)
        if (!data.error) {
            setEditMode(false)
        } else {
            console.log(error)
            alert('Something went wrong!')
        }
    }

    return (
        <>
            <h4>Pet</h4>
            <PetName
                isEditing={editMode}
                value={name}
                onValueChange={setName}
            />
            <PetImage
                isEditing={editMode}
                value={imgUrl}
                onValueChange={setImgUrl}
            />
            <PetDescription
                isEditing={editMode}
                value={description}
                onValueChange={setDescription}
            />
            <PetModeButtons
                isEditing={editMode}
                saveClick={changeNormalMode}
                editClick={changeEditMode}
                deleteClick={deleteFunc}
            />
        </>
    )
}
