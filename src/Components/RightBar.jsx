import { Avatar, AvatarGroup, Box, ImageListItem, Typography,ImageList } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import React from 'react'

const RightBar = () => {
  return (
    <Box flex={2} p={2} sx={{display: { xs: 'none', sm: 'block'}}}>
        <Box position='fixed' width={300}>
          <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
          <AvatarGroup max={5}>
            <Avatar alt='Tom Cruse' src='https://www.startsmile.ru/upload/medialibrary/a8b/pic__dent_6_0004_Layer%207.jpg'/>
            <Avatar alt='Antoni Glay' src='https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg'/>
            <Avatar alt='Amanda Swift' src='https://avatars.mds.yandex.net/i?id=981197a47f8051508df61ebbe2115e99_l-7761683-images-thumbs&ref=rim&n=13&w=900&h=1125'/>
            <Avatar alt='Steve Jobs' src='https://danceon.ru/wp-content/uploads/4/4/a/44ada5c0dc9065c1a4b8d68e04d1eb4f.jpeg'/>
            <Avatar alt='strange Dude' src='https://avatars.mds.yandex.net/i?id=fcb08f6a3dbc7cf177433e1b3ec8e7c078968956-4502683-images-thumbs&n=13'/>
            <Avatar alt='strange Dude' src='https://avatars.mds.yandex.net/i?id=fcb08f6a3dbc7cf177433e1b3ec8e7c078968956-4502683-images-thumbs&n=13'/>
          </AvatarGroup>
          <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
          <ImageList cols={3} rowHeight={100}>
            <ImageListItem>
              <img src="https://material-ui.com/static/images/image-list/breakfast.jpg" alt="" />
            </ImageListItem>
            <ImageListItem>
              <img src="https://news-cdn.softpedia.com/images/news2/This-Is-Likely-the-Last-Ubuntu-Community-Wallpaper-Contest-Send-Your-Artwork-Now-473983-3.jpg" alt="" />
            </ImageListItem>
            <ImageListItem>
              <img src="https://www.save-invest.com/wp-content/uploads/2019/08/istock-951514270.jpg" alt="" />
            </ImageListItem>
            <ImageListItem>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Wikimania_hackathon_2.JPG/1200px-Wikimania_hackathon_2.JPG" alt="" />
            </ImageListItem>
          </ImageList>
          <Typography variant='h6' fontWeight={100} mt={2}>Latest Conversation</Typography>
          <List  sx={{ width: '100%', maxWidth: 300}}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            
          </List>
        </Box>
    </Box>
  )
}

export default RightBar