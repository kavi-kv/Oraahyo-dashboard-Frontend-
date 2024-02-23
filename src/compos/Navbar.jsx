import React from 'react'
import { AppBar, IconButton, Toolbar,Typography, Stack, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from '@/Backend/Context/AuthContext'

function Navbar() {
  const { signOut,token,setIsAuthenticated,isAuthenticated,isUserLoggedIn } = useAuth();
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try{
      await signOut();
      setIsAuthenticated(false)
      navigate('/login');
    }
    catch(err){
      console.log("Error: ",err)
    }
  }
  

  return (
    <AppBar
    sx={{
        position: "absolute",
        background: "none",
        boxShadow: "none",
        backgroundColor: "#F1EFEF",
        
      }}
    >
        <Toolbar>
            <IconButton size='small' edge='start' color='inherit' aria-label='logo' fontSize="22px">
                <h6>⭕</h6>
            </IconButton>
            <Typography variant='6' component='div' color="black" fontSize="22px" sx={{ flexGrow: 1 }}>
                Oraahyo 
            </Typography>
            <Stack direction='row' spacing={ 2 } color="black">
                
                <Button color='inherit' onClick={handleSignOut}>Logout</Button>
            </Stack>
        </Toolbar>  
    </AppBar>
  )
}

export default Navbar
