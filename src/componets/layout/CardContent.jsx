import { Link } from "react-router-dom";
import { storage } from "../../firebase";
import "../layout/layout.css";

const CardContent = ({post}) => {
    
    return ( 
        <Link to={`/post/${post.id}`} 
        className="w-100 text-decoration-none" 
        >
    
            <div className="w-100 text-white" 
            style={{height: '60%', overflow: 'hidden', objectFit: 'center', backgroundPosition: 'center' }} >
            <img className="img-card" 
             src={`https://firebasestorage.googleapis.com/v0/b/blog-redux-51c80.appspot.com/o/${post?.image_one}?alt=media&token=${storage?.app?._options?.apiKey}`}
                    style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div className="w-100 text-white " style={{height: '40%'}} >
                <div className="d-flex justify-content-between align-items-start py-1" >
                <h5 className="text-danger text-start fw-bold" >{post?.tagline}</h5>
                <strong className="text-muted" > <i className="bi bi-eye-fill" ></i> {post.views}</strong>
                </div>
                <div className="w-100 d-flex d-flex align-items-start justify-content-start content-square" >
                <strong className="text-start content-square-text" 
                style={{fontSize: '14px'}}
                >
                  {post?.tittle}
                </strong>
                </div>
            </div>
        </Link>
     )
}
 
export default CardContent