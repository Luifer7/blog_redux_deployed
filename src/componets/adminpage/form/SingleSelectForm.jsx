
import { useState } from "react";
import Select from 'react-select'
import Switch from '@mui/material/Switch';
import { FormHelperText } from '@mui/material';
import { useDispatch } from "react-redux";
import { addFormEntry } from "../../../actions/formEntryActions";

const OtraPruebaSelect = ({content}) => {

  const [value, setValue] = useState({})
  const [checked, setChecked] = useState(content ? false : true)
  const [messageText, setMessageText] = useState('')

  const dispatch = useDispatch()

  const options = [
    {id: 1, label: 'news', value: 'news'},
    {id: 2, label: 'article', value: 'article'},
  ]

  const handleToogle = (event) => {   
    if (value.id) {
    setChecked(event.target.checked)
    if (!event.target.checked) {
        dispatch(addFormEntry(value))
        setChecked(false)
    }
    } else {
      setMessageText('can not send a Category empty input.')
    }
  }

  const handleChangeInput = (event) => {
    setValue(event)
    setMessageText('')
  }

  return (
    
       <div className='d-flex aling-items-center justify-content-between row mb-3' >

        <div className='col-7 mt-1' >
          <strong 
          style={{fontSize: '15px'}}
          className={`d-flex fw-bold align-items-center mt-1 
          ${checked ? 'text-dark' : 'text-muted'}`}>
          Choose Category
          <small style={{fontSize: '10px'}} className='m-0 mx-2 mt-1'>(requiered)</small>
          </strong>
        </div>

        <Switch name="select-checkbox" checked={checked} onChange={handleToogle} />
        
        <Select
        options={options}
        onChange = { handleChangeInput }
        isDisabled={!checked}
        defaultValue={content ? {id: 3, label: content, value: content} : {} }
        />
        <FormHelperText className={messageText ? 'text-danger fw-bold' : ''}>
          {messageText ? messageText : 'Choose the categoria for your new entry.'}
        </FormHelperText>
      
      </div>
  
  )
}

export default OtraPruebaSelect
