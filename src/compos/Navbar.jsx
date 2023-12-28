import React from 'react'
import { AppBar, IconButton, Toolbar,Typography, Stack, Button } from '@mui/material'



function Navbar() {
  return (
    <AppBar
    sx={{
        position: "absolute",
        background: "none",
        boxShadow: "none",
        backgroundColor: "#F1EFEF"
      }}
    >
        <Toolbar>
            <IconButton size='small' edge='start' color='inherit' aria-label='logo' fontSize="22px">
                <h6>⭕</h6>
            </IconButton>
            <Typography variant='6' component='div' color="black" fontSize="22px" sx={{ flexGrow: 1 }}>
                {/* Oraahyo  */}
            </Typography>
            <Stack direction='row' spacing={ 2 } color="black">
                <Button color='inherit'>Feature</Button>
                <Button color='inherit'>Pricing</Button>
                <Button color='inherit'>about</Button>
                <Button color='inherit'>Login</Button>
            </Stack>
        </Toolbar>  
    </AppBar>
  )
}

export default Navbar
