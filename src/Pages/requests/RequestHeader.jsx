import { Tr, Th } from '@chakra-ui/react'

export const RequestHeader = () => {
    return (
        <Tr>
            <Th>Request ID</Th>
            <Th>Date Created</Th>
            <Th> User ID </Th>
            <Th>Status</Th>
            <Th>Description</Th>
            <Th></Th>
        </Tr>
    )
}

