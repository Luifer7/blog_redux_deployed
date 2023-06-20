import { useLocation, useOutlet } from "react-router-dom"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import Header from "../componets/layout/Header"
import Footer from "../componets/layout/Footer"

const PublicLayout = ({routes}) => {
    const location = useLocation()
    const currentOutlet = useOutlet() 
    const { nodeRef } = routes.find((route) => `${route.path}/${location.pathname}` === `${route.path}/${location.pathname}`) ?? {}

    return ( 
        <>  
        <Header/>
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
                style={{minHeight: '91vh'}}>
                 {currentOutlet}
                 <Footer/>
                </div>
              )}
            </CSSTransition>
          </SwitchTransition>
        </div>
       </>
     )
}
 
export default PublicLayout