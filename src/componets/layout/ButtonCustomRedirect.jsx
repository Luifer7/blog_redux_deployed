import { NavLink } from "react-router-dom";

const ButtonCustomRedirect = ({text, url, customClass}) => {
    return ( 
        <NavLink to={`/${url ? url : ''}`} 
        className={customClass ? customClass : ''}
        >{text ? text : ''}</NavLink>
     )
}
 
export default ButtonCustomRedirect;