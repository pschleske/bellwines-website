import { Td, Input } from '@chakra-ui/react'

export const RequestDescription = ({ isEditing, value, onValueChange }) => {

    return isEditing ? (
        <Td>
            <Input
                type="text"
                placeholder="Tell us about the issue you're having"
                value={value}
                onChange={(event) => onValueChange(event.target.value)}
            />
        </Td>
    ) : (
        <Td> {value} </Td>
    )
}
