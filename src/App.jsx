import { Box, Stack, ThemeProvider, createTheme } from "@mui/material"
import Feed from "./Components/Feed"
import RightBar from "./Components/RightBar"
import SideBar from "./Components/SideBar"
import NavBar from "./Components/NavBar"
import Add from "./Components/Add"
import { useState } from "react"

function App() {
  const [mode,setModes] = useState('dark');

  const darkTheme = createTheme ({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>

    
      <Box bgcolor='background.default' color='text.primary'>
        <NavBar/>
        <Stack direction='row' paddingTop='60px' spacing={2} justifyContent='space-between'>
          <SideBar setMode={setModes} mode={mode}/>
          <Feed/>
          <RightBar/>
        </Stack>
        <Add/>
      </Box>

    </ThemeProvider>
  )
}

export default App
