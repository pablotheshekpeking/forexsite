'use client'
import { Stack, Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Types = () => {
    return ( 
        <>
        <Heading textAlign={'center'} mt={'50px'}>
            Available Courses
        </Heading>
        <Stack direction={['column', 'column', 'row', 'row']} mt={'50px'} ml={'20px'} mr={'20px'} color={'#111111'}>
            <Box bg={'#dddddd'} w={'100%'} textAlign={'center'} borderRadius={'20px'}>
                <Heading as={'h3'} pt={'20px'} pl={'20px'} pr={'20px'}>
                    Forex Trading for beginners & pros
                </Heading>
                <Text pl={'20px'} pr={'20px'} m={'auto'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nihil exercitationem eum 
                    tempora amet commodi culpa libero consectetur magni! Commodi cum suscipit dicta iusto quos 
                    architecto officiis velit officia molestiae.
                </Text>
            </Box>
            <Box bg={'#dddddd'} w={'100%'} textAlign={'center'} borderRadius={'20px'}>
                <Heading as={'h3'} pt={'20px'} pl={'20px'} pr={'20px'}>
                    Google Adsense
                </Heading>
                <Text pl={'20px'} pr={'20px'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nihil exercitationem eum 
                    tempora amet commodi culpa libero consectetur magni! Commodi cum suscipit dicta iusto quos 
                    architecto officiis velit officia molestiae.
                </Text>
            </Box>
            <Box bg={'#dddddd'} w={'100%'} textAlign={'center'} borderRadius={'20px'}>
                <Heading as={'h3'} pt={'20px'} pl={'20px'} pr={'20px'}>
                    Web Design (Html & React)
                </Heading>
                <Text pl={'20px'} pr={'20px'} m={'auto'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nihil exercitationem eum 
                    tempora amet commodi culpa libero consectetur magni! Commodi cum suscipit dicta iusto quos 
                    architecto officiis velit officia molestiae.
                </Text>
            </Box>
        </Stack>
        </>
     );
}
 
export default Types;