import React from 'react'
import { Input, Text } from '@chakra-ui/react';

export const PetDescription = ({ isEditing, value, onValueChange }) => {
    return isEditing ? (
        <Input
            type="text"
            value={value}
            onChange={(event) => onValueChange(event.target.value)}
        />
    ) : (
        <Text py='2'> {value} </Text>
    )
}
