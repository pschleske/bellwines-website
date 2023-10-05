import { useEffect, useState } from 'react';
import { Box, Text, Button, Link, HStack, Flex, Image, Spacer } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import axios from 'axios';

export const Footer = () => {
    const [data, setData] = useState([]);
    const [quotes, setQuotes] = useState(0);

    async function getApi() {
        const res = await axios.get('/api/quotes')
            .catch((err) => console.log(err))
        // console.log(res.data)
        setData(res.data)
    }

    async function changeQuotes() {
        setQuotes(quotes + 1)
    }

    // const api_url = "https://zenquotes.io/api/quotes";

    const quote = data.map((el) => `${el.q}  -- ${el.a}`)

    // async function getApi(url) {
    //     const response = await axios.get(url).catch((err) => console.log(err))
    //     console.log(response)
    // }
    useEffect(() => {
        getApi()
    }, [])


    return (
        <Box
            as="footer"
            bg="gray.50"
            p="2"
            position="absolute"
            bottom="0"
            left="0"
            right="0"
            width="100%"
            h='150px' >
            <HStack spacing='3'>

                <Flex p='1' justifyContent='center' alignItems='center'>
                    <Image src='https://cdn-icons-png.flaticon.com/512/5988/5988529.png' alt='apartments' isRound boxSize='60px' />
                    <Text fontSize='sm' fontWeight='bold' > Bellwines Apartments </Text>
                </Flex>

                <Spacer />

                <Box as='footer' p='1' >
                    <Text fontSize='xs' fontWeight='bold' align='center' >Quote of the day:</Text>
                    <Text fontSize='xs' align='center' >{quote[quotes]}</Text>
                    <br />
                    <Flex justifyContent='center'>
                        <Button onClick={changeQuotes} size='xs' colorScheme='blue' variant='outline'>New Quote</Button>
                    </Flex>
                </Box >

                <Spacer />

                <Box p='1'>
                    <Text fontSize='sm' fontWeight='bold'>Contact Us <EmailIcon /></Text>
                    <Link fontSize='sm' href="mailto:bellwines@email.com">Email Us</Link>
                </Box>

            </HStack>
        </Box >
    )
}
