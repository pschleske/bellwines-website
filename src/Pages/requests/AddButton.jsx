import React from 'react'
import { Button } from '@chakra-ui/react'

export const AddButton = ({ addClick }) => {
    return (
        <Button onClick={addClick} colorScheme='whatsapp' variant='outline' w='100%'> New Request + </Button>
    )
}
