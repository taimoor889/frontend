import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
// import HomeIcon from '@material-ui/icons/Home';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';

import { Link, useLocation } from 'react-router-dom';
const drawerWidth = 240;

export default function Sidebar(props) {
    const location= useLocation()
    const path=location.pathname
    const {content}=props
    console.log(path);
  return (

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
           Manage info
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            
              <ListItem  disablePadding>
                <ListItemButton component={Link} to="/" selected={"/" === path}>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon >
                  <ListItemText primary={<Typography variant="body1">Home</Typography>} />
                </ListItemButton>
              </ListItem>
       
              <ListItem  disablePadding>
                <ListItemButton component={Link} to="/about" selected={"/about" === path}>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon >
                  <ListItemText primary={<Typography variant="body1">About</Typography>} />
                </ListItemButton>
              </ListItem>
          </List>
       
         
        </Box>
      </Drawer>
      <Box component="main">
        <Toolbar/>
        {content}
       </Box>
    </Box>
  );
}
