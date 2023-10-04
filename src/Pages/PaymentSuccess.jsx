import { Flex, Container, IconButton, Text } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

export const PaymentSuccess = () => {
    return (
        <Flex justifyContent='center' justify='center' alignItems='center' marginTop='5vh' >
            <Container border='1px solid' borderColor='green.500' borderRadius='10px' boxShadow='lg' height={500} width={800} >
                <Container>
                    <br />
                    <br />
                    <Flex justifyContent='center'>
                        <IconButton isRound colorScheme='green' size='lg' icon={<CheckIcon />} />
                    </Flex>
                    <br />
                    <br />
                    <Text align='center' fontSize='4xl' color='green'> Thank you! </Text>
                    <br />
                    <Text align='center' fontSize='4xl' color='green'> Your payment was successful.</Text>
                    <br />
                    <Text align='center' fontSize='2xl' color=''>You'll receive an email confirmation shortly!</Text>
                </Container>
            </Container>
        </Flex >
    )
}