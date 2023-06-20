import { 
    LOG_OUT_USER,
   SIGN_UP_USER
} from "../types"

const initialState = {
    currentUser: null,
    authenticateUser: '',
    loading: true
}

export default function(state = initialState, action){
    
    const {type, payload} = action
    
    switch(type){
        case SIGN_UP_USER:
            return { ...state,
                    currentUser: payload, 
                    authenticateUser: payload.email,
                    loading: false
                    }
        
        case LOG_OUT_USER:
            return{ ...state, 
                currentUser: payload, 
                authenticateUser: payload,
                loading: false }
        
        default: return state;
    }
}
