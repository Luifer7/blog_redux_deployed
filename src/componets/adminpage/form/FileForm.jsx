import { FormHelperText, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFileContent, addFormEntry } from "../../../actions/formEntryActions";
import { useEffect } from "react";
import Switch from '@mui/material/Switch';

const FileForm = ({content, typeName, typeReader, fileTextName, handleFileOne, handleFileTwo}) => {
    
    const dispatch = useDispatch()
    const [messagaText, setMessageText] = useState(
    {error: false, text: 'Add some file to upload, this field is requiered.'})
    const [checked, setChecked] = useState(content ? false : true)
    const [imageFileData, setImageFileData] = useState()
    const  [ img, setImg] = useState({
        [typeName]: '', [typeReader]: '', img_id: ''
    })
    const [ isDisabled, setIsDisabled] = useState(false)
    let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.webp)$/i

    const handleFileChange = (e) => {
      let valueToValid = document.getElementById(`${typeName}`).value
      if (allowedExtensions.exec(valueToValid) != null) {
        const fileData = e.target.files[0]   
        setImageFileData({...imageFileData, fileData: e.target.files[0]})
        let currentFileName = e.target.files[0].name
        const reader = new FileReader()
        reader.onloadend = () => setImg({[typeName]: currentFileName, [typeReader]: reader.result, img_id: Date.now()}) 
        reader.readAsDataURL(fileData)   
        setMessageText({error: false, text: 'Add some file to upload, this field is requiered.'})         
      } else {
        setMessageText({error: true, text: 'Only accept file type .png, .webp, .jpge and .jpg'})
        e.target.value = null   
      }
    }

    const handleDelete = () => {
        setImg({})
        dispatch(addFormEntry({[typeName]: '', [typeReader]: ''}))
        setImageFileData({})
        document.getElementById(`${typeName}`).value = null
        setChecked(false)
        setIsDisabled(false)
    }

    const handleSend = (e) => {
      let upload =  document.getElementById(`${typeName}`).files[0]
        console.log(JSON.stringify(upload))
        if (!e.target.checked) {
            if (img?.img_id) {
            dispatch(addFormEntry(img)) 
            dispatch(addFileContent(imageFileData, typeName))
            setChecked(true)
            setIsDisabled(true)
                if (fileTextName === 'one') {
                handleFileOne(imageFileData.fileData)
                }
                if (fileTextName === 'two') {
                handleFileTwo(imageFileData.fileData)
                }
            }  else {
            setMessageText({error: true, text: 'can not send a empty input.'})
            console.log("no paso")
            }
        }     
    }

    useEffect(() => {
    if (content) {
    setImg({[typeName]: content.name, [typeReader]: content.reader})
    }
    },[])
  
    return ( 
     
          <div className='d-flex aling-items-center justify-content-between row px-2 mb-1' >

                    
                <div className='col-7 mt-1' >
                <strong 
                style={{fontSize: '15px'}}
                className={`d-flex fw-bold align-items-center mt-1 
                ${checked ? 'text-dark' : 'text-muted'}`}>
                Choose Image {fileTextName}
                <small style={{fontSize: '10px'}} 
                className='m-0 mx-2 mt-1'>
                (Requiered)
                </small>
                </strong>
                </div>

                <Switch name={'example__'} checked={!checked} onChange={handleSend} />
             
                <TextField
                disabled={isDisabled}
                accept="image/*"
                onChange={handleFileChange}
                id={typeName} 
                type="file"
                defaultValue={imageFileData?.imageFileData ? imageFileData.fileData : ''}
                />
              
                <FormHelperText
                className={messagaText?.error ? 'text-danger fw-bold' : ''}
                >{messagaText ? messagaText.text : ''}</FormHelperText>
        
                {
                    img
                    ? <div className="d-flex align-items-end" >
                    <img width={160} 
                    src={img[typeReader]} 
                    alt={img.reader} />
                    {
                    img?.[typeReader] &&
                    <i className="bi bi-x h2" 
                    style={{cursor: 'pointer'}} 
                    onClick={handleDelete}></i>
                    }
                    </div>
                    : null
                }
            
          </div>
     )
}
 
export default FileForm