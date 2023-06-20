import { Link, NavLink } from "react-router-dom"
import { useState } from "react"
import "./auth.css"
import { TextField } from "@mui/material"
import { useAuth } from "../../hooks/useAuth"
import AlertCustom from "../layout/AlertCustom"
import ButtonCustomAuth from "../layout/ButtonCustomAuth"

const ResetPassword = () => {

    const {
        firebaseResetPassword,
        tryLoginAgain,
        firebaseError, 
        firebaseMessage, 
        isResolve, 
        ocurredError
        } = useAuth()
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    const [user, setUser] = useState({})
    const [emailError, setEmailError] = useState(false)
    const [emailErrorMessage, setEmailErrorMessage] = useState('')

    const handledChange = e => {
        
        setUser({ 
            ...user, [e.target.name] : e.target.value
        })
        if (e.target.name === 'email') {
            if (e.target.value.match(emailPattern) || e.target.value === '') {
                setEmailError(false)
            } else {
                setEmailError(true)
                setEmailErrorMessage('Incorrect email format')
            }
        }
       
    }

    const handleBlurEmail = (e) => {
        if (e.target.value === '') {
            setEmailError(true)
            setEmailErrorMessage('You cannot send empty fields')
        }
    }

    const handleSubmit = (e) => {
           
        e.preventDefault()
        if (!user.email) {
            setEmailError(true)
            setEmailErrorMessage('You cannot send empty fields')
            return
        }
       
        if (!emailError) { 
            firebaseResetPassword(user.email)
        }
    }
    
    
    return ( 
        <form onSubmit={handleSubmit} 
        className="container mt-4 d-flex align-items-center flex-column justify-content-center" 
        style={{minHeight: '400px'}}>
             
            

             <h2 className="fw-bold mb-3 mb-5 d-flex align-items-center justify-content-start w-100" 
             style={{textShadow: '1px 1px 1px black'}} >
             Restart your password
             </h2>

            
                <TextField 
                helperText={emailError ? emailErrorMessage : ''}
                id="standard-basic-one" 
                label="Email"
                sx={{width: '100%'}} 
                variant="standard" 
                onChange={handledChange}
                name="email"
                error={emailError}
                onBlur={handleBlurEmail}
                InputLabelProps={{style: {fontSize: 15, fontWeight: 'bold'}}}
                />
            
                <div className="text-start d-flex align-items-start justify-content-between w-100 mt-4" >
  
              
                <ButtonCustomAuth
                isResolve={isResolve}
                ocurredError={ocurredError}
                text={'Send'}
                />

                <Link to={'/login'}>Back to Login</Link>
                    
                </div>
            
                <AlertCustom 
                error={firebaseError} 
                message={firebaseMessage}
                tryLoginAgain={tryLoginAgain}
                />
             

        </form>
     )
}
 
export default ResetPassword