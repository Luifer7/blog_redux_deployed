import { Link } from "react-router-dom"
import { storage } from "../../firebase"
import { formatDate } from "../../services/formatDate"
import "../homepage/homepage.css"
import { LazyLoadImage } from "react-lazy-load-image-component"

import { Skeleton } from "@mui/material"

const Cuadro = ({data}) => {
    
    return(
        <Link to={`/post/${data?.id}`} 
        className="col-12 col-sm-6 mb-4 d-flex flex-column align-items-start text-decoration-none">

                    <div className="box-little-image w-100" >

                    {
                        data?.image_one ? 
                        <LazyLoadImage
                        className="image-square w-100 h-100"
                        src={`https://firebasestorage.googleapis.com/v0/b/blog-redux-51c80.appspot.com/o/${data?.image_one}?alt=media&token=${storage?.app?._options?.apiKey}`}
                        alt="" 
                        placeholder={<Skeleton variant="rectangular" width="100%" height={200}  />}
                        />
                        : <Skeleton variant="rectangular" width="100%" height={200}  />
                    }

                    </div>
                    
                    {
                        data?.image_one 
                        ?   <div className="w-100 p-1 d-flex flex-column align-items-start">
                        <div className="d-flex align-items-center justify-content-between w-100" >
                            <h5 className="text-danger fw-bold" >{data?.tagline}</h5>
                            <small className="fw-bold text-muted" >{formatDate(data?.date ? data?.date : Date.now())}</small>
                        </div>
                        <div className="content-square" >
                            <strong className="m-0 content-square-text" style={{fontSize: '16px'}} >
                            {data?.tittle}
                            </strong>
                        </div>
                    </div>
                    : <div className="w-100 p-1 d-flex flex-column align-items-start">
                        <Skeleton variant="text" width={'100%'} />
                    </div>

                    }
                  
                    
        </Link>
    )
}

const GridNews = ({posts, anotherPosts}) => {
    
    return ( 
        <div className="mx-2 my-2 p-2 text-dark d-flex row w-100 align-items-start justify-content-center" 
        style={{minHeight: '80vh'}} >


            <Link to={`/post/${posts?.id}`} className="col-12 col-lg-5 d-flex align-items-center justify-content-center mb-0 mb-sm-3" 
            style={{minHeight: '400px'}}
            >
                <div className="w-100 box-big-imagen" >
                    {
                        posts?.image_one 
                        ? <LazyLoadImage
                        className="image-big"
                        src={`https://firebasestorage.googleapis.com/v0/b/blog-redux-51c80.appspot.com/o/${posts?.image_one}?alt=media&token=${storage?.app?._options?.apiKey}`}
                        alt="" 
                        />
                        :  <Skeleton className="image-big" 
                        variant="rectangular" width={'100%'} height={500}/>
                    }
                  
                  {
                    posts?.tagline ?
                    <div className="content-big-imagen d-flex align-items-start flex-column gap-2 p-2" >
                    
                    <div className="d-flex align-items-center justify-content-between w-100 py-2" >
                        <h5 className="text-danger fw-bold" >{posts?.tagline}</h5>
                        <small className="fw-bold text-muted px-2">{formatDate(posts?.date ? posts?.date : Date.now())}</small>
                    </div>
                    <div className="content-square" >
                        <strong className="h2 m-0 content-square-text">
                        {posts?.tittle}
                        </strong>
                    </div>
                
                    </div>
                    : <div className="content-big-imagen d-flex align-items-start flex-column px-2 gap-1">
                        <Skeleton variant="text" width={'100%'} height={20} sx={{ fontSize: '2rem' }} />
                        <Skeleton variant="text" width={'100%'} height={20} sx={{ fontSize: '2rem' }} />
                        <Skeleton variant="rounded" width={'100%'} height={100} />
                    </div>
                  
                  }
               

                </div>

            </Link>

            <div className="col-12 col-lg-7 row d-flex align-items-center justify-content-center"  
            style={{minHeight: '400px'}} > 

                   
                    <Cuadro data={anotherPosts[1]} />  
                    <Cuadro data={anotherPosts[2]} />  
                    <Cuadro data={anotherPosts[3]} />  
                    <Cuadro data={anotherPosts[4] ? anotherPosts[4] : null} />  

            </div>

        </div>  
     )
}
 
export default GridNews