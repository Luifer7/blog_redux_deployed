import { 
    MAKE_RESIZE,
} from "../types"

const initialState = {
    contentSize: '',
}

export default function(state= initialState , action){

    const {type, payload} = action

    switch(type){
        case MAKE_RESIZE:
            return{
                ...state,
               contentSize: payload
            }
        default:
            return state;
    }
}
