import React from 'react'
import { Td, IconButton, Button } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

export const ModeButtons = ({ isEditing, editClick, saveClick, deleteClick }) => {


    return isEditing ? (
        <Td>
            <Button onClick={saveClick} colorScheme='pink'> Save </Button>
        </Td>
    ) : (
        <Td>
            <IconButton onClick={editClick} icon={<EditIcon />} variant='outline' />
            <IconButton onClick={deleteClick} icon={<DeleteIcon colorScheme='pink' />} />
        </Td>
    )
}
