
import { addDoc, deleteDoc, collection, doc, updateDoc, 
    query, where, getDocs, orderBy, onSnapshot  } from "firebase/firestore"
import { deleteObject, getStorage, ref, uploadBytes } from "firebase/storage"
import { useState } from "react"
import { db } from "../../firebase"


export function useImageUpload () {
    
    const storage = getStorage()

    const [ filePath, setFilePath] = useState()
    const [ imageUploading, setImageUploading] = useState(false)
    const [ imageUploaded, setImageUploaded] = useState(false)
    
    const uploadChange = (fileContent) => {
        if (fileContent.size < 3097152) {
            if (fileContent.type === 'image/jpeg' || fileContent.type === 'image/png' ) {
               return true      
            } 
            else {
            alert('Solo puedes subir archivos .PNG o .JPG')
            return false
            }
        } else {
            alert('el archivo es muy grande, prueba con uno menor a 2 MG')
            return false
        }
    }

    const uploadSubmit = (filePath) => {
        if (uploadChange(filePath)) {
            setImageUploading(true)
            console.log(filePath)
            /** 
            //const storageRef = ref(storage, filePath.name)
            uploadBytes(storageRef, filePath).then((snapshot) => {
            setImageUploading(false)
            setImageUploaded(true)
           // setFilePath(null)
           // validImagen(filePath.name, id)
            })   
            */
            } else {
                alert('Esta pesado o no tiene la extencion adecuada')
            }
    }

    /** 
    const validImagen = async (imagenData, id) => {
        const q = query(collection(db, "imagenes"), where("imagen", "==", imagenData));
        const querySnapshot = await getDocs(q)
        if (!querySnapshot.empty) {
            console.log('ya has subido esta imagen')
            setImageUploaded(false)
        } else {
            addImagenData(imagenData, id)
            console.log("no existia ya la has subido!")
        }
       
    }
    */

    /** 
    const addImagenData = async (imagenData, id) => {
        try {
        const docRef = await addDoc(collection(db, 'imagenes'),
        {imagen: imagenData, idProducto: id, date: Date.now(), lastEdit: Date.now()}
        )
        const docRefEdit = doc(db, 'imagenes', docRef.id)
        await updateDoc(docRefEdit, { 
        id: docRef.id,
        userid: docRef?.firestore?._authCredentials.currentUser.uid
        })
        function clear(){
            setImageUploaded(false)
            observerData(idProducto)
        } 
        setTimeout(clear, 1500)
        } catch (error) {
        console.log(error)
        }
    }
    */

    const deleteImage = async (refName, refId) => {
       const desertRef = ref(storage, refName)
       deleteObject(desertRef).then(() => {
           
         }).catch((error) => {
           console.log(error)
         })
         await deleteDoc(doc(db, "imagenes", refId))
    }

    


    return {
        filePath, imageUploading, imageUploaded, 
        uploadSubmit, uploadChange, deleteImage, setPosterImage
    }
}