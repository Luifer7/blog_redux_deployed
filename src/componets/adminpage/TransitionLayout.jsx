import {  useLocation, useOutlet } from "react-router-dom"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import { Fragment } from "react"

const TransitionLayout = ({nodeRef}) => {
  
    const location = useLocation()
    const currentOutlet = useOutlet() 
   
    return ( 
        <Fragment>
        <div className="content">
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            {() => (
              <div ref={nodeRef} 
              className="page d-flex flex-column justify-content-between" 
              style={{minHeight: '88vh', overflow: `${location.pathname === '/admin/preview' ? 'auto' : 'hidden'}`}}>
               {currentOutlet}
              </div>
            )}
          </CSSTransition>
        </SwitchTransition>
        </div>
        </Fragment>
     )
}
 
export default TransitionLayout