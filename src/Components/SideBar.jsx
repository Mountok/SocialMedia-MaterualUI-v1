import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import React, { useState } from 'react'

const SideBar = ({setMode,mode}) => {
  const [isNight, setIsNight] = useState(false)
  const handleChangeMode = () => {
    setIsNight(!isNight);
    setMode(mode === 'light' ? 'dark' : 'light')
  }
  return (
    <Box flex={2} p={1} sx={{display: { xs: 'none', sm: 'block'}}}>
      <Box position='fixed'>
        <List>
          <ListItem disablePadding sx={{boxShadow: '0 0px 1px grey'}}>
            <ListItemButton  component='a' href='#home'>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Home page" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{boxShadow: '0 0px 1px grey'}}>
            <ListItemButton  component='a' href='#home'>
              <ListItemIcon>
                <GroupsIcon/>
              </ListItemIcon>
              <ListItemText primary="Group" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{boxShadow: '0 0px 1px grey'}}>
            <ListItemButton  component='a' href='#home'>
              <ListItemIcon>
                <StorefrontIcon/>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{boxShadow: '0 0px 1px grey'}}>
            <ListItemButton  component='a' href='#home'>
              <ListItemIcon>
                <Diversity3Icon/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{boxShadow: '0 0px 1px grey'}}>
            <ListItemButton  component='a' href='#home'>
              <ListItemIcon>
                <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{boxShadow: '0 0px 1px grey'}}>
            <ListItemButton  component='a' href='#home'>
              <ListItemIcon>
                <AccountBoxIcon/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding sx={{boxShadow: '0 0px 1px grey'}}>
            <ListItemButton disableTouchRipple  component='a' href='#home'>
              <ListItemIcon>
                {isNight ? (
                  <Brightness7Icon/>
                  
                ) : (
                  <NightlightRoundIcon/>

                )}
              </ListItemIcon>
              <Switch  onClick={handleChangeMode}/>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default SideBar