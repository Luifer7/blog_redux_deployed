
import { LOG_OUT_USER, SIGN_UP_USER } from "../types";

export function getUser (user) {
    return (dispatch) => {
        dispatch(getCurrentUser(user))
    }
}

export function logOut (user) {
    return (dispatch) => {
        dispatch(logOutUser(user))
    }
}

/**
export function ggSTart (usuario) {
    const {email, password} = usuario
    return async (dispatch) => {
        try {
           const res = await signInWithEmailAndPassword(auth, email, password)
            console.log(res.user)
        } catch (error) {
       
        }      
    }
}
 */

const getCurrentUser = (user) => ({
    type: SIGN_UP_USER,
    payload: user
})

const logOutUser = (user) => ({
    type: LOG_OUT_USER,
    payload: user
})

