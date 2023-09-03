'use client'
import { Stack, Box, Image, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const ScrollSnapContainer = () => {
    const parentStyles = {
        overflow: 'scroll',
        scrollSnapPointsY: 'repeat(100vh)',
        scrollSnapType: 'y mandatory',
    };

    const sectionStyles = {
        scrollSnapAlign: 'start',
        position: 'relative',
    };

    const containerStyles = {
        display: 'flex',
    };

    const childStyles = {
        flex: '0 0 100%',
    };

    return (
        <Stack direction={'row'} mt={'50px'}>
            <Box w={'10%'}></Box>
            <Box w={'80%'} m={'auto'}>
                <div className="parent row" style={parentStyles}>
                    <Stack direction={'row'}>
                        <section className="one" style={{ ...sectionStyles }}>
                            <Stack direction={'column'} w={['200px', '200px', '500px', '500px']}>
                                <Box>
                                    <Image src="/forex1.png" />
                                </Box>
                                <Box>
                                    <Heading fontSize={'20px'}>
                                        Something Important
                                    </Heading>
                                    <Text fontSize={'15px'}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veniam reprehenderit exercitationem perferendis magnam pariatur
                                        et facere alias, nesciunt minus dolorem vero est sapiente, repellendus hic quis?
                                    </Text>
                                </Box>
                            </Stack>
                        </section>
                        <section className="two" style={{ ...sectionStyles }}>
                            <Stack direction={'column'} w={['200px', '200px', '500px', '500px']}>
                                <Box>
                                    <Image src="/forex1.png" />
                                </Box>
                                <Box>
                                    <Heading fontSize={'20px'}>
                                        Something Important
                                    </Heading>
                                    <Text fontSize={'15px'}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veniam reprehenderit exercitationem perferendis magnam pariatur
                                        et facere alias, nesciunt minus dolorem vero est sapiente, repellendus hic quis?
                                    </Text>
                                </Box>
                            </Stack>
                        </section>
                        <section className="three" style={{ ...sectionStyles }}>
                            <Stack direction={'column'} w={['200px', '200px', '500px', '500px']}>
                                <Box>
                                    <Image src="/forex1.png" />
                                </Box>
                                <Box>
                                    <Heading fontSize={'20px'}>
                                        Something Important
                                    </Heading>
                                    <Text fontSize={'15px'}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veniam reprehenderit exercitationem perferendis magnam pariatur
                                        et facere alias, nesciunt minus dolorem vero est sapiente, repellendus hic quis?
                                    </Text>
                                </Box>
                            </Stack>
                        </section>
                        <section className="four" style={{ ...sectionStyles }}>
                            <Stack direction={'column'} w={['200px', '200px', '500px', '500px']}>
                                <Box>
                                    <Image src="/forex1.png" />
                                </Box>
                                <Box>
                                    <Heading fontSize={'20px'}>
                                        Something Important
                                    </Heading>
                                    <Text fontSize={'15px'}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veniam reprehenderit exercitationem perferendis magnam pariatur
                                        et facere alias, nesciunt minus dolorem vero est sapiente, repellendus hic quis?
                                    </Text>
                                </Box>
                            </Stack>
                        </section>
                    </Stack>
                </div>
            </Box>
            <Box w={'10%'}></Box>
        </Stack>
    );
};

export default ScrollSnapContainer;
