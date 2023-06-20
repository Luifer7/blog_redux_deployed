import React, { KeyboardEventHandler } from 'react';

import Switch from '@mui/material/Switch';
import CreatableSelect from 'react-select/creatable';
import { FormHelperText } from '@mui/material';
import makeAnimated from 'react-select/animated';
import { useDispatch } from 'react-redux';
import { addFormTaggs } from '../../../actions/formEntryActions';
import { Options } from 'react-select';

const components = {
  DropdownIndicator: null,
}

interface Option {
  readonly index: number;
  readonly label: string;
  readonly value: string;
}

const createOption = (label: string) => (
  { 
    index: Date.now(),
    label: label.toString(),
    value: label
  })
  

export default ({content}) => {
  
  const [ currentDefaultValue, setCurrentDefaultValue] = React.useState<readonly Option[]>(content)
  const [inputValue, setInputValue] = React.useState('');
  const [value, setValue] = React.useState<readonly Option[]>(content ? content : []);
  const [isInactive, setIsInactive] = React.useState<boolean>(content ? true : false);
  const [checked, setChecked] = React.useState<boolean>(content ? false : true);

  const animatedComponents = makeAnimated()

  const dispatch : any = useDispatch()

  const handleKeyDown: KeyboardEventHandler = (event) => {   
    chekRepeat()
    if (!inputValue) return
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        if (value.length >= 5){
          setIsInactive(true)
          setChecked(false)
          return dispatch(addFormTaggs(value))
        }
        setValue((prev) => [...prev, createOption(inputValue)])
        setInputValue('')
        event.preventDefault()
     
    }
  }

  const handleToogle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsInactive(!isInactive)
    setChecked(event.target.checked)
    dispatch(addFormTaggs(value))
  }

  
  const chekRepeat = () => {
   const filterArray = value.filter((field => field.label != inputValue))
   if (filterArray) {
    setValue(filterArray)
   }
  }


  return (

    <div className='d-flex aling-items-center justify-content-between row' >

    <div className='col-7 mt-1' >
      <strong 
      style={{fontSize: '15px'}}
      className={`d-flex fw-bold align-items-center mt-1 
      ${checked ? 'text-dark' : 'text-muted'}`}>
        Add taggs
      <small style={{fontSize: '10px'}} className='m-0 mx-2 mt-1'>(optional)</small>
      </strong>
    </div>


        <Switch name='select-multi' checked={checked} onChange={handleToogle}/>
       
        <CreatableSelect
        components={animatedComponents}
        inputValue={inputValue}
        isClearable
        isMulti
        menuIsOpen={false}
        onChange={(newValue) => setValue(newValue)}
        onInputChange={(newValue) => setInputValue(newValue)}
        onKeyDown={handleKeyDown}
        placeholder="Type something and press enter..."
        value={value}
        isDisabled={isInactive}
        />

      <FormHelperText>Add some taggs for your entry, no more than 5</FormHelperText>
      
    </div>
    
  )
}