import React, { useState } from 'react'
import Tooltip from '@mui/material/Tooltip'
import { Fab, Box, Typography, Modal, Avatar, styled, TextField, Stack, ButtonGroup, Button } from '@mui/material'
import {Add as AddIcon, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from '@mui/icons-material'
const Add = () => {
    const [isOpen,setIsOpen] = useState(false)
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.default',
        borderRadius: '10px',
        boxShadow: '0 0 10px black',
        p: 2,
      };

      const UserBox = styled(Box)({
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '10px'
      })
  return (
    <>
    <Tooltip onClick={()=> setIsOpen(true)} title="" sx={{position: 'fixed', bottom: 30, left: {xs: 'calc(50% - 25px)', sm: 20}}} >
    <Fab color='primary'>
        <AddIcon/>
    </Fab>
    </Tooltip>
    <Modal color='text.primary'
  open={isOpen}
  onClose={() => setIsOpen(false)}
  
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box bgcolor='background.default' color='text.primary' sx={style}>
    <Typography variant='h6' textAlign='center'>Create post</Typography>
    <UserBox>
        <Avatar alt='strange Dude' src='https://avatars.mds.yandex.net/i?id=fcb08f6a3dbc7cf177433e1b3ec8e7c078968956-4502683-images-thumbs&n=13'/>
        <Typography fontWeight={400} variant='span'>Strange Dude</Typography>
    </UserBox>
    <TextField
        sx={{width: '100%'}}
          id="standard-multiline-static"
          multiline
          rows={4}
          placeholder="inter text"
          variant="standard"
        />
        <Stack direction='row' gap={1} mt={2} mb={2}>
            <EmojiEmotions color='primary'/>
            <Image color='secondary'/>
            <VideoCameraBack  color='success'/>
            <PersonAdd color='error'/>
        </Stack>
        <ButtonGroup fullWidth  variant='contained'>
          <Button>
            Post
          </Button>
          <Button sx={{width: '100px'}}>
            <AddIcon/>
          </Button>
        </ButtonGroup>
  </Box>
</Modal>
    </>
  )
}

export default Add