import {  useMemo, useRef, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPostAction, getSearchPostsAction, loadPostsAction, sortedpostsAction } from "../actions/postAction";
import { getColletBy, getCollet } from "../services/TempService";

const usePosts = ({sort, search}) => {
    const dispatch = useDispatch()
    const previousSearch = useRef(search)

    const { post } = useSelector(state => state.checkbox);
    const { posts, allposts } = useSelector(state => state.postReducer);
    
    const addAllPosts =  firePosts =>  dispatch(getAllPostAction(firePosts))
    const addSearchPosts =  firePosts =>  dispatch(getSearchPostsAction(firePosts))
    const postsSorted = (sortedposts) => dispatch(sortedpostsAction(sortedposts))

    const getPosts = useCallback( async (search) => {

            //if the current search query is the same as the previous one return  
            if(previousSearch.current === search && search === " ") return
            // Enable only when news is checked
            if(!post) return
            previousSearch.current = search;
            // set the loading as true
            loadPostsAction()
            const firePosts = await getColletBy(search)
            // add the posts
            addSearchPosts(firePosts)
    
        }
    ,[post]) 


    const getAllPosts =  async () => {       
        dispatch(loadPostsAction())
        // Only make the request once and save the response for future use
        if(allposts.length === 0){
            const postFirebase = await getCollet()
            addAllPosts(postFirebase)
            addSearchPosts(postFirebase)
        }else {
            addSearchPosts(allposts) 
        }
    }

    
    // sort by title
    const sortedposts = useMemo(() => {
    return sort 
    ? [...posts].sort((a, b) => a.tittle.localeCompare(b.tittle))
    :posts
    },[sort, posts ])

    useEffect(() => {
        postsSorted(sortedposts)
    }, [sortedposts])

    useEffect(() => {
        getAllPosts()
    },[])

    return{getPosts, getAllPosts}
}

export default usePosts;