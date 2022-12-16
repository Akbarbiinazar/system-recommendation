import { AppBar, Button, Drawer, IconButton, List, ListItem, ListItemText, ThemeProvider, Toolbar, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { Stack } from '@mui/system';
import Links from './DrawerComp/DrawerComp';
import '../../App.css'
import DrawerComp from './DrawerComp/DrawerComp';
import { useTheme } from '@emotion/react';

const Header = () => {
  const [value, setValue] = useState()
//   const theme = useTheme()
//   const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <>
        <AppBar position='static' >
            <Toolbar sx={{justifyContent: 'space-between'}}>
                <IconButton size='large' edge="start" color="inherit" aria-label='logo'>
                    <AccessibilityNewIcon />
                    <Typography variant='h6' component='div'>
                        FindMovie
                    </Typography>
                </IconButton>
                <Stack direction='row' spacing={2} >
                    <Button color='inherit'><NavLink to="/" className='link'>Main</NavLink></Button>
                    <Button color="inherit"><NavLink to="/movies" className='link'>Movies</NavLink></Button>
                    <Button color="inherit"><NavLink to="/favorites" className='link'>Favorites</NavLink></Button>
                </Stack> 
            
            </Toolbar>
            {/* <DrawerComp /> */}
            
        </AppBar>
     
    </>
  )
}

export default Header