import { 
    ADD_FORM_CATEGORY,
    ADD_FORM_COMMENT, 
    ADD_FORM_IMG_NAME_ONE, 
    ADD_FORM_IMG_NAME_TWO, 
    ADD_FORM_PARAGRAPH_ONE, 
    ADD_FORM_PARAGRAPH_TWO, 
    ADD_FORM_TAGGS, 
    ADD_FORM_TAGLINE, 
    ADD_FORM_TITTLE,
    ADD_FORM_FILE_CONTENT_ONE,
    ADD_FORM_FILE_CONTENT_TWO
} from "../types";

const initialState = {
    category: '',
    tittle: '',
    tagline: '',
    comment: '',
    paragraph_one: '',
    paragraph_two: '',
    img_one: {},
    img_two: {},
    taggs: [],
    fileContent_one: {},
    fileContent_two: {},
}

export default function(state = initialState, action){
    
    const {type, payload} = action

    switch(type){
        case ADD_FORM_TITTLE:
            return { ...state,
                tittle: payload.tittle
            }
        case ADD_FORM_TAGLINE:
            return { ...state, 
                tagline: payload.tagline
            }
        case ADD_FORM_COMMENT:
            return { ...state, 
                comment: payload.comment
            }
        case ADD_FORM_CATEGORY:
            return { ...state, 
                category: payload.label
            }
        case ADD_FORM_TAGGS:
            return { ...state, 
                taggs: payload
            }
        case ADD_FORM_PARAGRAPH_ONE:
            return { ...state, 
                paragraph_one: payload.paragraph_one
            }
        case ADD_FORM_PARAGRAPH_TWO:
            return { ...state, 
                paragraph_two: payload.paragraph_two
            }
        case ADD_FORM_IMG_NAME_ONE :
            return { ...state, 
                img_one: {
                   name: payload.img_one_name, reader: payload.img_one_reader
                }
            }
        case ADD_FORM_IMG_NAME_TWO :
            return { ...state, 
                img_two: {
                    name: payload.img_two_name, reader: payload.img_two_reader
                }
            }
        case ADD_FORM_FILE_CONTENT_ONE:
            return { ...state, 
                    fileContent_one: 
                    { name: payload.name, 
                      lastModified: payload.lastModified,
                      size: payload.size,
                      type: payload.type,
                      webkitRelativePath: payload.webkitRelativePath,
                      lastModifiedDate: payload.lastModifiedDate
                    }
                }
        case ADD_FORM_FILE_CONTENT_TWO:
            return { ...state, 
                    fileContent_two: 
                    { name: payload.name, 
                      lastModified: payload.lastModified,
                      size: payload.size,
                      type: payload.type,
                      webkitRelativePath: payload.webkitRelativePath,
                      lastModifiedDate: payload.lastModifiedDate
                    }
                   }        
        default: return state;
    }
}
    