import { NavLink, useNavigate } from "react-router-dom"
import "./auth.css"
import {  FormControl, TextField } from "@mui/material"
import { useEffect, useState } from "react"

import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormHelperText from '@mui/material/FormHelperText';
import {useSelector } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import AlertCustom from "../layout/AlertCustom";
import ButtonCustomAuth from "../layout/ButtonCustomAuth";
import LinearProgressBar from "../layout/LinearProgressBar"

const LoginForm = () => {
    
    const {
        firebaseUserLogin, 
        firebaseLoginGoogle,
        tryLoginAgain,
        firebaseError,
        isResolve, 
        ocurredError
        } = useAuth()
    
        const navigator = useNavigate()

    const {currentUser} = useSelector(state => state.user)

    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    
    const [user, setUser] = useState({})
    
    const [emailError, setEmailError] = useState(false)
    const [emailErrorMessage, setEmailErrorMessage] = useState('')

    const [passwordError, setPasswordError] = useState(false)
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('')

    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = () => setShowPassword((show) => !show)
    const handleMouseDownPassword = (event) => {event.preventDefault()}

    const handleSubmit = async (e) => {
        
        e.preventDefault()

        if (!user.email) {
            setEmailError(true)
            setEmailErrorMessage('You cannot send empty fields')
        }
        
        if (!user.password) {
            setPasswordError(true)
            setPasswordErrorMessage('You cannot send empty fields')
        }

        if (!user.email || !user.password ) {
            return
        }

        if (!emailError && !passwordError) { 
            firebaseUserLogin(user)
        }
        
    }

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
        if (e.target.name === 'password') {
            if (e.target.value.length > 5) {
                setPasswordError(false)
            } else {
                setPasswordError(true)
                setPasswordErrorMessage('must be more than 6 characters')
            }
            if (e.target.value === '') {
                setPasswordError(false)
            }
        }
    }

    const handleBlurEmail = (e) => {
        if (e.target.value === '') {
            setEmailError(true)
            setEmailErrorMessage('You cannot send empty fields')
        }
    }

    const handleBlurPassword = (e) => {
        if (e.target.value === '') {
            setPasswordError(true)
            setPasswordErrorMessage('You cannot send empty fields')
        }
    }

    useEffect(() => {
    if (currentUser?.uid) {
        navigator('/')
    }
    },[currentUser])


    return ( 
        <div className="register-box" >
            {
                !isResolve &&  <LinearProgressBar/>
            }
           
            
            <div className="container  text-center py-3 px-4 mt-2" >
                <h2 className="fw-bold mb-3" style={{textShadow: '1px 1px 1px black'}} >LOGIN</h2>
         
                <form onSubmit={handleSubmit} className="mt-4 d-flex flex-column gap-5" >
        
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

                <FormControl sx={{ width: '100%' }} variant="standard" >
                    <InputLabel 
                    htmlFor="standard-adornment-password"
                    error={passwordError}
                    style = {{fontSize: 15, fontWeight: 'bold'}}
                    >
                    Password
                    </InputLabel>
                    <Input
                      id="standard-adornment-password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        onChange={handledChange}
                      error={passwordError}
                      onBlur={handleBlurPassword}
                    />
                   {
                    passwordError ?  <FormHelperText error >{passwordErrorMessage}</FormHelperText> : null
                   }
                </FormControl>
                    
                <div className="text-start d-flex align-items-start justify-content-between " >
  
               

                <ButtonCustomAuth
                isResolve={isResolve}
                ocurredError={ocurredError}
                text={'Sign In'}
                />
       
                <span className="text-center" 
                style={{fontSize: '13px'}} >
                Dont have a account? <br />
                <NavLink to={'/register'} >Create Account</NavLink>
                </span>

                </div>
      
                </form>

                <div className="d-flex align-items-end justify-content-start mt-2 mb-3"
                style={{minHeight: '30px'}}
                >
                <button onClick={() => firebaseLoginGoogle()}
                className="button-80 d-flex align-items-center justify-content-around py-1" >
                <img src="https://developers-dot-devsite-v2-prod.appspot.com/identity/sign-in/g-normal.png" 
                alt="Google" /> 
                Google
                </button>
                </div>

                <small><NavLink className='mt-2' to={'/resetpasword'}>Forget your password</NavLink></small>

              
                <AlertCustom 
                error={firebaseError} 
                tryLoginAgain={tryLoginAgain}
                />
           

            </div>
        </div>
     )
}
 
export default LoginForm