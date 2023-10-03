import { useEffect, useState } from 'react';
import { Box, Text, Button, Link, Flex, Spacer } from '@chakra-ui/react';
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
        // gap = '2'
        <Flex minWidth='100%' h='150px' justify='space-between' bg='gray.50'>
            <Box as='footer' p='2' >
                <Text fontSize='xs' fontWeight='bold'>Quote of the day:</Text>
                <Text fontSize='xs'>{quote[quotes]}</Text>
                <Button onClick={changeQuotes} size='xs' colorScheme='blue' variant='outline'>New Quote</Button>
            </Box >
            <Spacer />
            <Spacer />
            <Box align='end' p='2'>
                <Text fontSize='sm' fontWeight='bold'>Contact Us<EmailIcon /></Text>
                <Link fontSize='sm' href="mailto:bellwines@email.com">Email Bellwines</Link>
            </Box>
        </Flex>
    )
}
