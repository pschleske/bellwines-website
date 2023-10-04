import React from 'react'
import { Input, Heading } from '@chakra-ui/react'

export const PetName = ({ isEditing, value, onValueChange }) => {
    return isEditing ? (
        <Input
            type="text"
            value={value}
            onChange={(event) => {
                onValueChange(event.target.value)
            }}
        />
    ) : (
        <Heading size='sm'>{value}</Heading>
    )
}
