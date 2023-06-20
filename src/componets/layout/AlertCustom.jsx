import { Alert, Stack } from "@mui/material"
import Button from '@mui/material/Button';

const AlertCustom = ({message, error, type, tryLoginAgain}) => {

    const getTypeAlert = (error) => {
        if (error === 'auth/user-not-found') {
            return 'warning'    
        }
        if (error === 'auth/wrong-password') {
            return 'error'    
        }
        if (error === 'auth/too-many-requests') {
            return 'error'    
        }
        if (error === 'auth/email-already-in-use') {
            return 'warning'    
        }
        if (error === 'Message Success!') {
            return 'success'    
        }
        
    }

    const getErrorMessage = (error) => {
        if (error === 'auth/user-not-found') {
            return 'user-not-found'    
        }
        if (error === 'auth/wrong-password') {
            return 'wrong-password'    
        }
        if (error === 'auth/too-many-requests') {
            return 'too-many-requests'    
        }
        if (error === 'auth/email-already-in-use') {
            return 'email-already-in-use'    
        }
        
    }
    
    return ( 
            error && 
            <div className="mt-2 w-100" style={{minHeight:'51px'}}>
            <Stack>
            <Alert
             onClose={() => {tryLoginAgain()}}
            variant='filled' severity={type ? type : getTypeAlert(error)}>
            <strong style={{fontSize: '14px', letterSpacing: '1px'}}>
                {message ? message : getErrorMessage(error)}
            </strong>
            </Alert>
            </Stack>
            </div>
     )
}
 
export default AlertCustom;