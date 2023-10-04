import React from 'react'
import { Button } from '@chakra-ui/react'

export const PetModeButtons = ({ isEditing, editClick, saveClick, deleteClick }) => {
    return isEditing ? (
        <>
            <Button onClick={saveClick} colorScheme='blue' size='sm'> Save </Button>
        </>
    ) : (
        <>
            <Button onClick={editClick} colorScheme='blue' size='sm' variant='outline'> Edit </Button>
            <Button onClick={deleteClick} colorScheme='pink' size='sm' variant='outline'> Delete </Button>
        </>
    )
}
