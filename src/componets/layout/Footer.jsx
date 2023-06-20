import { Divider, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"


const Footer = () => {
    return ( 
        <div className="text-center text-white mt-1 d-flex flex-column justify-content-between" >

            <Divider/>
           
            <div className="container  d-flex align-items- align-items-sm-start
             justify-content-between mt-2 mt-sm-1">

                <div className="d-flex gap-2 flex-column flex-sm-row align-items-start" >
                    <NavLink 
                    className={({isActive}) => isActive 
                    ? 'text-dark' : 'text-dark'} 
                    to={'/trending'}>
                    Trending
                    </NavLink>
                
                    <NavLink 
                    className={({isActive}) => isActive 
                    ? 'text-dark' : 'text-dark'} 
                    to={'/entry'}>
                    News
                    </NavLink>
                </div>

                <div className="">
                    <i className="bi bi-twitch h4 m-0 social-network twitch"></i>
                    <i className="bi bi-twitter h4 m-0 social-network tt"></i>
                    <i className="bi bi-youtube h4 m-0 social-network yt"></i>
                </div>
            </div>

            <div className="text-center text-dark py-3 mt-4">
            <Typography color="textSecondary" variant="subtitle1" style={{fontSize: '13px'}} className="fw-bold">
              {`${new Date().getFullYear()} | React | Cristian Huila - Luis Cordero | Monteria-Cordoba`}
            </Typography>
            
            </div>

        </div>
     )
}
 
export default Footer