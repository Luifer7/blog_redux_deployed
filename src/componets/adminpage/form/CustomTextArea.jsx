import TextareaAutosize from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import Switch from '@mui/material/Switch';
import { Divider, FormHelperText, TextField } from '@mui/material';
import { useState } from 'react';

const CustomTextArea = () => {
  const [checked, setChecked] = useState(true)
  const [ quote, setQuote ] = useState({})
  const [ author, setAuthor ] = useState('')
  
  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
  };

  const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 24px ${
      theme.palette.mode === 'dark' ? blue[900] : blue[100]
    };
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );

  const handleChangeQuote = (event) => {
    setQuote({[event.target.name] : event.target.value})
  }

  const handleToogle = () => {
    console.log(author)
  }

  return (
    <div className='d-flex aling-items-center justify-content-between row px-2' >
         <div className='col-7 mt-1' >
      <strong 
      style={{fontSize: '15px'}}
      className={`d-flex fw-bold align-items-center mt-1 
      ${checked ? 'text-dark' : 'text-muted'}`}>
      Content Entry
      <small style={{fontSize: '10px'}} className='m-0 mx-2 mt-1'>(requiered)</small>
      </strong>
    </div>
    <Switch checked={checked} onChange={handleToogle} />
    <StyledTextarea 
    value={author}
     onChange={handleChangeQuote}
    aria-label="empty textarea" placeholder="Type something" />
    {
      /**
       *
    <TextField
        disabled={!checked}
        label={labelText}
        id="outlined-size-small"
        size="small"
        placeholder={ph ? ph : 'Type something'}
        fullWidth
        onChange={handleChange}
        name={labelText}
      />
           */
    }
    <FormHelperText>Choose the categoria for your new entry.</FormHelperText>
    </div>
  )
}
 
export default CustomTextArea;