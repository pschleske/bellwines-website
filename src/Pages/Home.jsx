import React from 'react'

import { Heading, Flex, Container, Stack, Text, Button, Card, HStack, Box, Link, Image, Skeleton } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom'

import { ColorBlob } from '../Elements/ColorBlob'

export const Home = () => {
    return (
        <>
            <ColorBlob />
            <br />
            <br />
            <Flex justifyContent='center'>
                <Heading color='whiteAlpha.900'> Join our community! </Heading>
            </Flex>
            <Container maxW="6xl" px={{ base: 6, md: 3 }} py={24}>
                <Stack direction={{ base: 'column', md: 'row' }} justifyContent="center">
                    <Stack direction="column" spacing={6} justifyContent="center" maxW="480px">
                        <Heading fontSize="2xl" lineHeight={1} fontWeight="bold" textAlign="left">
                            Life elevated<br />
                            <Text color="blue.600">at Bellwines</Text>
                        </Heading>
                        <Text
                            fontSize="1.2rem"
                            textAlign="left"
                            lineHeight="1.375"
                            fontWeight="400"
                            color="gray.500"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Text>
                        <HStack
                            spacing={{ base: 0, sm: 2 }}
                            mb={{ base: '3rem !important', sm: 0 }}
                            flexWrap="wrap"
                        >
                            <NavLink to='/landing'>
                                <Button
                                    w={{ base: '100%', sm: 'auto' }}
                                    h={12}
                                    px={6}
                                    color="white"
                                    size="lg"
                                    rounded="md"
                                    mb={{ base: 2, sm: 0 }}
                                    zIndex={5}
                                    lineHeight={1}
                                    bgGradient="linear(to-l, #0ea5e9,#2563eb)"
                                    _hover={{ bgGradient: 'linear(to-l, #0ea5e9,#2563eb)', opacity: 0.9 }}
                                >
                                    <Text> Register/Login </Text>
                                    <ChevronRightIcon h={4} w={4} ml={1} />
                                </Button>
                            </NavLink>
                            <Box
                                d="flex"
                                justifyContent="center"
                                bg='white'
                                w={{ base: '100%', sm: 'auto' }}
                                border="1px solid"
                                borderColor="gray.300"
                                p={3}
                                lineHeight={1.18}
                                rounded="md"
                                boxShadow="md"
                                as={Link}
                                zIndex={55555555}
                                as="a"
                                href="mailto:bellwines@email.com"
                            >
                                Email us!
                            </Box>
                        </HStack>
                    </Stack>
                    <Box ml={{ base: 0, md: 5 }} pos="relative">
                        <Image
                            w="100%"
                            h="100%"
                            minW={{ base: 'auto', md: '30rem' }}
                            objectFit="cover"
                            src={`https://images.unsplash.com/photo-1658263516938-9e4f2cd07580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80`}
                            rounded="md"
                            fallback={<Skeleton />}
                        />
                    </Box>
                </Stack>

                <br />
                <br />
                <br />

                <Flex >
                    <Box
                        maxW={{ base: 'full', md: '275px' }}
                        w={'full'}
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        p={5}>
                        <Stack align={'start'} spacing={2}>
                            <Flex
                                w={20}
                                h={20}
                                align={'center'}
                                justify={'center'}
                                justifyContent={'center'}
                                color={'white'}
                                rounded={'full'}
                                bg='gray.100'>
                                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu1ZAMw2XkttJYi3cOhggQjkn1XnBgxoFOrA&usqp=CAU' alt='user illustration' />
                            </Flex>
                            <Box mt={2}>
                                <Heading size="md">Get to know your neighbors</Heading>
                                <Text mt={1} fontSize={'sm'}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                </Text>
                            </Box>
                            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
                                Learn more
                            </Button>
                        </Stack>
                    </Box>
                    <Box p={4}>
                    </Box>
                    <Box
                        maxW={{ base: 'full', md: '275px' }}
                        w={'full'}
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        p={5}>
                        <Stack align={'start'} spacing={2}>
                            <Flex
                                w={20}
                                h={20}
                                align={'center'}
                                justify={'center'}
                                color={'white'}
                                rounded={'full'}
                                bg='gray.100'>
                                <Image src='https://cdn.dribbble.com/users/90702/screenshots/2853852/pet_creds_illustrations-01.png' alt='pets illustration' />
                            </Flex>
                            <Box mt={2}>
                                <Heading size="md">Pet Friendly!</Heading>
                                <Text mt={1} fontSize={'sm'}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                </Text>
                            </Box>
                            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
                                Learn more
                            </Button>
                        </Stack>
                    </Box>
                    <Box p={4}>
                    </Box>
                    <Box
                        maxW={{ base: 'full', md: '275px' }}
                        w={'full'}
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        p={5}>
                        <Stack align={'start'} spacing={2}>
                            <Flex
                                w={20}
                                h={20}
                                align={'center'}
                                justify={'center'}
                                color={'white'}
                                rounded={'full'}
                                bg='gray.100'>
                                <Image src='https://static.vecteezy.com/system/resources/previews/009/400/627/original/tool-clipart-design-illustration-free-png.png' alt='tool illustration' />
                            </Flex>
                            <Box mt={2}>
                                <Heading size="md">Maintenance Requests</Heading>
                                <Text mt={1} fontSize={'sm'}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                </Text>
                            </Box>
                            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
                                Learn more
                            </Button>
                        </Stack>
                    </Box>
                    <Box p={4}>
                    </Box>
                    <Box
                        maxW={{ base: 'full', md: '275px' }}
                        w={'full'}
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        p={5}>
                        <Stack align={'start'} spacing={2}>
                            <Flex
                                w={20}
                                h={20}
                                align={'center'}
                                justify={'center'}
                                color={'white'}
                                rounded={'full'}
                                bg='gray.100'>
                                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJHngGtiNFPynr1J4rI7I5dw4MJW574O7WLg&usqp=CAU' alt='calendar' />
                            </Flex>
                            <Box mt={2}>
                                <Heading size="md">Community Events</Heading>
                                <Text mt={1} fontSize={'sm'}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                </Text>
                            </Box>
                            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
                                Learn more
                            </Button>
                        </Stack>
                    </Box>
                    <Box p={4}>
                    </Box>
                    <Box
                        maxW={{ base: 'full', md: '275px' }}
                        w={'full'}
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        p={5}>
                        <Stack align={'start'} spacing={2}>
                            <Flex
                                w={20}
                                h={20}
                                align={'center'}
                                justify={'center'}
                                color={'white'}
                                rounded={'full'}
                                bg='gray.100'>
                                <Image src='https://img.freepik.com/premium-vector/e-wallet-digital-payment-online-transaction-with-woman-standing-holding-mobile-phone-concept-illustration_270158-446.jpg' alt='online payment' />
                            </Flex>
                            <Box mt={2}>
                                <Heading size="md">Online Payments</Heading>
                                <Text mt={1} fontSize={'sm'}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                </Text>
                            </Box>
                            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
                                Learn more
                            </Button>
                        </Stack>
                    </Box>
                    <Box p={4}>
                    </Box>
                </Flex>
            </Container>
        </>
    )
}
//

// src = {`https://ethereum.org/static/28214bb68eb5445dcb063a72535bc90c/9019e/hero.webp`}

