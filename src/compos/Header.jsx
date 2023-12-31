import React from 'react'
import { Typography,Box,useTheme } from '@mui/material'

function Header({title,subTitle}) {
    const theme = useTheme();
  return (
    <div>
      <Box>
        <Typography
        variant='h2'
        color={theme.palette.secondary[100]}
        fontSize="bold"
        sx={{ mb: "5px" }}
        >
            {title}
        </Typography>
        <Typography variant='h5' color={theme.palette.secondary[300]}>
            {subTitle}
        </Typography>
      </Box>
    </div>
  )
}

export default Header
