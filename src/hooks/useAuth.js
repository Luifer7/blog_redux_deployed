import { useState } from "react"
import { auth } from "../firebase"
import { 
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
updateProfile,
sendPasswordResetEmail,
signInWithPopup, GoogleAuthProvider
} from "firebase/auth"


export function useAuth () {
    
    const [ firebaseError, setFirebaseError] = useState('')
    const [ firebaseMessage, setFirebaseMessage] = useState('')
    const [isResolve, setIsResolve] = useState(true)
    const [ocurredError, setOcurredError] = useState(false)
   
    //register method  
    const firebaseUserRegister = async (usuario) => {
      setIsResolve(false)
      setOcurredError(true)
      const {email, password, username} = usuario
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            .then((res)=> {
             updateProfile(auth.currentUser, {
                  displayName: username
                }).then(() => {
                  //crear nueva coleccion usuarios           
                  setIsResolve(true)
                })
              }).catch((error)=> {
              setFirebaseError(error.code)
              setIsResolve(true)
            })
            } catch (error) {
              setFirebaseError(error.code)
              setIsResolve(true)
          }
    }

    //Login method
    const firebaseUserLogin = async (usuario) => {
        setIsResolve(false)
        setOcurredError(true)
        const {email, password} = usuario
        try {
        await signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
        setIsResolve(true)
        setOcurredError(false)
        })
        } catch (error) {
         setFirebaseError(error.code)
         setIsResolve(true)
        } 

    }

    //Logout method
    const firebaseLogout = async () => {
       const res = await signOut(auth)
    }

    const firebaseResetPassword = (email) => {
      setIsResolve(false)
      setOcurredError(true)
      sendPasswordResetEmail(auth, email)
      .then(() => {
      setFirebaseMessage('Message Success!')
      setFirebaseError('success')
      setIsResolve(true)
      })
      .catch((error) => {
      const errorCode = error.code
      setFirebaseError(errorCode)
      setIsResolve(true)
      })
    }

    const firebaseLoginGoogle = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
      .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    })
  }

  const tryLoginAgain = () => {
    setFirebaseError('')
    setOcurredError(false)
  }
  
      return {
        firebaseError, isResolve, firebaseMessage, ocurredError,
        firebaseUserRegister, 
        firebaseUserLogin, 
        firebaseLogout, 
        firebaseResetPassword,
        firebaseLoginGoogle,
        tryLoginAgain,
    }


}
