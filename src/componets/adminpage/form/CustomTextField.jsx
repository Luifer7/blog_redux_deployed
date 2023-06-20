import TextField from '@mui/material/TextField';
import { FormHelperText } from '@mui/material';
import { useState } from "react";
import Switch from '@mui/material/Switch';
import { useDispatch } from 'react-redux';
import { addFormEntry } from '../../../actions/formEntryActions';

const CustomTextField = ({labelTop, labelText, content, ph, isRequiered}) => {

    const dispatch = useDispatch()
    const [checked, setChecked] = useState(content ? false : true)
    const [fieldText, setFieldText] = useState({})
    const [ messageText, setMessageText] = useState('')
    
      const handleToogle = (event) => {
        if (fieldText[labelText] !== undefined && fieldText[labelText]) {
        setChecked(event.target.checked)
        if (!event.target.checked) {
          console.log('send dispacth with =>')
          console.log(fieldText.tittle)
          dispatch(addFormEntry(fieldText))
          setMessageText('')
        }
       } else {
        setMessageText('can not send a tagline input empty.')
       }
      }
      
      const handleChange = (event) => {
        setFieldText({[event.target.name] : event.target.value})
      }
    
      return ( 
        
        <div className='d-flex aling-items-center justify-content-between row px-2 mb-1 mt-3' >
          
        <div className='col-7 mt-1' >
        <strong 
        style={{fontSize: '15px'}}
        className={`d-flex fw-bold align-items-center mt-1 
        ${checked ? 'text-dark' : 'text-muted'}`}>
        {labelTop}
        <small style={{fontSize: '10px'}} 
        className='m-0 mx-2 mt-1'>
          {isRequiered ? '(Requiered)' : '(Optional)'}
        </small>
        </strong>
        </div>

        <Switch name={labelText} checked={checked} onChange={handleToogle} />
        <TextField
        disabled={!checked}
        label={labelText}
        id={`outlined-size-small${labelText}`}
        size="small"
        placeholder={ph ? ph : 'Type something'}
        fullWidth
        defaultValue={content}
        onChange={handleChange}
        name={labelText}
       />

      <FormHelperText>Add some {labelText} for your entry, this field is {isRequiered ? 'requiered' : 'optional'}</FormHelperText>
      <FormHelperText className='text-danger fw-bold' >{messageText ? messageText : ''}</FormHelperText>
      </div>
        
     )
}
 
export default CustomTextField