const ButtonCustomAuth = ({isResolve, ocurredError, text}) => {
    return ( 
        <button disabled={ocurredError}
        className={
            ocurredError 
            ? 'button-80 d-flex align-items-center justify-content-around py-1 button-80-disable' 
            : 'button-80 d-flex align-items-center justify-content-around py-1'
            }>

            {text ? text : ''}
            
            {
            isResolve 
            ? null 
            : <span className="spinner-border spinner-border-sm" role="status" 
            aria-hidden="true"></span>
            }
            
    </button>
     )
}
 
export default ButtonCustomAuth