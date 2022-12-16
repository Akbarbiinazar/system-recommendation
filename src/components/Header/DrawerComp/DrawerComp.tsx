import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  

  return (
    <>
       <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText>
                            Login
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>
            </List>
       </Drawer>
       <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
            <MenuIcon />
        </IconButton>
    </>
  )
}

export default DrawerComp;