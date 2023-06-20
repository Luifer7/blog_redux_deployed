import { Link, NavLink, useNavigate } from "react-router-dom"
import "../layout/layout.css"
import  {useFixed} from "../../hooks/useFixed"
import SwipeableTemporaryDrawer from "./DrawerMenu"
import { useGetWidth } from "../../hooks/useGetWidth"
import logoblog from "../../assets/img/logoblog.png"
import { useDispatch, useSelector } from "react-redux";
import ButtonCustomRedirect from "./ButtonCustomRedirect"
import { useAuth } from "../../hooks/useAuth"


const Header = () => {

    const { isFixed, positionStyles } = useFixed()
    const {width} = useGetWidth()
    const {firebaseLogout} = useAuth()

    const dispatch = useDispatch()
    const navigator = useNavigate()
    
    const logOutuser = async () => {
      await firebaseLogout() 
      navigator('/login')
    }

    const {currentUser} = useSelector(state => state.user)


    return ( 
        <div  className="w-100 header-box" style={isFixed ? positionStyles : {}} > 
           
           <div className="logo-box" >
           <Link className="text-dark fw-bold h2 m-0 text-decoration-none" 
            to={'/'}>
            <img width={140} height={50} src={logoblog} alt="" />
           </Link>
           </div>
  
         
            
            {
                
                width > 850
                ?
                
                <div className="networks-box">

                    <NavLink 
                    className={
                    ({isActive}) => isActive 
                    ? 'h4 bi bi-search m-0 mx-1' 
                    : 'h4 bi bi-search m-0 mx-1'} 
                    to={'/search'}>
                    </NavLink>
               
                    <i className="bi bi-twitch h4 m-0 social-network twitch"></i>
                    <i className="bi bi-twitter h4 m-0 social-network tt"></i>
                    <i className="bi bi-youtube h4 m-0 social-network yt"></i>
                    
                    { currentUser 
                    ?
                    <div className="dropdown" >
                        
                        <span className="dropdown-toggle fw-bold" type="button" 
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-person-fill h4 text-dark"></i>
                        </span>
                        
                        <ul className="dropdown-menu text-start">
                            <li className="dropdown-item" ><i className="fw-bold" >{currentUser?.displayName}</i></li>
                            <li className="dropdown-item" ><i className="fw-bold" >{currentUser?.email}</i></li>
                            <button onClick={logOutuser} style={{minWidth: '100px'}} 
                            className='button-82 mx-3 my-2'
                            >Logout</button>
                            <li className="dropdown-item text-start" ><NavLink
                             to={'/admin'}>Admin</NavLink></li>
                        </ul>
                        
                    </div>
                    : <ButtonCustomRedirect 
                      text={'Login'} 
                      customClass={'button-81'} 
                      url={'login'}
                      />
                    }
                </div>
                : null
            }
           
           {
                width < 850 
                ?
                <div className="d-flex gap-2 align-items-center" >
        
                <NavLink 
                className={
                ({isActive}) => isActive 
                ? 'h2 bi bi-search m-0 mx-1 serching' 
                : 'h2 bi bi-search m-0 mx-1'} 
                to={'/search'}>
                </NavLink>
                    
                <SwipeableTemporaryDrawer/>
                
                </div>
                : null
            }

        </div>
     )
}
 
export default Header