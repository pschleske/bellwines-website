import React from 'react'
import { Image, Input } from '@chakra-ui/react'

export const PetImage = ({ isEditing, value, onValueChange }) => {
    return isEditing ? (
        <Input
            type="text"
            value={value}
            onChange={(event) => onValueChange(event.target.value)}
        />
    ) : (
        <Image src={value}
            objectFit='cover'
            maxW={{ base: '200%', sm: '300px' }}
            maxH={{ base: '200%', sm: '300px' }}
            alt="dog" />
    )
}
