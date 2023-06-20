import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import ParceredContent from "../adminpage/form/ParceredContent";
import { getCurrentPost } from "../../services/TempService";
import { formatDate } from "../../services/formatDate";
import { Link } from "react-router-dom";

const ContentLayout = ({id}) => {

    const { posts } = useSelector(state => state.postReducer);
    const [contentPost, setContentPost] = useState({})
    
    useEffect(() => {
        let currentPost = []
        if (posts.length === 0) {
        async function getCurrentFirebaseData(id) {
            const  dataPost = await getCurrentPost(id)
            setContentPost(dataPost[0]) 
        }
        getCurrentFirebaseData(id)
       
         } else {
        currentPost = posts.filter(field => field.id === id)[0]
        setContentPost(currentPost) 
        }
    },[id])

    return ( 
        <div className="m-auto" 
        style={{overflow: 'hidden'}} >
    
        
            <div className="d-flex align-items-center justify-content-between mt-3 mb-1" >
            <strong className="tagline" >{contentPost.tagline ? contentPost.tagline : ''}</strong>
            <p className="fw-bold d-flex gap-1"><i className="bi bi-eye"></i> 
            <i>{contentPost?.views ? contentPost?.views : null}</i>
            </p>
            </div>
            
            <h1 className="tittle mb-4">{contentPost.tittle ? contentPost.tittle : ''}</h1>
            <h3 className="comment mb-4" >{contentPost.comment ? contentPost.comment : ''}</h3>
            
            <div className="mt-2">
            <img  className="border w-100" style={{height: 'auto'}}  
            src={`https://firebasestorage.googleapis.com/v0/b/blog-redux-51c80.appspot.com/o/${contentPost?.image_one}?alt=media&token=483abd86-6265-4246-9e41-83b9685cff40`} 
            alt="" />
            </div>
            
            <div className="creditos py-1 d-flex justify-content-between" >
               <div className="d-flex flex-column" >
               <strong className="h3 m-0 text-capitalize" >{contentPost.author}</strong>
                <small className="text-muted" >colaborad@r</small>
               </div>
               <div className="d-flex align-item-start fw-bold" >
                {formatDate(contentPost.date ? contentPost.date : Date.now())}
               </div>
            </div>
            <hr />

           <ParceredContent html={contentPost.paragraph_one}/> 

           <div className="mb-5">
            <img  className="border w-100" style={{height: 'auto'}}  
                src={`https://firebasestorage.googleapis.com/v0/b/blog-redux-51c80.appspot.com/o/${contentPost?.image_two}?alt=media&token=483abd86-6265-4246-9e41-83b9685cff40`} 
            alt="" />
            </div>
         
           <ParceredContent html={contentPost.paragraph_two}/> 
        
           <br />
           
           <div className="mb-5 d-flex gap-2 align-items-center flex-wrap" >
               <span className="fw-bold h5 m-0" >Taggs: </span>
            {
                contentPost ?
                contentPost?.taggs?.map((tag, i) => (
               
                  <span className="taggs" key={i}>
                    <Link className="text-decoration-none" to={`/taggs/${tag}`} >{tag}</Link>
                  </span>
               
               ))
               : null
            }
           </div>

   
        </div>
     )
}
 
export default ContentLayout