import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';
import ButtonCustomRedirect from './ButtonCustomRedirect';
import { useAuth } from '../../hooks/useAuth';

export default function SwipeableTemporaryDrawer() {

  const [state, setState] = React.useState({
    right: false,
  })

  const {firebaseLogout} = useAuth()
  const navigator = useNavigate()
  const {currentUser} = useSelector(state => state.user)
  
  const logOutuser = async () => {
    firebaseLogout()
    navigator('/login')
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  }

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className='mt-4'></div>
      
      <List>

        <div className="d-flex flex-column gap-4 align-items-start navigation-box" >
        <NavLink 
        className={({isActive}) => isActive 
        ? 'navigation-active h4' : 'navigation-text h4'} 
        to={'/trending'}>
        Trending
        </NavLink>
        <NavLink 
        className={({isActive}) => isActive 
        ? 'navigation-active h4' : 'navigation-text h4'} 
        to={'/entry'}>
        News
        </NavLink>
       
        </div>

    
        { currentUser 
          ?
          <div className="text-center d-flex flex-column mt-3 align-items-start mt-4" >
            <span className="fw-bold m-0 mx-3">
            <i className='bi bi-person-fill'></i>
            <i className="text-dark">
              {currentUser?.displayName}</i>
              </span>
              <button onClick={logOutuser} 
              className='button-82 mx-3 my-2'
              >Logout</button>
           </div>
          : <div className="text-center d-flex flex-column mt-3 align-items-start mt-4" >
          
            <ButtonCustomRedirect
             text={'Login'} 
             customClass={'button-81 mx-3'} 
             url={'login'}
            />
         </div>
        }
        
      </List>

      <Divider />
      
      <List>
      
      <div className="networks-box mt-5">
         
                <i className="bi bi-twitch h4 m-0 social-network twitch"></i>
                <i className="bi bi-twitter h4 m-0 social-network tt"></i>
                <i className="bi bi-youtube h4 m-0 social-network yt"></i>
      </div>
      </List>
      
    </Box>
  )

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
              
          <Button onClick={toggleDrawer(anchor, true)}>
          <MenuIcon sx={{ fontSize: 40 }} />
          </Button>
          
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>

        </React.Fragment>
      ))}
    </div>
  )
}