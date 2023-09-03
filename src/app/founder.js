'use client'
import { Stack, Box, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";

const Founder = () => {
    return (
        <><Heading textAlign={'center'} mt={['0px', '0px', '100px', '250px']}>
            About Our Founder
        </Heading>
            <Stack direction={'row'} pr={'20px'} pl={'20px'}>
                <Box w={'40%'}>
                    <Image src="/whiteman.jpg" />
                </Box>
                <Box w={'60%'}>
                    <Heading as={'h3'} textAlign={'center'} pt={['50px', '50px', '100px', '270px']}>
                        Sir. Reginald Hargreaves MD
                    </Heading>
                </Box>
            </Stack>
            <Text mt={'50px'} pr={'20px'} pl={'20px'}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis repudiandae aliquid culpa, minima, 
                voluptatibus architecto dicta neque voluptatum assumenda repellendus quod? 
                Fugiat qui quasi atque officiis facilis repudiandae ad doloribus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam earum eligendi, 
                quis sint repudiandae omnis ipsum perferendis fugiat explicabo a natus quas et nobis minima consequuntur in facilis, sequi enim.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor vel ut aliquam, ea possimus earum. 
                Maiores repellat cupiditate facere ipsum illum, fugit saepe laboriosam quae corporis recusandae fugiat tempore eum.
                Voluptatem non voluptate deleniti voluptas praesentium architecto reprehenderit inventore enim delectus deserunt in, 
                illum obcaecati itaque temporibus beatae omnis dolorum. Consequuntur quia eos non ex. Harum ratione dolores sint aliquid?
            </Text>


        </>
    );
}

export default Founder;