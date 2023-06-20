import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
    return ( 
        <div className="container mt-5 d-flex align-items-center justify-content-center flex-column" 
        style={{minHeight: '80vh'}} >
            <h1 style={{fontSize: '180px', textShadow: '3px 2px 2px black'}} 
            className="p-0 m-0 fw-bold">404</h1>
           <h3 
           style={{textShadow: '1px 1px 1px'}}
           className="fw-bold" 
           >NOT FOUND PAGE
           </h3>
          <NavLink to={'/'} className='d-flex gap-1 align-items-center' >
            <i className="bi bi-arrow-left mt-1"></i>
            <strong>Back</strong>
          </NavLink>
        </div>
     )
}
 
export default NotFoundPage;