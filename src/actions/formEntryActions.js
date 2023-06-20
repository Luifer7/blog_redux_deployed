import { 
ADD_FORM_CATEGORY,
ADD_FORM_COMMENT, 
ADD_FORM_FILE_CONTENT_ONE, 
ADD_FORM_FILE_CONTENT_TWO, 
ADD_FORM_IMG_NAME_ONE, 
ADD_FORM_IMG_NAME_TWO, 
ADD_FORM_PARAGRAPH_ONE, 
ADD_FORM_PARAGRAPH_TWO, 
ADD_FORM_TAGGS, 
ADD_FORM_TAGLINE, 
ADD_FORM_TITTLE 
} from "../types";


export function addFormEntry (data) {
    
    let field = Object.keys(data)[0]

    return (dispatch) => {
       
        switch(field){
        case 'tittle':
            return dispatch(addTittle(data))
        case 'tagline':
            return dispatch(addTagline(data))
        case 'comment':
            return dispatch(addComment(data))
        case 'id':
            return dispatch(addCategory(data))
        case 'paragraph_one':
            return dispatch(addParagrahpOne(data))
        case 'paragraph_two':
            return dispatch(addParagrahpTwo(data))
        case 'img_one_name':
            return dispatch(addImgOne(data))
        case 'img_two_name':
            return dispatch(addImgTwo(data))
        default: return
        }
    }
}

export function addFormTaggs (data) {
    return (dispatch) => {
      dispatch(addTaggs(data))
    }
}

export function addFileContent (data, dataName) {
    let field = dataName
    return (dispatch) => {
        switch(field){
            case 'img_one_name':
                return dispatch(addFileOne(data))
            case 'img_two_name':
                return dispatch(addFileTwo(data))
            default: return
    }
  }
}

//Functions

const addFileOne = (data) => ({
    type: ADD_FORM_FILE_CONTENT_ONE,
    payload: data
})

const addFileTwo = (data) => ({
    type: ADD_FORM_FILE_CONTENT_TWO,
    payload: data
})


const addTittle = (data) => ({
    type: ADD_FORM_TITTLE,
    payload: data
})

const addTagline = (data) => ({
    type: ADD_FORM_TAGLINE,
    payload: data
})

const addComment = (data) => ({
    type: ADD_FORM_COMMENT,
    payload: data
})

const addCategory = (data) => ({
    type: ADD_FORM_CATEGORY,
    payload: data
})

const addTaggs = (data) => ({
    type: ADD_FORM_TAGGS,
    payload: data
})

const addParagrahpOne = (data) => ({
    type: ADD_FORM_PARAGRAPH_ONE,
    payload: data
})

const addParagrahpTwo = (data) => ({
    type: ADD_FORM_PARAGRAPH_TWO,
    payload: data
})

const addImgOne = (data) => ({
    type: ADD_FORM_IMG_NAME_ONE,
    payload: data
})

const addImgTwo = (data) => ({
    type: ADD_FORM_IMG_NAME_TWO,
    payload: data
})
