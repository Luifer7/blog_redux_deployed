import { NavLink, useNavigate } from "react-router-dom"
import "./auth.css"
import { Alert, FormControl, TextField } from "@mui/material"
import { useEffect, useState } from "react"

import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormHelperText from '@mui/material/FormHelperText';
import { useSelector } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import AlertCustom from "../layout/AlertCustom";
import ButtonCustomAuth from "../layout/ButtonCustomAuth";
import LinearProgressBar from "../layout/LinearProgressBar";


const RegisterForm = () => {

        
    const {
        firebaseUserRegister, 
        tryLoginAgain, 
        ocurredError, 
        firebaseError, 
        isResolve
    } = useAuth()
    const navigator = useNavigate()

    const {currentUser} = useSelector(state => state.user)
    
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

    const [user, setUser] = useState({})
    
    const [emailError, setEmailError] = useState(false)
    const [emailErrorMessage, setEmailErrorMessage] = useState('')

    const [passwordError, setPasswordError] = useState(false)
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('')

    const [usernameError, setUsernameError] = useState(false)
    const [usernameErrorMessage, setUsernameErrorMessage] = useState('')

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

        if (!user.username) {
            setUsernameError(true)
            setUsernameErrorMessage('You cannot send empty fields')
        }

        if (!user.email || !user.password || !user.username) {
            return
        }

        if (!emailError && !passwordError && !usernameError) {
         firebaseUserRegister(user) 
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
        if (e.target.name === 'username') {
            if (e.target.value.length > 5) {
                setUsernameError(false)
            } else {
                setUsernameError(true)
                setUsernameErrorMessage('must be more than 6 characters')
            }
            if (e.target.value === '') {
                setUsernameError(false)
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

    const handleBlurUsername = (e) => {
        if (e.target.value === '') {
            setUsernameError(true)
            setUsernameErrorMessage('You cannot send empty fields')
        }
    }

    useEffect(() => {
        if (currentUser?.uid) {
           navigator('/') 
        }
    },[currentUser])
    

    return ( 
        <div className="register-box">

            {
                !isResolve &&  <LinearProgressBar/>
            }
    
            <div className="container  text-center py-3 px-4 mt-2" >
                <h2 className="fw-bold mb-3" style={{textShadow: '1px 1px 1px black'}} >CREATE ACCOUNT</h2>
                <form onSubmit={handleSubmit} className="mt-4 d-flex flex-column gap-5" >
                <TextField 
                helperText={emailError ? emailErrorMessage : ''}
                FormHelperTextProps={{style: {fontSize: 13, fontWeight: 'bold'}}}
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
                    passwordError 
                    ? <FormHelperText error 
                    style={{fontSize: 13, fontWeight: 'bold'}}>
                        {passwordErrorMessage}</FormHelperText> : null
                   }
                </FormControl>
        
                <TextField 
                helperText={usernameError ? usernameErrorMessage : ''}
                FormHelperTextProps={{style: {fontSize: 13, fontWeight: 'bold'}}}
                id="standard-basic-three" 
                label="Username" 
                sx={{width: '100%'}}
                variant="standard" 
                onChange={handledChange}
                name="username"
                error={usernameError}
                onBlur={handleBlurUsername}
                InputLabelProps={{style: {fontSize: 15, fontWeight: 'bold'}}}
                />
            
                <div className="text-start d-flex align-items-center justify-content-between mt-3 gap-2" >
                 
                <ButtonCustomAuth
                isResolve={isResolve}
                ocurredError={ocurredError}
                text={'Sign Up'}
                />

                <span className="text-center" >Already have a account? <NavLink to={'/login'} >Login</NavLink> </span>
                </div>
                
                <AlertCustom 
                error={firebaseError} 
                tryLoginAgain={tryLoginAgain}
                />
        
                </form>
            </div>
        </div>
     )
}
 
export default RegisterForm