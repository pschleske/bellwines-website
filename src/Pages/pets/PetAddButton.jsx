import React from 'react'
import { Button } from '@chakra-ui/react'

export const PetAddButton = ({ addClick }) => {
    return (
        <Button onClick={addClick} colorScheme='whatsapp' size='sm'> Add Pet </Button>
    )
}
