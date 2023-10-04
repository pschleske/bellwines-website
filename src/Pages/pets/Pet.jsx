import { useState } from 'react';
import axios from 'axios';
import { CardBody, CardFooter, Stack, Flex } from '@chakra-ui/react';

import { PetName } from './PetName';
import { PetImage } from './PetImage';
import { PetDescription } from './PetDescription';
import { PetModeButtons } from './PetModeButtons';

export const Pet = ({ initialPetData, initialIsEditing, deleteFunc, id, currentUserData }) => {
    const [userId, setUserId] = useState(currentUserData)
    const [name, setName] = useState(initialPetData.name);
    const [imgUrl, setImgUrl] = useState(initialPetData.imgUrl);
    const [description, setDescription] = useState(initialPetData.description)

    const isOwner = userId === initialPetData.userId
    // console.log('initialPetData.userId', initialPetData.userId)
    // console.log('currentUserData:', currentUserData.userId)
    // console.log(userId)

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
            <PetImage
                isEditing={editMode}
                value={imgUrl}
                onValueChange={setImgUrl}
            />
            <Stack>
                <CardBody>
                    <PetName
                        isEditing={editMode}
                        value={name}
                        onValueChange={setName}
                    />
                    <PetDescription
                        isEditing={editMode}
                        value={description}
                        onValueChange={setDescription}
                    />
                </CardBody>
                <CardFooter>
                    {isOwner && (
                        <PetModeButtons
                            isEditing={editMode}
                            saveClick={changeNormalMode}
                            editClick={changeEditMode}
                            deleteClick={deleteFunc}
                        />
                    )}
                </CardFooter>
            </Stack>
        </>
    )
}
