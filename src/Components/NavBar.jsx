import styled from '@emotion/styled'
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import LogoDevIcon from '@mui/icons-material/LogoDev';

import React, { useState } from 'react'



const StyledToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
})

const Search = styled('div')(({theme}) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: '5px',
    width: '40%'
}))
const Icons = styled(Box)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
}))
const UserBox = styled(Box)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
}))

const NavBar = () => {
    const [open,setOpen] = useState(false) 
  return (
    <AppBar position='fixed'>
        <StyledToolBar >
            <Typography variant='h6' sx={{display: {xs: 'none', sm: 'block'}}}>DASHUEV DEV</Typography>
            <LogoDevIcon sx={{display: {xs: 'block', sm: 'none'}}}/>

            <Search><InputBase placeholder='search...'/></Search>
            <Icons sx={{display: {xs:'none',sm: 'flex'}}}>
                <Badge badgeContent={4} color="error">
                    <MailIcon/>
                </Badge>  
                <Badge badgeContent={2} color="error">
                    <NotificationsIcon/>
                </Badge>   
                <Avatar onClick={()=>setOpen(true)} sx={{width:30, height:30}}></Avatar>
            </Icons>
            <UserBox onClick={()=>setOpen(true)} sx={{display: {xs:'flex',sm: 'none'}}}>
                <Avatar sx={{width:30, height:30}}></Avatar>
                <Typography variant='span'>Dashuev</Typography>
            </UserBox>
        </StyledToolBar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default NavBar