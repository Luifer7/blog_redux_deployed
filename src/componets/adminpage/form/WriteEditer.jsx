import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Switch from '@mui/material/Switch';
import { FormControlLabel, FormHelperText } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch } from 'react-redux';
import { addFormEntry } from '../../../actions/formEntryActions';

export default function WriterEditer({content_current_one, content_current_two}) {
    const editorRef = useRef(null)
    const dispatch = useDispatch()
    const [checked, setChecked] = useState(content_current_one || content_current_two ? false : true)
    const [isRequiered, setIsRequiered] = useState(true)
    const [one, setOne] = useState(false)
    const [two, setTwo] = useState(false)
    const [itemProperty, setItemProperty] = useState('')
    const [currentContent, setCurrentContent] = useState('')
    const [messageText, setMessageText] = useState('')
  
    const log = (e) => {
      if (!one && !two) return setMessageText('can not send a empty field')
      setChecked(!checked)
      if (editorRef.current) {
        if (checked) {
          let paragraph = {[itemProperty]: editorRef.current.getContent()}
          if (paragraph[itemProperty] != 0) {
            dispatch(addFormEntry(paragraph)) 
            setMessageText('')
          }
          else {
            setMessageText('can not send a empty field')
          }
        }
      }
    }

    const handleChangeCheckbox = (event) => {
      if (event.target.name === 'one') {
        setOne(event.target.checked)
        setTwo(!event.target.checked)
        setChecked(true)
        setItemProperty('paragraph_one')
        setCurrentContent(content_current_one)
      }
      if (event.target.name === 'two') {
        setTwo(event.target.checked)
        setOne(!event.target.checked)
        setChecked(true)
        setItemProperty('paragraph_two')
        setCurrentContent(content_current_two)
      }
    }
    
    return (
       <div className='d-flex aling-items-center justify-content-between row px-2 mb-1' >
        <div className='col-7 mt-1' >
        <strong 
        style={{fontSize: '15px'}}
        className={`d-flex fw-bold align-items-center mt-1 
        ${checked ? 'text-dark' : 'text-muted'}`}>
        Choose Paragraph
        <small style={{fontSize: '10px'}} 
        className='m-0 mx-2 mt-1'>
          {isRequiered ? '(Requiered)' : '(Optional)'}
          </small>
        </strong>
        <FormControlLabel
          value="start"
          control={<Checkbox 
            checked={one} 
            name='one'
            onChange={handleChangeCheckbox} 
            inputProps={{ 'aria-label': 'controlled' }}
            />}
          label="paragraph_one"
          labelPlacement="start"
        />
        <FormControlLabel
          value="start"
          control={<Checkbox
            checked={two}
            name='two'
            onChange={handleChangeCheckbox}
            inputProps={{ 'aria-label': 'controlled' }}
            />}
          label="paragraph_two"
          labelPlacement="start"
        />
        </div>
                
        <Switch name='writter-editer' checked={checked} onChange={log} />
        <Editor
          apiKey='u7a2t4yhy9kbpzvqu3ppiygepkb2ipq5mj5f5dv4m927nd8x'
          onInit={(evt, editor) => editorRef.current = editor}
          initialValue={currentContent ? currentContent : '<p>This is the initial content of the editor.</p>'}
          init={{
            height: 300,
            menubar: true,
            plugins: [
              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
              'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
              'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
            ],
            toolbar: 'undo redo | blocks | ' +
              'bold italic forecolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
        />
       <FormHelperText>Add some content for your entry, this field is {isRequiered ? 'requiered' : 'optional'}</FormHelperText>
       <FormHelperText className='text-danger fw-bold' >{messageText ? messageText : ''}</FormHelperText>
        </div>

    )
  }