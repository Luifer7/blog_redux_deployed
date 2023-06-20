import {
    LOAD_POSTS, 
    GET_POST_SUCCES,
    SORTED_POSTS,
    GET_ALLPOSTS
} from "../types";

const initialState = {
    posts: [],
    loading: true,
    sortedposts:[],
    allposts:[]
}

export default function(state= initialState, action){
    switch(action.type){
        case LOAD_POSTS:
            return{
                ...state,
                loading: true,
            }
        case GET_POST_SUCCES:
            return{
                ...state,
                posts: action.payload,
                loading: false
            }
        case SORTED_POSTS:
            return{
                ...state,
                sortedposts: action.payload
            }
        case GET_ALLPOSTS:
                return{
                    ...state,
                    loading: false,
                    allposts: action.payload
        }
        default:
            return state;
    }
}