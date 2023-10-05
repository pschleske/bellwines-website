import { Tr, Th } from '@chakra-ui/react'
// import { AddButton } from './AddButton'
import { Button } from '@chakra-ui/react'

export const RequestHeader = ({ addClick }) => {
    return (
        <Tr>
            <Th>Request ID</Th>
            <Th>Date Created</Th>
            <Th> User ID </Th>
            <Th>Status</Th>
            <Th>Description</Th>
            <Th><Button onClick={addClick} colorScheme='whatsapp' >New Request +</Button></Th>
        </Tr>
    )
}

