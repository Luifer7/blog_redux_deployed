import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, NavLink, useLocation } from 'react-router-dom';
import TransitionLayout from '../componets/adminpage/TransitionLayout';
import logoblog from '../assets/img/logoblog.png'
import ChangePreviewSize from '../componets/adminpage/ChangePreviewSize';


const drawerWidth = 190;


function PrivateLayout(props) {
  
  const {window, routes} = props
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const { nodeRef } = routes.find((route) => route.path === location.pathname) ?? {}

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>

        <div className='w-100 d-flex align-items-center justify-content-center' 
        style={{height: '64px'}} >
             
             {/** LOGO */}
            <div className="logo-box" >
           <Link className="text-dark fw-bold h2 m-0 text-decoration-none" 
            to={'/'}>
            <img width={130} height={45} src={logoblog} alt="not aviable" />
           </Link>
            </div>
             {/** LOGO */}
        
        </div>

      <Divider />
      
      <List>
          
          <Link to={'/admin'} 
          className='text-decoration-none px-3 d-flex align-items-center mb-3' >
       
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
            
             <ListItemText primary={'new'} />
        
          </Link>

          <Link to={'/admin/preview'} 
          className='text-decoration-none px-3 d-flex align-items-center mb-3' >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
          <ListItemText primary={'preview'} />
        
           
            
          </Link>

          <Link to={'/admin/entries'} 
          className='text-decoration-none px-3 d-flex align-items-center mb-3' >
       
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
            
             <ListItemText primary={'entries'} />
        
          
          </Link>
      
      </List>

    </div>
  )

  const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar  style={{backgroundColor: '#0e2342da'}}  >
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h5" noWrap component="div">

            <span className='fw-bold' 
            style={{textShadow: '1px 1px 1px black' }}>
              Dashboard
            </span>
          </Typography>
          
          <ChangePreviewSize/>

        </Toolbar>

      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar /> 

         <TransitionLayout nodeRef={nodeRef} />

      </Box>
    </Box>
  )
}

PrivateLayout.propTypes = {
  window: PropTypes.func,
}

export default PrivateLayout;