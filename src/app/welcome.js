'use client'
import { Stack, Box, Text, Heading, Image } from "@chakra-ui/react";
import React from "react";


const Welcome = () => {
    return (
        <Stack w={'100%'} h={'500px'} direction={['column', 'column', 'row', 'row']} mb={['0px', '0px', '', '']}>
            <Box w={'100%'} textAlign={'center'} mt={['5px', '30px', '30px', '20%']} pr={'20px'} pl={'20px'}>
                <Heading mb={['5px', '10px', '20px', '20px']}>
                    Welcome to Duman Forex
                </Heading>
                <Text pr={['', '20px', '', '']} pl={['', '20px', '', '']}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam laudantium sed nesciunt dolores optio 
                    libero cum molestias cupiditate inventore. Beatae recusandae odit aliquam id minima ducimus nulla eaque quidem optio!
                </Text>
            </Box>
            <Box w={'100%'} h={'500px'} mt={['5px', '30px', '30px', '10%']} pr={'20px'} pl={'20px'} display={['none', 'none', 'inline', 'inline']}>
                <Image src="/forex1.png" h={'100%'} w={'100%'} m={'auto'} />
            </Box>
        </Stack>
    );
}

export default Welcome;