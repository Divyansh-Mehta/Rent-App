import React from 'react'
import { Avatar, Box, Button, IconButton, Menu, MenuButton, MenuItem, MenuList, Spacer, Text } from '@chakra-ui/react'
import { AddIcon,  HamburgerIcon } from '@chakra-ui/icons'


const Navbar = () => {
    return (
        <Box>

            <Box d={{ base: 'none', md: 'flex' }} backgroundColor={'#860789'} p={'2'} justifyContent={'space-around'}>
                <Text fontFamily={'Work Sans'} color={'white'} fontSize='2xl'>HomeKart</Text>
                <Button colorScheme={'yellow'}><AddIcon boxSize={'5'} />..List A Home</Button>
                <Avatar size={'md'}></Avatar>
            </Box>

            <Box  d={{ base: 'flex', md: 'none' }} backgroundColor={'#860789'} p={'2'} justifyContent={'space-between'}>
            <Text fontFamily={'Work Sans'} color={'white'} fontSize='2xl'>HomeKart</Text>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                    />
                    <MenuList>
                        <MenuItem icon={<Avatar size={'sm'}/>}>
                            User Profile
                        </MenuItem>
                        <MenuItem px={8} icon={<AddIcon />}>
                            List A Home
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </Box>
    )
}

export default Navbar