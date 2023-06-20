import {combineReducers} from "redux"
import checkboxReducer from "./checkBoxReducer"
import authReducer from "./authReducer"
import formEntryReducer from "./formEntryReducer"
import changePreviewReducer from "./changePreviewReducer"
import postReducer from "./postReducer";
import articlesReducer from "./articlesReducer";
import viewerReducer from "./viewerReducer"

export default combineReducers({
   checkbox: checkboxReducer,
   user: authReducer,
   form: formEntryReducer,
   resize: changePreviewReducer,
   postReducer,
   articlesReducer,
   viewer: viewerReducer
})