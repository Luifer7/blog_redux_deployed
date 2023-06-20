
import { addDoc, collection, onSnapshot, query } from "firebase/firestore"
import { getStorage, ref, uploadBytes } from "firebase/storage"
import {db} from "../firebase"
import { useEffect } from "react"
import { useState } from "react"

export function useSendEntry () {

    const [ entries, setEntries ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)
    const [error, setError] = useState('')

    const storage = getStorage()
    
    const sendEntry = async (data) => {
        setIsLoading(true)
        try {
        const docRef = await addDoc(collection(db, 'entries'),
        data
        )
        setIsLoading(false)
        } catch (error) {
        setIsLoading(false)
        }
    }

    const getData =  () => {
        const q =  query(collection(db, "entries"))
        const data = []
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
            data.push(doc.data())
        })
        setEntries(data)    
        }) 
       
    }
    
    //3097152
    const validImageData = (fileContent) => {
        if (!fileContent) return {response: false, text: 'El archivo #1 no puede ser mayor a 2MG'}  
        let imageValidated = {}
        
        if (fileContent[0].size > 2000000) {
            imageValidated = {response: false, text: 'El archivo #1 no puede ser mayor a 2MG'}  
            return imageValidated  
        } 
        
        if (fileContent[1].size > 2000000) {
            imageValidated = {response: false, text: 'El archivo #2 no puede ser mayor a 2MG'}   
            return imageValidated
        }

        if (fileContent[0].size < 2000000 && fileContent[1].size < 2000000 ) {
            imageValidated =  {response: true, text: 'success'}
            return imageValidated
        }
    }

    const uploadSubmit = (filePath) => {

        setIsLoading(true)
     
        try {
        const storageRef_one = ref(storage, filePath[0].name)
        uploadBytes(storageRef_one, filePath[0]).then((snapshot) => {
        console.log(storageRef_one)
        })
        const storageRef_two = ref(storage, filePath[1].name)
        uploadBytes(storageRef_two, filePath[1]).then((snapshot) => {
        console.log(storageRef_two)
        })      
        setIsLoading(false) 
        setError('')    
        } catch (error) {
        setError(error)
        setIsLoading(false)
        }
       
    }

    useEffect(() => {
    getData()
    },[])
 
    return {
        sendEntry, uploadSubmit, validImageData,
        entries, isLoading
    }
}