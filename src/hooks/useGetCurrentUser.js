import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { auth } from "../firebase"
import { getUser, logOut } from "../actions/authActions"


export function useGetCurrentUser (dispatch) {

    const [userIsLogin, setUserIsLogin] = useState(false)
    const [isResolve, setIsResolve] = useState(false)

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
              dispatch(getUser(user))
              setUserIsLogin(true)
            } else {
              dispatch(logOut(user))
              setUserIsLogin(false)
            }
            setIsResolve(true)
        })

    },[dispatch, userIsLogin, isResolve])

    return { userIsLogin, isResolve }
}